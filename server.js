const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Form submitted:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  res.status(200).json({ success: true, message: 'Thank you for contacting me!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
