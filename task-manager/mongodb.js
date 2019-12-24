// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// Essa desestruturação aqui faz o mesmo que as 3 linhas de cima.
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

// const id = new ObjectID();
// console.log(id);

const insertFunctions = db => {
  // db.collection('users').insertOne({
  //     name: 'Diego',
  //     age: 33
  // }, (error, result) => {
  //     if(error){
  //         return console.log('Unable to insert user');
  //     }
  //     console.log('Ops: ' + JSON.stringify(result.ops));
  // });
  // const array = [
  //   {
  //     name: "Daniele de Melo",
  //     age: 33
  //   },
  //   {
  //     name: "Lívia de Melo",
  //     age: 4
  //   },
  //   {
  //     name: "Geovanna de Melo",
  //     age: 14
  //   }
  // ];
  // db.collection("users").insertMany(array, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert documents');
  //   }
  //   return console.log(result.ops);
  // });
  //This was my challenge.
  //Create three documents in tasks collection. It was so easy.
  // const tasks = [
  //   { description: "Consertar a Internet", completed: false },
  //   { description: "Voltar pra casa", completed: true },
  //   { description: "Ir ao supermercado", completed: false }
  // ];
  // db.collection("tasks").insertMany(tasks, {}, (error, result) => {
  //   if (error) {
  //     return console.log("Unable to create the tasks");
  //   }
  //   return console.log(result.ops);
  // });
  // db.collection("users").insertOne(
  //   { _id: id, name: "Cássia Serpa", age: 59 },
  //   (error, result) => {
  //     return console.log(JSON.stringify(result.ops));
  //   }
  // );
};

const findFunctions = db => {
  //A simple search to find a document with age = 4
  // db.collection('users').findOne({ age: 4}, (error, user) => {
  //   if(error){
  //     return console.log('Unable to fetch')
  //   }
  //   console.log('Age 59. User: ' + JSON.stringify(user))
  // });
  //When we search for id, we need to use the ObjectID, because that String is only a representation of a binary value
  // db.collection('users').findOne({ _id: new ObjectID('5dfd9f61e038e9350e5fd40a') }, (error, user) => {
  //   if(error){
  //     return console.log('Unable to fetch')
  //   }
  //   console.log('ID 5dfd9f61e038e9350e5fd40a. User: ' + JSON.stringify(user))
  // })
  // db.collection('users').find( {age: 59}).toArray((error, users) => {
  //   console.log(users);
  // });
  // db.collection('users').find( {age: 59}).count((error, count) => {
  //   console.log(count);
  // });
  // db.collection('tasks').findOne({ _id: ObjectID("5dfe3c9b7cc28c1f6b4ce1d1") }, (error, result) => {
  //   console.log(result);
  // });
  // db.collection('tasks').find({completed: false}).toArray((error, array) => {
  //   console.log(array);
  // })
};

const updateFunctions = db => {
  // db.collection('users').updateOne({
  //   _id: new ObjectID("5dfe3ee24470c0210a02e3bd")
  // }, {
  //   // $set: {
  //   //   name: 'Rita de Cássia Serpa',
  //   // }
  //   $inc: {
  //     age: 1
  //   }
  // }).then((result) => {
  //   console.log(result);
  // }).catch((error) => {
  //   console.log(error);
  // });

  // db.collection("tasks").updateMany(
  //   {
  //     completed: false
  //   },
  //   {
  //     $set: {
  //       completed: true
  //     }
  //   }
  // ).then((result) => {
  //   console.log(result)
  // }).catch((error) => {
  //   console.log(error)
  // });
};

const deleteFunction = (db) => {

}

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    // console.log('Connected correctly!');

    const db = client.db(databaseName);

    // insertFunctions(db);
    // findFunctions(db);
    // updateFunctions(db);
    deleteFunction(db);
  }
);
