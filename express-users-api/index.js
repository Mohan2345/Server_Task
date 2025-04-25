const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/users', async (req, res) => {
  const { username } = req.query;

  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const users = response.data;

    if (username) {
      const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());

      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } else {
      res.json(users);
    }

  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ message: 'An error occurred while fetching data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
