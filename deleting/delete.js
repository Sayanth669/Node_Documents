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
         
         // sample object in the database
        //   let Arry = {
        //      name: { "first": "favas", "last": "Turing" },
        //      birth: new Date(1912, 5, 23), // May 23, 1912                                                                                                                                 
        //      death: new Date(1954, 5, 7),  // May 7, 1954                                                                                                                                  
        //      contribs: [ "Turing machine", "Turing test", "Turingery" ],
        //      views: 1250000
        //  }
            
        
         // Find and return the document
         const filter = { "name.first":"sarbas" };
         const result = await col.deleteOne(filter)

         if (result.deletedCount === 1) {
            console.log("successfully deleted");
            console.log(deletedCount);
         }else{
            console.log("document not found");
         }
       
         

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }

}

run().catch(console.dir);

