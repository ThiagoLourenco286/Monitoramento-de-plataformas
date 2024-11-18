const express = require('express');
const router = express.Router();
const linkControllers = require('../controllers/linksControllers');

router.get('/', linkControllers.allLinks)
router.get('/:title', linkControllers.redirectLink)
router.get('/add', (req, res) => res.render('index', { error: false, body: {} }))
router.get('/edit/:id', linkControllers.loadLinks)

router.post('/', express.urlencoded({ extended: true }), linkControllers.addLinks)
router.post('/edit/:id', express.urlencoded({ extended: true }), linkControllers.editLinks)

router.delete('/:id', linkControllers.deleteLinks)

module.exports = router