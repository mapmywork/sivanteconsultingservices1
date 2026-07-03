import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, PlusCircle, Pencil, Trash2, MapPin, Clock, AlertTriangle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getJobs, deleteJob } from '../../services/api';

const AdminDashboard = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [deleteModal, setDeleteModal] = useState(null);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getJobs();
      setJobs(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteModal) return;
    setDeleting(true);
    try {
      await deleteJob(deleteModal.id);
      setJobs(jobs.filter((j) => j.id !== deleteModal.id));
      setToast({ type: 'success', message: `"${deleteModal.title}" has been deleted.` });
      setDeleteModal(null);
    } catch (err) {
      setToast({ type: 'error', message: err.message });
    } finally {
      setDeleting(false);
    }
  };

  // Auto-dismiss toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  // Compute stats
  const totalJobs = jobs.length;
  const fullTimeCount = jobs.filter((j) => j.tags?.includes('FULL TIME')).length;
  const remoteCount = jobs.filter((j) => j.tags?.includes('REMOTE')).length;

  return (
    <div className="p-8">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-lg border text-sm font-medium flex items-center gap-3 shadow-xl ${
              toast.type === 'success'
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'bg-red-500/10 border-red-500/30 text-red-400'
            }`}
          >
            {toast.message}
            <button onClick={() => setToast(null)} className="hover:opacity-70">
              <X size={14} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-playfair font-bold text-white">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Manage your job openings</p>
        </div>
        <Link
          to="/admin/jobs/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FFD700] text-black font-bold rounded-lg hover:bg-[#E5C200] transition-all duration-200 text-sm"
        >
          <PlusCircle size={18} />
          Add New Job
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Total Openings', value: totalJobs, icon: Briefcase, color: '#FFD700' },
          { label: 'Full Time', value: fullTimeCount, icon: Clock, color: '#22C55E' },
          { label: 'Remote', value: remoteCount, icon: MapPin, color: '#3B82F6' },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#111111] border border-gray-800/50 rounded-xl p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
              </div>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon size={20} style={{ color: stat.color }} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Error */}
      {error && (
        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Jobs Table */}
      <div className="bg-[#111111] border border-gray-800/50 rounded-xl overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800/50">
          <h2 className="text-lg font-bold text-white">All Positions</h2>
        </div>

        {loading ? (
          <div className="p-12 flex justify-center">
            <div className="w-8 h-8 border-2 border-[#FFD700] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : jobs.length === 0 ? (
          <div className="p-12 text-center">
            <Briefcase className="mx-auto mb-4 text-gray-700" size={40} />
            <p className="text-gray-500 mb-4">No job openings yet.</p>
            <Link
              to="/admin/jobs/new"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFD700]/10 text-[#FFD700] rounded-lg border border-[#FFD700]/20 text-sm font-medium hover:bg-[#FFD700]/20 transition-all"
            >
              <PlusCircle size={16} /> Create your first job
            </Link>
          </div>
        ) : (
          <div className="divide-y divide-gray-800/30">
            {jobs.map((job, idx) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="px-6 py-5 flex items-center justify-between hover:bg-white/[0.02] transition-colors group"
              >
                <div className="flex-1 min-w-0 pr-4">
                  <h3 className="text-base font-medium text-white truncate">{job.title}</h3>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <MapPin size={12} /> {job.details?.location || 'N/A'}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock size={12} /> {job.details?.type || 'N/A'}
                    </span>
                    {job.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-gray-800/50 text-gray-400 text-[10px] font-mono font-medium rounded uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => navigate(`/admin/jobs/edit/${job.id}`)}
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all border border-transparent hover:border-[#FFD700]/20"
                    title="Edit"
                  >
                    <Pencil size={16} />
                  </button>
                  <button
                    onClick={() => setDeleteModal(job)}
                    className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all border border-transparent hover:border-red-500/20"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            onClick={() => !deleting && setDeleteModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#111111] border border-gray-800 rounded-xl p-6 max-w-md w-full shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                  <AlertTriangle className="text-red-400" size={20} />
                </div>
                <h3 className="text-lg font-bold text-white">Delete Job</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Are you sure you want to delete <strong className="text-white">"{deleteModal.title}"</strong>? This action cannot be undone and the position will be removed from the careers page immediately.
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setDeleteModal(null)}
                  disabled={deleting}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white bg-white/5 rounded-lg border border-gray-800 hover:border-gray-700 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDelete}
                  disabled={deleting}
                  className="px-4 py-2 text-sm font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {deleting ? (
                    <>
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Deleting...
                    </>
                  ) : (
                    'Delete'
                  )}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminDashboard;
