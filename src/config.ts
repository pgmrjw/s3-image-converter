import * as dotenv from 'dotenv';
dotenv.config();

export const POSTGRES_PORT = process.env.POSTGRES_PORT;
export const POSTGRES_USERNAME = process.env.POSTGRES_USERNAME;
export const POSTGRES_PASSWORD = process.env.POSTGRES_PASSWORD;
export const POSTGRES_DATABASE = process.env.POSTGRES_DATABASE;
export const POSTGRES_HOST = process.env.POSTGRES_HOST;
