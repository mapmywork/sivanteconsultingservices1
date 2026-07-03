import { getDb } from '../../db/connection.js';
import { verifyToken } from '../_middleware/auth.js';

export default async function handler(req, res) {
  // GET /api/jobs — public, list all jobs
  if (req.method === 'GET') {
    try {
      const sql = getDb();
      const jobs = await sql`
        SELECT * FROM jobs ORDER BY created_at DESC
      `;

      // Transform DB rows to match frontend expected format
      const formatted = jobs.map(formatJob);
      return res.status(200).json(formatted);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  // POST /api/jobs — protected, create a job
  if (req.method === 'POST') {
    const user = verifyToken(req);
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
      const {
        id, title, description, longDescription,
        tags, responsibilities, qualifications, benefits,
        location, type, salary,
        contactName, contactRole, contactAvatar
      } = req.body;

      if (!id || !title || !description) {
        return res.status(400).json({ error: 'id, title, and description are required' });
      }

      const sql = getDb();
      // Check if ID already exists
      const existing = await sql`SELECT id FROM jobs WHERE id = ${id}`;
      if (existing.length > 0) {
        return res.status(409).json({ error: 'A job with this ID already exists' });
      }

      await sql`
        INSERT INTO jobs (id, title, description, long_description, tags, responsibilities, qualifications, benefits, location, type, salary, contact_name, contact_role, contact_avatar)
        VALUES (
          ${id},
          ${title},
          ${description},
          ${longDescription || null},
          ${tags || []},
          ${responsibilities || []},
          ${qualifications || []},
          ${benefits || []},
          ${location || null},
          ${type || null},
          ${salary || null},
          ${contactName || null},
          ${contactRole || null},
          ${contactAvatar || null}
        )
      `;

      const inserted = await sql`SELECT * FROM jobs WHERE id = ${id}`;
      return res.status(201).json(formatJob(inserted[0]));
    } catch (error) {
      console.error('Error creating job:', error);
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
