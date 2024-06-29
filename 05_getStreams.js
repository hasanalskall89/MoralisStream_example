const Moralis = require("moralis").default;
const Details = require("./00_Settings.json");
var fs = require('fs');

const apiKey = Details.MORALIS_API_KEY1;

const getStreams = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });

 const response = await Moralis.Streams.getAll({
  "limit": 100,
 });

 var json = JSON.stringify(response.raw);
 fs.writeFileSync('streamDetails.json', json, null , 0);
 console.log(response.raw.result);
 console.log(response.raw.total);
};

getStreams();