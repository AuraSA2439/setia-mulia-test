const { Firestore } = require('@google-cloud/firestore');
const storeData = require('../services/storeData');
 
async function storeData(id, data) {
  const db = new Firestore();
 
  await storeData(id, data);
  
  const predictCollection = db.collection('prediction');
  return predictCollection.doc(id).set(data);
}
 
module.exports = storeData;