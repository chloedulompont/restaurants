const {
    getRestaurantsByName,
    getDistinctCuisine,
    getDistinctBorough,
    getRestaurantsByBoroughAndCuisine
} = require('../model/model')
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

function getRestosPage(req, res){
    try{
        res.render('restaurants');
    }
    catch(error){
        console.log(error)
    }
}

async function getExplorePage(req, res){
    try{
        const cuisines = await getDistinctCuisine();
        const boroughs = await getDistinctBorough();
        res.render('explore', {cuisines: cuisines, boroughs: boroughs});
    }
    catch(error){
        console.log(error)
    }
}


async function httpGetRestaurants(req, res){
    const name = req.query.name;
    const borough = req.query.borough;
    const cuisine = req.query.cuisine;
    console.log("test")
    let data = [];

    try{
        if(name){
            data = await getRestaurantsByName(name);

        }
        else if(borough && cuisine){
            data = await getRestaurantsByBoroughAndCuisine(borough, cuisine)
            console.log(data)
        }
        else{
            res.status(400);
            return;
        }
        console.log(data);
        res.status(200).render('results', {restaurants: data});


    }
    catch (error){
        console.log(error)
    }
}

module.exports = {
    getHome,
    getRestosPage,
    getExplorePage,
    httpGetRestaurants
}