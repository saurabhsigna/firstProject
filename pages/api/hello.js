export default async function handler(req, res) {
  function performIntensiveComputation() {
    const start = Date.now();
    while (Date.now() - start < 5000) {
      const result = Math.sqrt(Math.random() ** Math.random());
    }
  }

  performIntensiveComputation();

  res.status(200).json({ message: "High CPU usage on the server-side" });
}
