const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos en memoria (temporal)
let items = [
  { id: 1, nombre: 'Primer ítem' },
  { id: 2, nombre: 'Segundo ítem' }
];

// Rutas
app.get('/', (req, res) => {
  res.send('API Express funcionando 🚀');
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.post('/items', (req, res) => {
  const nuevoItem = {
    id: Date.now(),
    nombre: req.body.nombre
  };
  items.push(nuevoItem);
  res.status(201).json(nuevoItem);
});

app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  items = items.filter(item => item.id !== id);
  res.status(204).send();
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
