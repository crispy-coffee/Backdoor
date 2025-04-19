// /index.js
import express from 'express';
import cors    from 'cors';

const app  = express();
const PORT = process.env.PORT || 4000;

/* ─── CORS ─── */
app.use(
  cors({
    origin: 'https://29vnuw-w9.myshopify.com',   //  ✱  put your storefront domain here
    methods: ['GET', 'OPTIONS'],
  })
);

/* ─── API route ─── */
app.get('/api', (req, res) => {
  // 200, 400, 401, 402 … pick the code you need
  return res.status(200).json({
    success: true
    // message: 'Kindly complete the payment.',
  });
});

/* ─── start server (not used on Vercel) ─── */
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
