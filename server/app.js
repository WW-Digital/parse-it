const express = require("express");
const { MealTimes, Dates } = require("./models/Identifier");
const { stopWordList, isStopWord, getStopWord } = require("./models/StopWord");
const app = express();

//TODO: Add an express router
const router = express.Router();

// Setup middleware so we can read the requests body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router); // so router can work

// Set up port and have app listen
const PORT = ("port", process.env.PORT || 3000);
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// TASK 1
router.get("/mealtimes", (req, res) => {
  if (req.query.query == undefined) {
    // if there is no query given in the url
    resultingJSON = { status: "success", data: [] };
    resultingJSON.data = MealTimes;
    return res.json(resultingJSON);
  } else {
    return res.json(lookForMatchesInArray(MealTimes, req, "mealtime"));
  }
});
// TASK 2
router.get("/dates", (req, res) => {
  if (req.query.query == undefined) {
    // if no query is given in the url
    resultingJSON = { status: "success", data: [] };
    resultingJSON.data = Dates;
    return res.json(resultingJSON);
  } else {
    return res.json(lookForMatchesInArray(Dates, req, "date"));
  }
});
// TASK 3
router.get("/stopword", (req, res) => {
  if (req.query.query == undefined) {
    // if no query is given in the url
    resultingJSON = { status: "success", data: [] };
    resultingJSON.data = stopWordList;
    return res.json(resultingJSON);
  } else {
    return res.json(lookForMatchesInArray(stopWordList, req, "stopword")); // return the matches
  }
});

// looks for matches between the query given in a get request and a given array
function lookForMatchesInArray(arrayToSearch, req, typeOfItem) {
  var resultingJSON = { status: "", data: [] };
  if (typeOfItem == "stopword") {
    // we need to just search the given array in this case
    if (arrayToSearch.includes(req.query.query.toLowerCase())) {
      resultingJSON.status = "success";
      resultingJSON.data = { value: req.query.query, type: "stopword" };
    }
    return resultingJSON;
  }

  for (var i = 0; i < arrayToSearch.length; i++) {
    // iterate  through the arry of items and look for a match
    if (arrayToSearch[i].names.includes(req.query.query.toLowerCase())) {
      // if the name is in the array of names of JSON
      // if we have a match
      if (resultingJSON.data.length == 0) {
        // add status code if we found a match (and there is only on the first match)
        resultingJSON.status = "success";
      }
      var newMatch = { value: arrayToSearch[i].value, type: typeOfItem };
      resultingJSON.data.push(newMatch);
    }
  }
  if (resultingJSON.data.length == 0) {
    // report if there is a failure
    resultingJSON.status = "failure";
  }
  return resultingJSON;
}

// TASK 5
router.post("/query", (req, res) => {
  var query = req.body.Query;
  if (query == undefined) {
    // if we have a bad POST
    return { status: "failure", data: [] };
  } else {
    var resultingJSON = { status: "success:", data: [] };
    var tokens = query.split(" "); // array of tokens
    for (var i = 0; i < tokens.length; i++) {
      // categorize each token
      resultingJSON.data.push(analyzeToken(tokens[i]));
    }
  }
  res.json(resultingJSON);
});

// analyzes a given taken for task 5 and returns JSON that categorizes the token.
function analyzeToken(inputString) {
  var data = { matchedWord: "", type: "", value: "" };
  if (isStopWord(inputString)) {
    // if we have a stop word
    data.type = "stopword";
    var word = getStopWord(inputString);
    data.matchedWord = word;
    data.value = word;
    console.log(data);
    return data;
  } else if (isDateWord(inputString)) {
    // if we have a date word
    var dateValue = getDateValue(inputString);
    data.type = "date";
    data.matchedWord = inputString;
    data.value = dateValue.value;
    return data;
  } else if (isMealTimeWord(inputString)) {
    // if we have a meal time word
    var mealTimeValue = getMealTimeValue(inputString);
    data.type = "mealtime";
    data.matchedWord = inputString;
    data.value = mealTimeValue.value;
    return data;
  } else {
    // if we have an unkwon  word
    data.type = "unknown";
    data.matchedWord = inputString;
    data.value = inputString;
    return data;
  }
}

function isDateWord(inputString) {
  for (var i = 0; i < Dates.length; i++) {
    if (Dates[i].names.includes(inputString.toLowerCase())) {
      // if array has this value then we have a match
      return true;
    }
  }
  return false;
}

function getDateValue(inputString) {
  for (var i = 0; i < Dates.length; i++) {
    if (Dates[i].names.includes(inputString.toLowerCase())) {
      return Dates[i]; // return the value that had the match
    }
  }
}

function isMealTimeWord(inputString) {
  for (var i = 0; i < MealTimes.length; i++) {
    if (MealTimes[i].names.includes(inputString.toLowerCase())) {
      // if array has this value then we have a match
      return true;
    }
  }
  return false;
}

function getMealTimeValue(inputString) {
  for (var i = 0; i < MealTimes.length; i++) {
    // return the value that had a match
    if (MealTimes[i].names.includes(inputString.toLowerCase())) {
      return MealTimes[i];
    }
  }
}
