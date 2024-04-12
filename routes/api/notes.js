const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// All paths start with '/api/users'
router.get('/', notesCtrl.index);
router.get('/:id', notesCtrl.show);
router.post('/', notesCtrl.create);
router.delete('/:id', notesCtrl.delete)


module.exports = router;