module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "127.0.0.1",
      port: 32768,
      database: "strapi_portfolio",
      user: "postgres",
      password: "postgrespw",
      schema: env("DATABASE_SCHEMA", "public"), // Not required
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : false,
    },
    debug: false,
  },
});
