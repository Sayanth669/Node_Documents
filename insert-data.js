const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://connect2022sayanth:AUopOR8waFifeOD5@cluster0.8a0mfkn.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(url);
 
 // Reference the database to use
 const dbName = "gettingStarted";
                      
 async function run() {
    try {
        // Connect to the Atlas cluster
         await client.connect();
         const db = client.db(dbName);

         // Reference the "people" collection in the specified database
         const col = db.collection("people");

         // Create a new document                                                                                                                                           
        //  let personDocument = {
        //      name: { "first": "Alan", "last": "Turing" },
        //      birth: new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      death: new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      contribs: [ "Turing machine", "Turing test", "Turingery" ],
        //      views: 1250000
        //  }

         let newArray = [
            {
                name: { "first": "sarbas", "last": "Turing" },
                birth: new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
                death: new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
                contribs: [ "Turing machine", "Turing test", "Turingery" ],
                views: 1250000
            },
            {
               name: { "first": "Anshed", "last": "Turing" },
               birth: new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
               death: new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
               contribs: [ "Turing machine", "Turing test", "Turingery" ],
               views: 1250000
           },
           {
               name: { "first": "favas", "last": "Turing" },
               birth: new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
               death: new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
               contribs: [ "Turing machine", "Turing test", "Turingery" ],
               views: 1250000
           }
           ]
         

         // Insert the document into the specified collection        
        //  const p = await col.insertOne(newArray);

         const bbc = await col.insertMany(newArray)



        
         // Find and return the document
         const filter = { "name.last": "Turing" };
        //  const document = await col.findOne(filter);
         const document = await col.find(filter,{limit:2}).toArray() ;
         console.log("Document found:\n" + JSON.stringify(document));
        //  console.log("Document found:\n" + col);
        //  console.log(collection);


        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }

}

run().catch(console.dir);

