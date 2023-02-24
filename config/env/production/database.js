module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env("DATABASE_PORT", "32768"),
      database: env("DATABASE_NAME", "strapi_portfolio"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgrespw"),
      schema: env("DATABASE_URL", "public"), // Not required
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : false,
    },
    debug: false,
  },
});
