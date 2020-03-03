// const {
//    Stitch,
//    RemoteMongoClient,
//    AnonymousCredential
// } = require('mongodb-stitch-browser-sdk');

// const client = Stitch.initializeDefaultAppClient('zforumdb-xquva');

// const db = client.getServiceClient(RemoteMongoClient.factory, 'zForum-Stitch').db('User');

// function ConnectMongo() {
//    client.auth.loginWithCredential(new AnonymousCredential()).then(user =>
//        db.collection('Accounts').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
//      ).then(() =>
//        db.collection('Accounts').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
//      ).then(docs => {
//          console.log("Found docs", docs)
//          console.log("[MongoDB Stitch] Connected to Stitch")
//      }).catch(err => {
//          console.error(err)
//     });
// }

// itemsCollection.insertOne(example)
//  .then(result => console.log(`Successfully inserted item with _id: ${result.insertedId}`))
// .catch(err => console.error(`Failed to insert item: ${err}`))

// export default ConnectMongo;