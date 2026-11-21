import { firebaseConfig, demo } from "./firebase-config.js";
export let db, fb;
export const DEMO = [
 {id:"r1",name:"Spice Garden",cat:"Biryani",emoji:"🍛",time:"25-35 min",menu:[{n:"Kacchi Biryani",p:320},{n:"Chicken Roast",p:140},{n:"Borhani",p:50}]},
 {id:"r2",name:"Burger Bay",cat:"Burger",emoji:"🍔",time:"20-30 min",menu:[{n:"Beef Burger",p:280},{n:"Fries",p:120},{n:"Cold Coffee",p:150}]},
 {id:"r3",name:"Pizza Loop",cat:"Pizza",emoji:"🍕",time:"30-40 min",menu:[{n:"Pepperoni 9\"",p:550},{n:"Cheese Garlic Bread",p:180}]},
 {id:"r4",name:"Noodle Nest",cat:"Chinese",emoji:"🍜",time:"25-35 min",menu:[{n:"Chowmein",p:200},{n:"Chilli Chicken",p:260}]},
 {id:"r5",name:"Sweet Tooth",cat:"Dessert",emoji:"🍰",time:"15-25 min",menu:[{n:"Brownie",p:130},{n:"Rasmalai",p:90}]}];
export async function init(){
  if(demo) return;
  const A=await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js");
  fb=await import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js");
  db=fb.getFirestore(A.initializeApp(firebaseConfig));
}
export async function restaurants(){
  if(demo) return DEMO;
  const s=await fb.getDocs(fb.collection(db,"restaurants"));
  return s.docs.map(d=>({id:d.id,...d.data()}));
}
