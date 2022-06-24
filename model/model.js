const {MongoClient} = require('mongodb');

async function getRestaurantsCollection(){
    const client = new MongoClient(process.env.DB_URI);
    await client.connect();
    const db = client.db('3WA_MONGO');
    await db.command({ping: 1});

    console.log('Successfully connected to the database');

    return db.collection('Restaurants');
}

async function getRestaurantsByName(name){
    const restaurants = await getRestaurantsCollection();
    return restaurants.find({name: /name/}).toArray()
}

module.exports = {
    getRestaurantsByName
}