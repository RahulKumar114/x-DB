  import { config } from 'dotenv';
  config();

  export const {
    DATABASE_HOST,
    DATABASE_PORT,
    DATABASE_USER,
    DATABASE_PASSWORD,
    DATABASE_NAME,  
    SENDGRID_API_KEY,
    SENDGRID_FROM_EMAIL,
    AWS_REGION,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_SQS_URL,
    NODE_ENV
  } = process.env;
