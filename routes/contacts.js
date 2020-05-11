const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get all user's contacts
// @access  Private
router.get('/', (req, res) => {
  res.json({ msg: 'Get all contacts' });
});

// @route   POST api/contacts
// @desc    Add new contact
// @access  Private
router.post('/', (req, res) => {
  res.json({ msg: 'Add contact' });
});

// @route   Patch api/contacts
// @desc    Patch user's contact
// @access  Private
router.patch('/:id', (req, res) => {
  res.json({ msg: `Change a contact with id: ${req.params.id}` });
});

// @route   Delete api/contacts
// @desc    Delete user's contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.json({ msg: `Delete a contact with id: ${req.params.id}` });
});

module.exports = router;
