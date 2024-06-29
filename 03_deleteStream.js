const Moralis = require("moralis").default;
const Details = require("./00_Settings.json");

const apiKey = Details.MORALIS_API_KEY1;
const streamId = Details.STREAM_ID_2;

const deleteStream = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });

 const response = await Moralis.Streams.delete({
  id: streamId,
 });

 console.log(response);
};

deleteStream();