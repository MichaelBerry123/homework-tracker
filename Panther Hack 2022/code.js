//Welcome screen
onEvent("welcomeScreen_login", "click", function( ) {
  setScreen("login");
  console.log("setting login screen");
});
onEvent("welcomeScreen_signUp", "click", function( ){
  setScreen("signUp");
});
//Signup Screen
onEvent("signUp_enter", "click", function( ) {
  createRecord("User Account Data",  {username:(getText("username")), password:(getText("password"))},  function(record) {
    
  });
console.log("logging user account data");
  createRecord("User Personal Data",  {firstName:(getText("firstName")), lastName:(getText("lastName"))}, function(record) {
    
  });
  setScreen("homeScreen");
});
//login screen
hideElement("wrongLoginData");
onEvent("login_submit", "click", function(event) {
  readRecords("User Account Data", {}, function(records) {
    for (var i =0; i < records.length; i++) {
      if ((records[i]).username == getText("login_username")) {
        if ((records[i]).password == getText("login_password")) {
           setScreen("homeScreen");
          }
           } else {
        console.log("Wrong Data");
        showElement("wrongLoginData");
        setText("wrongLoginData", "Incorrect, please try again");
      }
    }
  });
});
//homeScreen
onEvent("homeScreen_createSchedule", "click", function( ) {
  setScreen("schedule");
  console.log("Setting Scedule input screen");
});
onEvent("schedule_submit", "click", function( ) {
  createRecord("8 Period Set Schedule", {"Period 1":(getText("schedule_period1")), "Period 2":(getText("schedule_period2")), "Period 3":(getText("schedule_period3")), "Period 4":(getText("schedule_period4")), "Period 5":(getText("schedule_period5")), "Period 6":(getText("schedule_period6")),"Period 7":(getText("schedule_period7")), "Period 8":(getText("schedule_period8"))}, function(record) {
    
  });
  console.log("Recording 8 Period Set Schedule Data");
});
onEvent("schedule_submit", "click", function( ) {
  setScreen("homeScreen");
});
onEvent("homeScreen_addAssignments", "click", function( ) {
  setScreen("screen2");
  // setText("Class1", Period1());
  // setText("Class2", Period2());
  // setText("Class3", Period3());
  // setText("Class4", Period4());
  // setText("Class5", Period5());
  // setText("Class6", Period6());
  // setText("Class7", Period7());
  // setText("Class8", Period8());
});
// function Period1() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(("Period 1"[i]).id + ': ' + ("Period 1"[i]).name);
//     }
//   });
// }
// function Period2() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(("Period 2"[i]).id + ': ' + "Period 2"[i].name);
//     }
//   });
// }
// function Period3() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(records[i].id + ': ' + records[i].name);
//     }
//   });
// }
// function Period4() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(records[i].id + ': ' + records[i].name);
//     }
//   });
// }
// function Period5() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(records[i].id + ': ' + records[i].name);
//     }
//   });
// }
// function Period6() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(records[i].id + ': ' + records[i].name);
//     }
//   });
// }
// function Period7() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(records[i].id + ': ' + records[i].name);
//     }
//   });
// }
// function Period8() {
//   readRecords("8 Period Set Schedule", {}, function(records) {
//     for (var i =0; i < records.length; i++) {
//       console.log(records[i].id + ': ' + records[i].name);
//     }
//   });
// }
