import dotenv from 'dotenv';
dotenv.config();
export const testEnvVars = process.env.TEST_ENV_VARIABLE;
export const connectionString = process.env.DATABASE_URL;
