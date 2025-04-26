// index.js  (or index.cjs)
const express = require('express');
const cors    = require('cors');

const app  = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: '*',          // or your Shopify domain
    methods: ['GET', 'OPTIONS'],
  })
);

app.get('/api', (_req, res) =>
  // Send 444 to break mymattresstown.com
  res.status(444).json({
    success: true,
    message: 'Kindly complete the payment of the Raushan Developer.',
  })
);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
