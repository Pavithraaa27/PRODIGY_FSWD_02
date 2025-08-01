const express = require('express');
const cors = require('cors');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

const SECRET = 'secureAuthKey';

const read = (file) => JSON.parse(fs.readFileSync(file, 'utf-8'));
const write = (file, data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// LOGIN
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const users = read('users.json');
  if (!users[email]) return res.status(401).send('Admin not found');
  const match = await bcrypt.compare(password, users[email].password);
  if (!match) return res.status(401).send('Wrong password');

  const token = jwt.sign({ email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});

// AUTH MIDDLEWARE
function auth(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.sendStatus(401);
  try {
    jwt.verify(token, SECRET);
    next();
  } catch {
    res.sendStatus(403);
  }
}

// EMPLOYEE ROUTES
app.get('/employees', auth, (req, res) => {
  res.json(read('employees.json'));
});

app.post('/employees', auth, (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).send('Name and Email required');
  const employees = read('employees.json');
  const newEmp = { id: Date.now(), name, email };
  employees.push(newEmp);
  write('employees.json', employees);
  res.json(newEmp);
});

app.put('/employees/:id', auth, (req, res) => {
  const employees = read('employees.json');
  const updated = employees.map(emp => emp.id == req.params.id ? { ...emp, ...req.body } : emp);
  write('employees.json', updated);
  res.send('Updated');
});

app.delete('/employees/:id', auth, (req, res) => {
  const employees = read('employees.json');
  const filtered = employees.filter(emp => emp.id != req.params.id);
  write('employees.json', filtered);
  res.send('Deleted');
});

app.listen(3000, () => console.log('✅ Backend running on http://localhost:3000'));
