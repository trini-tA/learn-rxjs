export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 27017) || 27017,
  },
});
