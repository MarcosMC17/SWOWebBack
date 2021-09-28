// const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require('sqlite-sync');
class Categories {   
    // Request categories info to the database
    getCategories() {
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[categories.getCategories] Connected to the SQlite file database.');
          });



          let sql = `select * from Categories`;
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
    }
         
      // Insert data to the database
      postCategories(CatName){
        console.log(CatName);
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[categories.postCategories] Connected to the SQlite file database.');
          });



          let sql = "INSERT INTO Categories (CatName) VALUES ('" + CatName + "');";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Update data to database
      putCategories(IdCat, CatName){
        console.log(IdCat);
        console.log(CatName);
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[categories.putCategories] Connected to the SQlite file database.');
          });
          
          let sql = "UPDATE Categories SET CatName = '" + CatName + "' WHERE IdCat = '" + IdCat + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Update data to database
      deleteCategories(IdCat){
        console.log(IdCat);
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[categories.putCategories] Connected to the SQlite file database.');
          });

          let sql = "DELETE FROM Categories WHERE IdCat = '" + IdCat + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }



}
module.exports = Categories;
