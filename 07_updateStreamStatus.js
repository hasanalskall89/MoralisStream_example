const Moralis = require("moralis").default;
const Details = require("./00_Settings.json");

const apiKey = Details.MORALIS_API_KEY1;
const streamId = Details.STREAM_ID_1;

const updateStatus = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });

 const response = await Moralis.Streams.getById({
  id: streamId,
 });

 const status = response.toJSON().status;
 console.log("Old Status:"+" "+status);

 status == "active"
  ?
  await Moralis.Streams.updateStatus({
  id: streamId,
  status: "paused",
  })
  :
  status == "paused"
  ?
  await Moralis.Streams.updateStatus({
   id: streamId,
   status: "active",
  })
  :
  "Error, Please return to Moralis' account and Check";

 const response2 = await Moralis.Streams.getById({
  id: streamId,
 });

 const status2 = response2.toJSON().status;
 console.log("New Status:"+" "+status2);
};

updateStatus();