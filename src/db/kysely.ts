import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';
import { DB } from './types.generated';

const dialect = new PostgresDialect({
  pool: new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  })
});

// Database interface is passed to Kysely's constructor as a type argument
export const db = new Kysely<DB>({
  dialect,
});

// Export the database type and query builder type
export type Database = DB;
export type { Kysely }; 