// const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require('sqlite-sync');
class Subcategories {   
    // Request Subcategories info to the database
    getSubcategories() {
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[subcategories.getSubcategories] Connected to the SQlite file database.');
          });
          let sql = "select * from Subcategories";
          ret = sqlite3.run(sql);
          sqlite3.close();
          return ret;
    }
         
      // Insert data to the database
      postSubcategories(SubcatName){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[subcategories.postSubcategories] Connected to the SQlite file database.');
          });



          let sql = "INSERT INTO Subcategories (SubcatName) VALUES ('" + SubcatName + "');";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Update data to database
      putSubategories(IdSubcat, SubcatName){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[subcategories.putSubcategories] Connected to the SQlite file database.');
          });
          
          let sql = "UPDATE Subcategories SET SubcatName = '" + SubcatName + "' WHERE IdSubcat = '" + IdSubcat + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Delete data from database
      deleteSubcategories(IdSubcat){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
    
	}
            console.log('[subcategories.putSubcategories] Connected to the SQlite file database.');
          });

          let sql = "DELETE FROM Subcategories WHERE IdSubcat = '" + IdSubcat + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }



}
module.exports = Subcategories;
