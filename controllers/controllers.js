const {getRestaurantsByName} = require('../model/model')
/**
 * GET /
 * Page d'accueil
 */
function getHome(req, res) {
    try {
        res.render('index', {});
    }
    catch (error){
        console.log(error)
    }
}

function httpGetRestosPage(req, res){
    try{
        res.render('restaurants');
    }
    catch(error){
        console.log(error)
    }
}

async function httpGetRestaurantByName(req, res){
    const name = req.body.name;
    try{
        const results = await getRestaurantsByName(name);
        console.log(results)
        res.render('results', {restaurants: results});
    }
    catch (error){
        console.log(error)
    }
}

module.exports = {
    getHome,
    httpGetRestosPage,
    httpGetRestaurantByName
}