module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "lucky.db.elephantsql.com"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "hpjdpejp"),
      user: env("DATABASE_USERNAME", "hpjdpejp"),
      password: env("DATABASE_PASSWORD", "P0-oS7hUL2TnXVOwRQaIInFVti3y6Ivv"),
      ssl: env.bool("DATABASE_SSL", true),
    },
    pool: {
      min: 0,
      max: 5,
    },
  },
});
