# Backend 

Overview 

the backend is built with nodejs , express , and mongodb with mongoose .

it provides api to 
 - Add a new word 
 - Search for an exact word 
 - Get word Suggestions based on a prefix 
 - Track word frequency 

 # Data Structure

 Each word is stored in mongodb like this 
 {
    "word":"apple",
    "frequency":5,
 }

 word-> the dictionary word 
 frequency ->  number of times the wird has been serached

 the wird field is unique so duplicate word are not added 

 # Logic and Approach 


 1. Add word 

 POST /api/words
 the word is received from req.body 



 2.serch word 
 GET /api/search?word=apple

 find the exact word in the mongodb 
 if not found-> return  not found 
 if found -> increase its frequency by 1

 3.Suggestions 

 GET /api/suggest?prefix=${value}&k=5


 find the words starting with given prefix 
 sort by frequency decending 
 if frquency are equal , sort alphabetically 
 return maximum k suggestions 

 # Setup 
 install dependencies 
 npm install 
 (make sure mongodb running locally )

 the applications uses 
 mongodb://127.0.0.1:27017/dictionaryDB

 # Run
 npm start


 backend run on :
 http://localhost:4000


 # Test Apis 

 ADD Word
 POST
 http://localhost:4000/api/words

 Body->JSON
 {
    "word":"good"
 }

 Search Word
 GET
 http://localhost:4000/api/search?word=good


 Suggetions
 GET
 http://localhost:4000/api/suggest?prefix=good&k=5

 we can test apis using postman 




