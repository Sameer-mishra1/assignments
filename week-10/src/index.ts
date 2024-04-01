import { Client } from "pg"

const client = new Client({
    connectionString: "postgresql://sameermishra6666:9oInizU5lmwT@ep-broad-morning-48445305.us-east-2.aws.neon.tech/test?sslmode=require"
})


async function insertData() {

    try {
        await client.connect(); // Ensure client connection is established
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
        const res = await client.query(insertQuery);
        console.log('Insertion success:', res); // Output insertion result
      } catch (err) {
        console.error('Error during the insertion:', err);
      } finally {
        await client.end(); // Close the client connection
      }
}

insertData()