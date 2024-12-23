body-parser
Node.js body parsing middleware.
Install npm install body-parser --save
https://github.com/expressjs/body-parser

This does not handle multipart bodies, due to their complex and typically large nature. For multipart bodies, you may be interested in the following modules:

busboy and connect-busboy
multiparty and connect-multiparty
formidable
multer

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

JSON.parse- If we directly try to use json object defined /received from API, it can give undefined, hence use JSON.parse.
const json = '{result:true, "count":42}';
const obj = JSON.parse(json);

JSON.stringify-The JSON.stringify() static method converts a JavaScript value to a JSON string,

//middlewares in mongodb
1. Document middleware- this refers to document and eg could be(supported for the following document functions.)
validate
save
updateOne
deleteOne

2. Query middleware-  this refers to query and supported for the following document functions.
count
countDocuments
deleteMany
deleteOne
estimatedDocumentCount
find
findOne
findOneAndDelete
findOneAndReplace
findOneAndUpdate
replaceOne
updateOne
updateMany
validate

3.Aggregate middleware-  is for MyModel.aggregate()

4.Model middleware- model middleware hooks into static functions on a Model class, document middleware hooks into methods on a Model class. 
bulkWrite
createCollection
insertMany


//what are capped collections
A capped collection is a fixed-size collection in MongoDB that supports high-throughput operations
When a capped collection fills up, it overwrites the oldest documents to make room for new ones. This is similar to how circular buffers work. 
You can't delete documents from a capped collection. To remove all documents, you can drop the collection and recreate it.
Capped collections maintain the insertion order of documents, so they don't require an extra index to retrieve a document. This helps them maintain high throughput insertion. 
```
db.createCollection("student", {capped:true, size:10000, max:4})
new Schema({ /* ... */ }, { capped: 1024 });
```