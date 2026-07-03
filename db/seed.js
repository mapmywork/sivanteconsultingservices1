import { neon } from '@neondatabase/serverless';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import bcrypt from 'bcryptjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load .env manually for local script execution
const envPath = join(__dirname, '..', '.env');
try {
  const envContent = readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      process.env[key.trim()] = valueParts.join('=').trim();
    }
  });
} catch {
  console.log('No .env file found, using existing environment variables.');
}

if (!process.env.DATABASE_URL) {
  console.error('❌ DATABASE_URL is not set. Create a .env file from .env.example');
  process.exit(1);
}

const sql = neon(process.env.DATABASE_URL);

async function seed() {
  console.log('🚀 Starting database seed...\n');

  // 1. Create tables
  console.log('📦 Creating tables...');
  
  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password_hash VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS jobs (
      id VARCHAR(100) PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      long_description TEXT,
      tags TEXT[],
      responsibilities TEXT[],
      qualifications TEXT[],
      benefits TEXT[],
      location VARCHAR(255),
      type VARCHAR(100),
      salary VARCHAR(100),
      contact_name VARCHAR(255),
      contact_role VARCHAR(255),
      contact_avatar VARCHAR(500),
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
  console.log('   ✅ Tables created.\n');

  // 2. Create admin user
  console.log('👤 Creating admin user...');
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@sivante.com';
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  const passwordHash = await bcrypt.hash(adminPassword, 12);

  await sql`
    INSERT INTO admin_users (email, password_hash)
    VALUES (${adminEmail}, ${passwordHash})
    ON CONFLICT (email) DO UPDATE SET password_hash = ${passwordHash}
  `;
  console.log(`   ✅ Admin user created: ${adminEmail}\n`);

  // 3. Seed jobs
  console.log('💼 Seeding jobs...');
  const jobs = [
    {
      id: 'marketing-specialist',
      title: 'Marketing Specialist',
      description: 'Craft compelling campaigns, drive brand presence, and shape our market position with strategic marketing initiatives.',
      long_description: 'As a Marketing Specialist at Siavnte Consulting Services, you will play a pivotal role in shaping our brand presence and driving impactful marketing campaigns. From conceptualization to execution, you will contribute to our dynamic marketing strategy, ensuring a compelling and consistent narrative across various channels.',
      tags: ['FULL TIME', 'REMOTE'],
      responsibilities: [
        'Develop and execute innovative marketing campaigns to enhance brand visibility.',
        'Collaborate with cross-functional teams to create engaging content and promotional materials.',
        'Analyze market trends and competitor activities to identify strategic opportunities.',
        'Manage social media presence, optimizing platforms for brand awareness and engagement.',
        'Track and analyze campaign performance, providing insights for continuous improvement.',
        'Collaborate with external agencies and partners to maximize marketing impact.',
        'Stay updated on industry trends and emerging marketing technologies.'
      ],
      qualifications: [
        "Bachelor's degree in Marketing, Communications, or a related field.",
        'Proven experience in developing and implementing successful marketing campaigns.',
        'Strong creative and analytical skills, with an eye for detail.',
        'Proficiency in digital marketing platforms and social media management.',
        'Excellent communication and interpersonal skills.',
        'Ability to work collaboratively in a fast-paced, dynamic environment.'
      ],
      benefits: [
        'Competitive salary based on experience and performance.',
        'Health, dental, and vision insurance coverage.',
        'Opportunities for professional development and continued learning.',
        'Collaborative and inclusive work culture.',
        'Flexible work hours and remote work options.',
        'Employee wellness programs and initiatives.'
      ],
      location: 'Hamburg, Germany',
      type: 'Full Time',
      salary: '40.000€ - 50.000€',
      contact_name: 'Ava Williams',
      contact_role: 'TEAM MANAGER',
      contact_avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 'senior-business-analyst',
      title: 'Senior Business Analyst',
      description: 'Analyze complex business problems, define technical requirements, and deliver strategic insights for our diverse clientele.',
      long_description: 'Join our team as a Senior Business Analyst. You will work closely with stakeholders to understand business needs and translate them into actionable technical requirements, driving strategic projects from inception to delivery.',
      tags: ['FULL TIME', 'HYBRID'],
      responsibilities: [
        'Gather and analyze business requirements from key stakeholders.',
        'Develop comprehensive project documentation and technical specifications.',
        'Facilitate communication between business and IT teams.',
        'Identify process improvements and propose strategic solutions.',
        'Conduct user acceptance testing and ensure quality delivery.'
      ],
      qualifications: [
        "Master's or Bachelor's degree in Business, Finance, or IT.",
        '5+ years of experience in business analysis or management consulting.',
        'Strong problem-solving skills and critical thinking.',
        'Experience with Agile/Scrum methodologies.',
        'Excellent presentation and stakeholder management skills.'
      ],
      benefits: [
        'Competitive salary and performance bonuses.',
        'Comprehensive health insurance.',
        'Professional certification reimbursement.',
        'Hybrid work model (3 days in office).',
        'Generous paid time off.'
      ],
      location: 'London, UK',
      type: 'Full Time',
      salary: '60.000£ - 80.000£',
      contact_name: 'Marcus Chen',
      contact_role: 'RECRUITMENT LEAD',
      contact_avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    },
    {
      id: 'financial-consultant',
      title: 'Financial Consultant',
      description: 'Provide expert financial advice, develop growth models, and help businesses optimize their economic performance.',
      long_description: 'As a Financial Consultant, you will advise clients on optimizing their financial strategies, conducting risk assessments, and developing sustainable economic growth models tailored to their unique industry challenges.',
      tags: ['CONTRACT', 'REMOTE'],
      responsibilities: [
        'Conduct detailed financial analysis and risk assessments.',
        'Develop financial models for forecasting and budgeting.',
        'Advise clients on investment strategies and capital allocation.',
        'Prepare comprehensive financial reports and presentations.',
        'Monitor market trends and regulatory changes affecting clients.'
      ],
      qualifications: [
        "CFA, CPA, or Master's degree in Finance.",
        'Proven track record in financial consulting or investment banking.',
        'Deep understanding of corporate finance and valuation methods.',
        'Advanced proficiency in financial modeling software.',
        'Exceptional analytical and numerical skills.'
      ],
      benefits: [
        'Highly competitive contract rates.',
        'Fully remote flexibility.',
        'Networking opportunities with top-tier clients.',
        'Access to premium financial research platforms.',
        'Performance-based incentives.'
      ],
      location: 'Remote, Global',
      type: 'Contract',
      salary: 'Project Based',
      contact_name: 'Sarah Jenkins',
      contact_role: 'PARTNER',
      contact_avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80'
    }
  ];

  for (const job of jobs) {
    await sql`
      INSERT INTO jobs (id, title, description, long_description, tags, responsibilities, qualifications, benefits, location, type, salary, contact_name, contact_role, contact_avatar)
      VALUES (
        ${job.id},
        ${job.title},
        ${job.description},
        ${job.long_description},
        ${job.tags},
        ${job.responsibilities},
        ${job.qualifications},
        ${job.benefits},
        ${job.location},
        ${job.type},
        ${job.salary},
        ${job.contact_name},
        ${job.contact_role},
        ${job.contact_avatar}
      )
      ON CONFLICT (id) DO UPDATE SET
        title = ${job.title},
        description = ${job.description},
        long_description = ${job.long_description},
        tags = ${job.tags},
        responsibilities = ${job.responsibilities},
        qualifications = ${job.qualifications},
        benefits = ${job.benefits},
        location = ${job.location},
        type = ${job.type},
        salary = ${job.salary},
        contact_name = ${job.contact_name},
        contact_role = ${job.contact_role},
        contact_avatar = ${job.contact_avatar},
        updated_at = NOW()
    `;
    console.log(`   ✅ Job seeded: ${job.title}`);
  }

  console.log('\n🎉 Database seeded successfully!');
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err);
  process.exit(1);
});
