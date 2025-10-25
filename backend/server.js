import express from 'express';
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || '12345',
  database: process.env.DB_NAME || 'parcial_db',
  port: Number(process.env.DB_PORT) || 5432,
});

app.use(express.json());

const checkDBConnection = async () => {
  try {
    await pool.query('SELECT 1'); 
    console.log('conexin a la DB exitosa');
  } catch (err) {
    console.error('errir', err.message);
    setTimeout(checkDBConnection, 3000);
  }
};

checkDBConnection();

app.get('/', async (_req, res) => {
  try {
    const result = await pool.query('SELECT * FROM estudiantes');
    res.json({
      dbStatus: 'Conexionx exitosa',
      estudiantes: result.rows,
    });
  } catch (err) {
    res.status(500).json({ error: 'Error conectando ', details: err.message });
  }
});


app.get('/health', (_req, res) => {
  res.json({ status: 'OK' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
