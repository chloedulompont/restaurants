const express = require('express');
const router = new express.Router();

const {
    getHome,
    httpGetRestaurantByName,
    httpGetRestosPage
} = require('./controllers/controllers');

/**
 * Déclaration des routes de l'app
 */

router.get("/", getHome);
router.get('/restos', httpGetRestosPage)
router.get('/restaurants', httpGetRestaurantByName)

// Exporte le routeur pour le fichier principal
module.exports = router;