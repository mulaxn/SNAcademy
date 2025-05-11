require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const { Pool } = require('pg');

// PostgreSQL connection pool (with SSL enabled)
const pool = new Pool({
  host:     process.env.DB_HOST,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port:     process.env.DB_PORT,
  ssl: {
    // This lets you connect over TLS without validating the RDS CA
    // (OK for dev; in prod you'd download and use the RDS root cert)
    rejectUnauthorized: false
  }
});

// 1) Define your schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// 2) Define your resolvers
const resolvers = {
  Query: {
    hello: async () => {
      const res = await pool.query(
        'SELECT $1::text AS message',
        ['Hello from Postgres!']
      );
      return res.rows[0].message;
    },
  },
};

// 3) Create and start the server
const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
