import { getDb } from '../../db/connection.js';
import { verifyToken } from '../_middleware/auth.js';

export default async function handler(req, res) {
  const { id } = req.query;
  const sql = getDb();

  // GET /api/jobs/:id — public, get single job
  if (req.method === 'GET') {
    try {
      const jobs = await sql`SELECT * FROM jobs WHERE id = ${id}`;

      if (jobs.length === 0) {
        return res.status(404).json({ error: 'Job not found' });
      }

      return res.status(200).json(formatJob(jobs[0]));
    } catch (error) {
      console.error('Error fetching job:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // PUT /api/jobs/:id — protected, update a job
  if (req.method === 'PUT') {
    const user = verifyToken(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const existing = await sql`SELECT id FROM jobs WHERE id = ${id}`;
      if (existing.length === 0) {
        return res.status(404).json({ error: 'Job not found' });
      }

      const {
        title, description, longDescription,
        tags, responsibilities, qualifications, benefits,
        location, type, salary,
        contactName, contactRole, contactAvatar
      } = req.body;

      await sql`
        UPDATE jobs SET
          title = COALESCE(${title || null}, title),
          description = COALESCE(${description || null}, description),
          long_description = COALESCE(${longDescription || null}, long_description),
          tags = COALESCE(${tags || null}, tags),
          responsibilities = COALESCE(${responsibilities || null}, responsibilities),
          qualifications = COALESCE(${qualifications || null}, qualifications),
          benefits = COALESCE(${benefits || null}, benefits),
          location = COALESCE(${location || null}, location),
          type = COALESCE(${type || null}, type),
          salary = COALESCE(${salary || null}, salary),
          contact_name = COALESCE(${contactName || null}, contact_name),
          contact_role = COALESCE(${contactRole || null}, contact_role),
          contact_avatar = COALESCE(${contactAvatar || null}, contact_avatar),
          updated_at = NOW()
        WHERE id = ${id}
      `;

      const updated = await sql`SELECT * FROM jobs WHERE id = ${id}`;
      return res.status(200).json(formatJob(updated[0]));
    } catch (error) {
      console.error('Error updating job:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // DELETE /api/jobs/:id — protected, delete a job
  if (req.method === 'DELETE') {
    const user = verifyToken(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const existing = await sql`SELECT id FROM jobs WHERE id = ${id}`;
      if (existing.length === 0) {
        return res.status(404).json({ error: 'Job not found' });
      }

      await sql`DELETE FROM jobs WHERE id = ${id}`;
      return res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      console.error('Error deleting job:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

function formatJob(row) {
  return {
    id: row.id,
    title: row.title,
    description: row.description,
    longDescription: row.long_description,
    tags: row.tags || [],
    responsibilities: row.responsibilities || [],
    qualifications: row.qualifications || [],
    benefits: row.benefits || [],
    details: {
      location: row.location,
      type: row.type,
      salary: row.salary
    },
    contact: {
      name: row.contact_name,
      role: row.contact_role,
      avatar: row.contact_avatar
    },
    createdAt: row.created_at,
    updatedAt: row.updated_at
  };
}
