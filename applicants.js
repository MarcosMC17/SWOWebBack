// const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require('sqlite-sync');
class Applicants {   
    // Request Applicants info to the database
    getApplicants() {
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[applicants.getApplicants] Connected to the SQlite file database.');
          });



          let sql = "select * from Applicants";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
    }
         
      // Insert data to the database
      postApplicants(IntDate, AppName, AppPosition, IntName, IntPosition, CodingScore, stack){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[applicants.postApplicants] Connected to the SQlite file database.');
          });

          let sql = "INSERT INTO Applicants (IntDate, AppName, AppPosition, IntName, IntPosition, CodingScore, stack) VALUES ('" + IntDate + "', '" + AppName + "','" + AppPosition + "','" + IntName + "', '" + IntPosition + "', '" + CodingScore + "', '" + stack + "');";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Update data to database
      putApplicants(AppID, IntDate, AppName, AppPosition, IntName, IntPosition, CodingScore, stack){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[applicants.putApplicants] Connected to the SQlite file database.');
          });
          
          let sql = "UPDATE Applicants SET IntDate = '" + IntDate + "', AppName = '" + AppName + "', AppPosition = '" + AppPosition + "', IntName = '" + IntName + "', IntPosition = '" + IntPosition + "', CodingScore = '" + CodingScore + "', stack = '" + stack + "' WHERE AppID = '" + AppID + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Delete data from database
      deleteApplcants(AppID){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[applicants.deleteApplcants] Connected to the SQlite file database.');
          });

          let sql = "DELETE FROM Applicants WHERE AppID = '" + AppID + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }



}
module.exports = Applicants;
