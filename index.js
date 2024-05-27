import { createConnection } from "mysql";

var con = createConnection({
  host: "localhost",
  user: "root",
  password: "arzelzolina10",
  database: "test_table",
});

const userData = { username: "uwu", password: "123" };

// Perform the insert operation
con.query("select * from login", function (err, result) {
  if (err) {
    console.error("Error inserting data: " + err.stack);
    return;
  }
  console.log(result);
});

con.end();
