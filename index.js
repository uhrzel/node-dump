import { createConnection } from "mysql";

var con = createConnection({
  host: "localhost",
  user: "root",
  password: "arzelzolina10",
  database: "test_table",
});

const userData = { username: "uwu", password: "123" };

// Perform the insert operation
con.query("INSERT INTO login SET ?", userData, function (err, result) {
  if (err) {
    console.error("Error inserting data: " + err.stack);
    return;
  }
  console.log("Data inserted successfully. Insert ID: " + result.insertId);
});

con.end();
