import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, X, Save, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getJob, createJob, updateJob } from '../../services/api';

const TAG_OPTIONS = ['FULL TIME', 'PART TIME', 'CONTRACT', 'REMOTE', 'HYBRID', 'ON-SITE'];

const emptyForm = {
  id: '',
  title: '',
  description: '',
  longDescription: '',
  tags: [],
  responsibilities: [''],
  qualifications: [''],
  benefits: [''],
  location: '',
  type: '',
  salary: '',
  contactName: '',
  contactRole: '',
  contactAvatar: '',
};

const JobForm = () => {
  const { id } = useParams();
  const isEditing = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(isEditing);
  const [error, setError] = useState('');

  // Load existing job data for editing
  useEffect(() => {
    if (isEditing) {
      getJob(id)
        .then((job) => {
          setForm({
            id: job.id,
            title: job.title || '',
            description: job.description || '',
            longDescription: job.longDescription || '',
            tags: job.tags || [],
            responsibilities: job.responsibilities?.length ? job.responsibilities : [''],
            qualifications: job.qualifications?.length ? job.qualifications : [''],
            benefits: job.benefits?.length ? job.benefits : [''],
            location: job.details?.location || '',
            type: job.details?.type || '',
            salary: job.details?.salary || '',
            contactName: job.contact?.name || '',
            contactRole: job.contact?.role || '',
            contactAvatar: job.contact?.avatar || '',
          });
        })
        .catch((err) => setError(err.message))
        .finally(() => setFetching(false));
    }
  }, [id, isEditing]);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const toggleTag = (tag) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag],
    }));
  };

  // Dynamic list helpers
  const handleListChange = (field, index, value) => {
    setForm((prev) => {
      const updated = [...prev[field]];
      updated[index] = value;
      return { ...prev, [field]: updated };
    });
  };

  const addListItem = (field) => {
    setForm((prev) => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeListItem = (field, index) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));
  };

  // Auto-generate slug from title
  const generateSlug = () => {
    if (!isEditing && form.title) {
      const slug = form.title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      handleChange('id', slug);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Filter out empty list items
      const payload = {
        ...form,
        responsibilities: form.responsibilities.filter((r) => r.trim()),
        qualifications: form.qualifications.filter((q) => q.trim()),
        benefits: form.benefits.filter((b) => b.trim()),
      };

      if (isEditing) {
        await updateJob(id, payload);
      } else {
        await createJob(payload);
      }

      navigate('/admin/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="p-8 flex justify-center items-center min-h-[60vh]">
        <div className="w-8 h-8 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl">
      {/* Header */}
      <button
        onClick={() => navigate('/admin/dashboard')}
        className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Back to Dashboard
      </button>

      <h1 className="text-3xl font-playfair font-bold text-white mb-2">
        {isEditing ? 'Edit Position' : 'Create New Position'}
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        {isEditing
          ? 'Update the job listing details below.'
          : 'Fill in the details below to create a new job listing.'}
      </p>

      {/* Error */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm"
        >
          {error}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ── Basic Info ── */}
        <Section title="Basic Information">
          <Field label="Job Title" required>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange('title', e.target.value)}
              onBlur={generateSlug}
              placeholder="e.g. Senior Marketing Specialist"
              required
              className="input-field"
            />
          </Field>

          <Field label="URL Slug (ID)" required>
            <input
              type="text"
              value={form.id}
              onChange={(e) => handleChange('id', e.target.value)}
              placeholder="e.g. senior-marketing-specialist"
              required
              disabled={isEditing}
              className={`input-field ${isEditing ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            <p className="text-xs text-gray-600 mt-1">
              This becomes the URL: /careers/{form.id || 'your-slug'}
            </p>
          </Field>

          <Field label="Short Description" required>
            <textarea
              value={form.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Brief description shown on the careers list page..."
              required
              rows={3}
              className="input-field resize-none"
            />
          </Field>

          <Field label="Full Description">
            <textarea
              value={form.longDescription}
              onChange={(e) => handleChange('longDescription', e.target.value)}
              placeholder="Detailed role overview shown on the job detail page..."
              rows={5}
              className="input-field resize-none"
            />
          </Field>
        </Section>

        {/* ── Tags ── */}
        <Section title="Tags">
          <div className="flex flex-wrap gap-2">
            {TAG_OPTIONS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider border transition-all duration-200 ${form.tags.includes(tag)
                    ? 'bg-[#FFD700]/10 text-[#FFD700] border-[#FFD700]/30'
                    : 'bg-white/5 text-gray-500 border-gray-800 hover:border-gray-600 hover:text-gray-300'
                  }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </Section>

        {/* ── Job Details ── */}
        <Section title="Job Details">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="Location">
              <input
                type="text"
                value={form.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="e.g. Hamburg, Germany"
                className="input-field"
              />
            </Field>
            <Field label="Type">
              <input
                type="text"
                value={form.type}
                onChange={(e) => handleChange('type', e.target.value)}
                placeholder="e.g. Full Time"
                className="input-field"
              />
            </Field>
            <Field label="Salary">
              <input
                type="text"
                value={form.salary}
                onChange={(e) => handleChange('salary', e.target.value)}
                placeholder="e.g. 40.000€ - 50.000€"
                className="input-field"
              />
            </Field>
          </div>
        </Section>

        {/* ── Dynamic Lists ── */}
        <DynamicListSection
          title="Responsibilities"
          items={form.responsibilities}
          field="responsibilities"
          placeholder="e.g. Develop and execute innovative marketing campaigns..."
          onChange={handleListChange}
          onAdd={addListItem}
          onRemove={removeListItem}
        />

        <DynamicListSection
          title="Qualifications"
          items={form.qualifications}
          field="qualifications"
          placeholder="e.g. Bachelor's degree in Marketing..."
          onChange={handleListChange}
          onAdd={addListItem}
          onRemove={removeListItem}
        />

        <DynamicListSection
          title="Benefits"
          items={form.benefits}
          field="benefits"
          placeholder="e.g. Competitive salary and performance bonuses..."
          onChange={handleListChange}
          onAdd={addListItem}
          onRemove={removeListItem}
        />

        {/* ── Contact Person ── */}
        <Section title="Contact Person">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Name">
              <input
                type="text"
                value={form.contactName}
                onChange={(e) => handleChange('contactName', e.target.value)}
                placeholder="e.g. Ava Williams"
                className="input-field"
              />
            </Field>
            <Field label="Role">
              <input
                type="text"
                value={form.contactRole}
                onChange={(e) => handleChange('contactRole', e.target.value)}
                placeholder="e.g. TEAM MANAGER"
                className="input-field"
              />
            </Field>
          </div>
          <Field label="Avatar URL">
            <input
              type="url"
              value={form.contactAvatar}
              onChange={(e) => handleChange('contactAvatar', e.target.value)}
              placeholder="https://images.unsplash.com/..."
              className="input-field"
            />
            {form.contactAvatar && (
              <div className="mt-3 flex items-center gap-3">
                <img
                  src={form.contactAvatar}
                  alt="Preview"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#FFD700]/30"
                  onError={(e) => (e.target.style.display = 'none')}
                />
                <span className="text-xs text-gray-500">Preview</span>
              </div>
            )}
          </Field>
        </Section>

        {/* ── Submit ── */}
        <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#E5C200] transition-all duration-200 text-sm disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" />
                {isEditing ? 'Updating...' : 'Creating...'}
              </>
            ) : (
              <>
                <Save size={18} />
                {isEditing ? 'Update Position' : 'Create Position'}
              </>
            )}
          </button>
          <button
            type="button"
            onClick={() => navigate('/admin/dashboard')}
            className="px-6 py-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>

      {/* Inline styles for form fields */}
      <style>{`
        .input-field {
          width: 100%;
          padding: 0.625rem 0.875rem;
          background: #0A0A0A;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 0.5rem;
          color: white;
          font-size: 0.875rem;
          outline: none;
          transition: all 0.2s;
        }
        .input-field::placeholder {
          color: #4B5563;
        }
        .input-field:focus {
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 0 0 2px rgba(255, 215, 0, 0.08);
        }
      `}</style>
    </div>
  );
};

// ── Sub-Components ──

const Section = ({ title, children }) => (
  <div className="bg-[#111111] border border-gray-800/50 rounded-xl p-6">
    <h2 className="text-lg font-bold text-white mb-5 font-playfair">{title}</h2>
    <div className="space-y-4">{children}</div>
  </div>
);

const Field = ({ label, required, children }) => (
  <div>
    <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
      {label}
      {required && <span className="text-[#FFD700] ml-1">*</span>}
    </label>
    {children}
  </div>
);

const DynamicListSection = ({ title, items, field, placeholder, onChange, onAdd, onRemove }) => (
  <Section title={title}>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="flex gap-2">
          <input
            type="text"
            value={item}
            onChange={(e) => onChange(field, index, e.target.value)}
            placeholder={placeholder}
            className="input-field flex-1"
          />
          {items.length > 1 && (
            <button
              type="button"
              onClick={() => onRemove(field, index)}
              className="p-2 text-gray-600 hover:text-red-400 transition-colors flex-shrink-0"
            >
              <X size={18} />
            </button>
          )}
        </div>
      ))}
    </div>
    <button
      type="button"
      onClick={() => onAdd(field)}
      className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#FFD700] hover:text-[#E5C200] transition-colors"
    >
      <Plus size={14} /> Add item
    </button>
  </Section>
);

export default JobForm;
