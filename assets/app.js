$(document).ready(function(){

  var config = {
    apiKey: "AIzaSyCInybbUOpgQt73B31612biL87mCE139pQ",
    authDomain: "train-homework-56c87.firebaseapp.com",
    databaseURL: "https://train-homework-56c87.firebaseio.com",
    projectId: "train-homework-56c87",
    storageBucket: "",
    messagingSenderId: "672741069623"
  };

  firebase.initializeApp(config);

var database = firebase.database();

$("#add-trainBtn").on("click", function(event) {
  
  var trainName = $("#trainName-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain= moment($("#firstTrain-input").val().trim(), "DD/MM/YY").format("X");
  var frequency = $("#frequency-input").val().trim();


  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);
  

  var newTrain = {
    name: trainName,
    destination: trainDestination,
    frequency: trainFrequency,
    arrival: trainArrival,
    minutes: trainMinutes,
  };

  database.ref().push(newTrain);

  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#firstTrain-input").val("");
  $("#frequency-input").val("");

});


database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var trainArrival = childSnapshot.val().arrival;
  var trainMinutes = childSnapshot.val().minutes;


  var firstTrainNew = moment.unix(firstTrain).format("MM/DD/YY");

  var frequencyNew = moment().diff(moment.unix(firstTrain, "X"), "months");
  console.log(frequencyNew);

  var arrivalNew = firstTrainNew * minutesNew;
  console.log(arrivalNew);


  $("#employee-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" +
  firstTrainNew + "</td><td>" + frequencyNew + "</td><td>" + minutesNew + "</td><td>" + arrivalNew + "</td></tr>");

})};