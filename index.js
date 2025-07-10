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
  // Send 445 to make it fade mymattresstown.com every day by 1
  res.status(444).json({
    success: true,
    message: 'Loading....,',
    date: '2025-05-25T00:00:00.000Z'  //Year-Month-Day
    // message: 'Kindly complete the payment of the Developer.',
  })
);

app.get('/api/second', (_req, res) =>  //Year-Month-Day
  // Send 445 to make it fade mymattresstown.com every sec
  res.status(200).json({
    success: true,
    message: 'Loading....',
    date: '2025-05-25T00:00:00.000Z'  //Year-Month-Day
    // message: 'Kindly complete the payment of the Developer.',
  })
);
app.get('/api/week', (_req, res) =>
  // Send 445 to make it fade mymattresstown.com every day for a week
  res.status(200).json({
    success: true,
    message: 'Loading....',
    date: '2025-05-25T00:00:00.000Z' //Year-Month-Day
    // message: 'Kindly complete the payment of the Developer.',
  })
);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
