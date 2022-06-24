const express = require('express');
const router = new express.Router();

const {
    getHome,
    httpGetRestaurants,
    getRestosPage,
    getExplorePage
} = require('./controllers/controllers');

/**
 * Déclaration des routes de l'app
 */

router.get("/", getHome);
router.get('/restos', getRestosPage);
router.get('/explore', getExplorePage)
router.get('/restaurants', httpGetRestaurants)

// Exporte le routeur pour le fichier principal
module.exports = router;