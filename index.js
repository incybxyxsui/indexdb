var sscValue;
var sscmks;
var sscmks1;
var sscradio;
var sscper;
var sscyop;

var interValue;
var intermks;
var intermks1;
var interradio;
var interper;
var interyop;


var BtechValue;
var Btechmks;
var Btechmks1;
var Btechradio;
var Btechper;

var name;
 var rollno;
var email;
 var store;
var co;
function getDetails() {
  co=document.getElementById('co').value;
  sscValue=document.getElementById('sscValue').value;
  sscmks=document.getElementById('sscmks');
  sscmks1=document.getElementById('sscmks1');
  sscper=document.getElementById('sscper').value;
  sscyop=document.getElementById('sscyop').value;

  interValue=document.getElementById('interValue').value;
  intermks=document.getElementById('intermks');
  intermks1=document.getElementById('intermks1');
  interper=document.getElementById('interper').value;
  interyop=document.getElementById('interyop').value;

  BtechValue=document.getElementById('BtechValue').value;
  Btechmks=document.getElementById('Btechmks');
  Btechmks1=document.getElementById('Btechmks1');
  Btechper=document.getElementById('Btechper').value;
  Btechyop=document.getElementById('Btechyop').value;

  if (sscmks.checked) {
   sscradio=sscmks.value;
    }else{
   sscradio=sscmks1.value;
  }

    if (intermks.checked) {
   interradio=intermks.value;
  }else{
   interradio=intermks1.value;
}
if (Btechmks.checked) {
 Btechradio=Btechmks.value;
  }else{
 Btechradio=Btechmks1.value;
  }
console.log(co);
console.log(sscValue+" "+sscradio+" "+sscper+" "+sscyop);
console.log(interValue+" "+interradio+" "+interper+" "+interyop);
console.log(BtechValue+" "+Btechradio+" "+Btechper+" "+Btechyop);


name=document.getElementById('name').value;
   rollno=document.getElementById('rollno').value;
 email=document.getElementById('email').value;
   console.log(name+" "+rollno+" "+email);
   if (!window.indexedDB) {
     console.log("indexed db is not working...!");
   }
   var request=window.indexedDB.open("svitDB",1);
  request.onerror=e=>{
   console.log(e);
  }
   request.onupgradeneeded=e=>{
     var dbname=e.target.result;
 dbname.createObjectStore("cse",{keyPath:"name"});
     console.log("upgraded...!");

   }
     request.onsuccess=e=>{
      var dbname=e.target.result;
   store=dbname.transaction("cse","readwrite").objectStore("cse");
    store.put(
      {
        "name":name,
        "roll":rollno,
        "email":email,
        "co":co,
        "eduDetails":[
          "ssc":[
          "ssctype":sscValue,
          "pertype":sscradio,
          "percentage":sscper,
          "yearofpass":sscyop
        ]
      ]
      }
     );
       console.log("success...!");
   }

}
