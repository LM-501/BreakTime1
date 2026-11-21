// Firebase Cloud Functions: server 24h chalu thakar dorkar nai, Google cholay dey.
const {onDocumentCreated,onDocumentUpdated}=require("firebase-functions/v2/firestore");
const admin=require("firebase-admin");admin.initializeApp();
exports.newOrder=onDocumentCreated("orders/{id}",async e=>{
  const o=e.data.data();
  await admin.messaging().send({topic:"admins",notification:{title:"🔔 New order!",body:`${o.name} – ৳${o.total}`}});
});
exports.statusChange=onDocumentUpdated("orders/{id}",async e=>{
  const a=e.data.before.data(),b=e.data.after.data();
  if(a.status!==b.status&&b.fcmToken)
    await admin.messaging().send({token:b.fcmToken,notification:{title:"BreakTime",body:`Order status: ${b.status}`}});
});
