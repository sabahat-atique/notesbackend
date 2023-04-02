const mongoose = require("mongoose");

async function connectToDb() {
  try {
    mongoose
      .connect('mongodb://miansabby516:graphics516@ac-agpogzd-shard-00-00.dxrprje.mongodb.net:27017,ac-agpogzd-shard-00-01.dxrprje.mongodb.net:27017,ac-agpogzd-shard-00-02.dxrprje.mongodb.net:27017/Notes?ssl=true&replicaSet=atlas-norzdj-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connected to database");
      })
      .catch((err) => {
        console.log("DB not connected", err);
      });
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;

// useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
