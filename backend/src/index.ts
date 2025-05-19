import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// TODO: implement auth and multi-tenant middleware
// TODO: implement QR code logic
// TODO: implement geolocation utilities

app.get('/', (req, res) => {
  res.send('AccessoCantieri backend');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
