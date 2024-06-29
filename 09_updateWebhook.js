const Moralis = require("moralis").default;
const Details = require("./00_Settings.json");

const apiKey = Details.MORALIS_API_KEY2;
const streamId = Details.STREAM_ID_2;
const webhook = Details.WEBHOOK_URL;

const updateWebhook = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });

 const response = await Moralis.Streams.update({
  id: streamId,
  webhookUrl: webhook,
 });

 const newWebhook = response.toJSON().webhookUrl;
 console.log("New Webhook:" + " " + newWebhook);
};

updateWebhook();