const Moralis = require("moralis").default;
const Details = require("./00_Settings.json");

const apiKey = Details.MORALIS_API_KEY1;
const streamId = Details.STREAM_ID_1;

const update = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });
 
 const response = await Moralis.Streams.update({
  id: streamId,
  includeContractLogs: true,
  includeInternalTxs: true,
 });

 console.log(response.toJSON());
};

update();