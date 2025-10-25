import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    nombre: 'Hants hernandez',
    expediente: '25614'
  });
});

app.get('/health', (_req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`si jala puerto ${PORT}`);
});
