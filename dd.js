const autocannon = require("autocannon");

const url = "https://6xi47v-3000.csb.app/about"; // Replace with your server URL
const connections = 10000; // Number of concurrent connections
const duration = 1; // Duration of the load test in seconds

const instance = autocannon(
  {
    url,
    connections,
    duration,
  },
  (err, result) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(result);
  }
);

autocannon.track(instance);
