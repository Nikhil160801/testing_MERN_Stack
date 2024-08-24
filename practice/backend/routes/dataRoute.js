const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

router.post('/data', async (req, res) => {
  const { data } = req.body;
  try {
    const newData = new Data({ data });
    await newData.save();
    res.status(201).json({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save data' });
  }
});

module.exports = router;
