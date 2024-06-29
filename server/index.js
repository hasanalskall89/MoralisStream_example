const express = require ("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.use(express.json());

var Result = [];

app.post("/webhook", async (req, res) => {
 const {body} = req;

 try {
  Result.push([body])
  // console.log(body)
 } catch (error) {
  console.log(error);
  return res.status(400).json();
 }

 return res.status(200).json()
});

app.get("/", async (req, res) => {
 try {
  console.log(Result)
 } catch (error) {
  console.log(error);
  return res.status(400).json();
 }
 for(var i = 0; i < Result.length ; i++){
  return res.send(Result[i]);
 }
 
})

// setInterval(json, 10000);

// function json() {
//  const load = 
//  JSON.parse(
//   fs.existsSync('data.json')
//    ? fs.readFileSync('data.json').toString()
//    : '""'
//  );
//  console.log(load)
//  fs.writeFileSync(
//   'data.json',
//   JSON.stringify(
//    Result,
//    null,
//    2
//   )
//  )
// }


app.listen(port, () => {
 console.log(`Listeing To Stream`);
})