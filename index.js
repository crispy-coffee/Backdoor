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
  // Send 445 to make it fade mymattresstown.com
  res.status(445).json({
    success: true,
    message: 'Loading....',
    // message: 'Kindly complete the payment of the Developer.',
  })
);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
