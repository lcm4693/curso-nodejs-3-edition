// CRUD create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

// Essa desestruturação aqui faz o mesmo que as 3 linhas de cima.
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    // console.log('Connected correctly!');

    const db = client.db(databaseName);

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

    

  }
);
