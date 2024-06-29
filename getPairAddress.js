const Moralis = require("moralis").default;
const Chains = require("./00_Chains.json");
const Details = require("./00_Settings.json");
var fs = require('fs');

const apiKey = Details.MORALIS_API_KEY1;
const token0Address = Details.TOKEN1_ADDRESS;
const token1Address = Details.TOKEN2_ADDRESS;
const exchange = Details.EXCHANGE
const chain = Chains.ETHEREUM;

const getPairAddress = async () => {
 await Moralis.start({
  apiKey: apiKey
 });

 const response = await Moralis.EvmApi.defi.getPairAddress({
  token0Address,
  token1Address,
  chain,
  exchange,
 })

 console.log(response.toJSON().pairAddress)

 var json = JSON.stringify(response);
 fs.writeFileSync('pairDetails.json', json, null , 0);
};

getPairAddress();