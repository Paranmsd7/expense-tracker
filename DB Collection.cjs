const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    dbConnection=MongoClient.connect('mongodb+srv://PARANJOTHI:jothiparan@cluster0.ilajswd.mongodb.net/?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db()
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}