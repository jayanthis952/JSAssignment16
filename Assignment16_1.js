const str = "Lunch at 10:10 in the room 123:456";
const regex = /\b\d{2}:\d{2}\b/g;
const matches = str.match(regex);
console.log(matches); // ["10:10"]
