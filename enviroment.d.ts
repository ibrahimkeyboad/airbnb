declare global {
  namespace NodeJS {
    interface ProcessEnv {
      GOOGLE_CLIENT_ID: string; // this is the line you want
      GOOGLE_CLIENT_SECRET: string; // this is the line you want
      NODE_ENV: 'development' | 'production';
    }
  }
}
export {};
