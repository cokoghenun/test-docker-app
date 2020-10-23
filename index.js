require('dotenv').config();
const server = require('express')();
const PORT = process.env.PORT;

server.get('/', (req, res) => {
  const text = `Welcome to Test App. Your env secret is ${process.env.SECRET}.`;
  res.send(text);
});

server.listen(PORT, () => {
  console.log(`🚀 Server on http://localhost:${PORT}/`);
});
