// JASKIS
// paste the MongoDB commands you use underneath each prompt

// GETTING STARTED
// 1. Create a database called jaskis
//use jaskis


// 2. Create a collection called bounties
//db.createCollection('bounties')

// ADD THE ANIMAL BOUNTIES
// 1. Insert the given "Thanoceros" bounty object

//b.bounties.insertOne({
 //   name: "Thanoceros",
   // species: "Rhinoceros",
  //  location: "Grasslands",
  //  wantedFor: "Eating too much grass",
  //  client: "Songbird",
  //  reward: 10000,
   // captured: false
 // })
// 2. Query for all bounties in the bounties collection
    //db.bounties.find()

// 3. Insert many bounties at once using the given objects
//db.bounties.insertMany
// MANAGE THE DATABASE
// Queries
// 1. Query for all bounties in the Grasslands
//db.bounties.find({ location: "Grasslands"})
// 2. Query for all bounties with a reward worth 10000 or more
//db.bounties.find({ reward: 10000})
// 3. Query for all bounties, but exclude the client attribute from being shown
    //db.bounties.find({ captured: false}, { client: 0})
// 4. Query for a Groundhog in the Woodlands
//db.bounties.find({ location: { $gt: "Groundhog" } })
// Update and Delete
// 1. Update the reward for Polarwind to 10000
//db.bounties.updateOne(
    //{ name: "Polarwind" },
    //{ $set: { reward: 10000 } }
    //)
// 2. Remove Lokinkajou
//db.bounties.deleteOne({ name: "Lokinkajou" })
// 3. Delete all bounties sent by Songbird
//db.bounties.deleteMany({ client: "Songbird" })
// 4. Update all captured statuses to true
//db.bounties.updateMany(
   // { captured: false }, 
   // { $set: { captured: true } })