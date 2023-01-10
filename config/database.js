module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cep0vmun6mpkfa0ejqc0-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_zb0v'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'CGoSLZvJVHqvStis27EDawOf37ZyHiov'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
