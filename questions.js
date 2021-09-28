// const sqlite3 = require('sqlite3').verbose();
const sqlite3 = require('sqlite-sync');
class Questions {   
    // Request Questions info to the database
    getQuestions() {
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[questions.getQuestions] Connected to the SQlite file database.');
          });



          let sql = "select * from Questions";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
    }
         
      // Insert data to the database
      postQuestions(Question, IdCat, IdSubCat, SampleAnswer){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[questions.postQuestions] Connected to the SQlite file database.');
          });


          if(IdSubCat == undefined){
            IdSubCat = "";
          }

          if(SampleAnswer == undefined){
            SampleAnswer = "";
          }
          let sql = "INSERT INTO Questions (Question, IdCat, IdSubCat, SampleAnswer) VALUES ('" + Question + "', '" + IdCat + "', '" + IdSubCat + "', '" + SampleAnswer + "');";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Update data to database
      putQuestions(QId, Question, IdCat, IdSubCat, SampleAnswer){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[questions.putQuestions] Connected to the SQlite file database.');
          });
          
          let sql = "UPDATE Questions SET Question = '" + Question + "', IdCat = '" + IdCat + "', IdSubCat = '" + IdSubCat + "', SampleAnswer = '" + SampleAnswer + "' WHERE QId = '" + QId + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }

      // Delete data from database
      deleteQuestions(QId){
        let ret = {};
        // Open a database connection
        sqlite3.connect('./db/SWOdb.db', (err) => {
            if (err) {
              return console.error(err.message);
            }
            console.log('[questions.deleteQuestions] Connected to the SQlite file database.');
          });

          let sql = "DELETE FROM Questions WHERE QId = '" + QId + "';";
          ret = sqlite3.run(sql);

          sqlite3.close();
          return ret;
      }
}
module.exports = Questions;
