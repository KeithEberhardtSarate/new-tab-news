/* eslint-disable no-unused-vars */
const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);

  function handleReturn(error, stdout, stderr) {
    if (stdout.search("accepting connections") === -1) {
      process.stdout.write(".");
      checkPostgres();
      return;
    }

    console.log("\n🟢 Postgres is done and accepting connections\n");
  }
}

process.stdout.write("\n🔴 Waiting for postgres accept conections");
checkPostgres();
