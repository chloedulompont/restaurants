const {MongoClient} = require('mongodb');

async function getRestaurantsCollection(){
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('3WA_Mongo');
    await db.command({ping: 1});

    console.log('Successfully connected to the database');

    return db.collection('Restaurants');
}

async function getRestaurantsByName(name){
    const restaurants = await getRestaurantsCollection();
    name = new RegExp(name)
    return restaurants.find({name: name}).toArray();
}

async function getRestaurantsByBoroughAndCuisine(borough, cuisine){
    const restaurants = await getRestaurantsCollection();
    return restaurants.find({borough: borough, cuisine: cuisine}).toArray()
}

async function getDistinctBorough(){
    const restaurants = await getRestaurantsCollection();
    return restaurants.distinct('borough');
}

async function getDistinctCuisine(){
    const restaurants = await getRestaurantsCollection();
    return restaurants.distinct('cuisine');
}

module.exports = {
    getRestaurantsByName,
    getDistinctCuisine,
    getDistinctBorough,
    getRestaurantsByBoroughAndCuisine
}