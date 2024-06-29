const Moralis = require("moralis").default;
const Details = require("./00_Settings.json");

const apiKey = Details.MORALIS_API_KEY2;
const streamId = Details.STREAM_ID_2;

const getWebhook = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });

 const response = await Moralis.Streams.getById({
  id: streamId,
 });

 const webhook = response.toJSON().webhookUrl;
 console.log(webhook);
};

getWebhook();