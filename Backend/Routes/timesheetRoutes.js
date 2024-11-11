// routes/atsRoutes.js
const express = require('express');
const router = express.Router();
const AtsEntry = require('../Models/AtsSheet');

// Create a new entry
router.post('/create', async (req, res) => {
    try {
        const entry = new AtsEntry(req.body);
        const savedEntry = await entry.save();
        res.status(201).json(savedEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Read all entries
router.get('/entries', async (req, res) => {
    try {
        const entries = await AtsEntry.find();
        res.json(entries);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Read a single entry
router.get('/entry/:id', async (req, res) => {
    try {
        const entry = await AtsEntry.findById(req.params.id);
        if (!entry) return res.status(404).json({ message: 'Entry not found' });
        res.json(entry);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update an entry
router.put('/update/:id', async (req, res) => {
    try {
        const updatedEntry = await AtsEntry.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEntry) return res.status(404).json({ message: 'Entry not found' });
        res.json(updatedEntry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete an entry
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedEntry = await AtsEntry.findByIdAndDelete(req.params.id);
        if (!deletedEntry) return res.status(404).json({ message: 'Entry not found' });
        res.json({ message: 'Entry deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
