const Moralis = require("moralis").default;
const Chains = require("./00_Chains.json");
const Details = require("./00_Settings.json");

const apiKey = Details.MORALIS_API_KEY2;
const webhookURL = Details.WEBHOOK_URL;
const description = Details.DESCRIPTION;
const tag = Details.TAG;
const chain = Chains.Ethereum_Mainnet;

const create = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });

 const response = await Moralis.Streams.add({
  webhookUrl: webhookURL,
  description: description,
  tag: tag,
  chains: [chain],
  includeNativeTxs: true,
 });

 console.log(response.toJSON().id);
};

create();