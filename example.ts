// import "dotenv/config"; // Uncomment if using dotenv
import * as pg from "pg";

const client = new pg.Client({
  connectionString: process.env.DATABASE_URL,

  // If using separate variables
  // host: process.env.POSTGRES_HOST,
  // user: process.env.POSTGRES_USER,
  // password: process.env.POSTGRES_PASSWORD,
  // database: process.env.POSTGRES_DB,
  // port: Number(process.env.POSTGRES_PORT),
});

await client.connect();

const res = await client.query("SELECT * FROM users");

const users = res.rows;

console.log({ users });

await client.end();
