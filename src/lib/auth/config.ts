import 'dotenv/config';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from '@better-auth/drizzle-adapter/relations-v2';
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from '../../db/schema';
import { db } from '@/db/db';

const sql = neon(process.env.DATABASE_URL!);
// export const db = drizzle(sql, { schema });

export const auth = betterAuth({
  database: drizzleAdapter(db, { provider: 'pg', schema }),
  advanced: {
    database: {
      generateId: "uuid"
    }
  },
  secret: process.env.BETTER_AUTH_SECRET,
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
});
