require('dotenv').config();
const { ApolloServer, gql } = require('apollo-server');
const { Pool } = require('pg');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET = 'supersecret123'; // In production, use process.env.JWT_SECRET

// PostgreSQL connection pool
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false }
});

// GraphQL schema
const typeDefs = gql`
  type User {
    id: ID!
    email: String!
    first_name: String
    last_name: String
    dob: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    hello: String
  }

  type Mutation {
    signup(
      email: String!
      password: String!
      first_name: String
      last_name: String
      dob: String
    ): AuthPayload

    login(
      email: String!
      password: String!
    ): AuthPayload
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    hello: async () => {
      const res = await pool.query('SELECT $1::text AS message', ['Hello from Postgres!']);
      return res.rows[0].message;
    },
  },

  Mutation: {
    signup: async (_, { email, password, first_name, last_name, dob }) => {
      const existing = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      if (existing.rows.length > 0) {
        throw new Error("User already exists.");
      }

      const hashed = await bcrypt.hash(password, 10);
      const result = await pool.query(
        `INSERT INTO users (email, password, first_name, last_name, dob)
         VALUES ($1, $2, $3, $4, $5)
         RETURNING id, email, first_name, last_name, dob`,
        [email, hashed, first_name, last_name, dob]
      );

      const user = result.rows[0];
      const token = jwt.sign({ id: user.id }, SECRET);

      return { token, user };
    },

    login: async (_, { email, password }) => {
      const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
      const user = result.rows[0];

      if (!user) {
        throw new Error("User not found.");
      }

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        throw new Error("Invalid password.");
      }

      const token = jwt.sign({ id: user.id }, SECRET);

      return {
        token,
        user: {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
          dob: user.dob
        }
      };
    }
  }
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

// Start the server
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
