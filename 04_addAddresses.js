const Moralis = require("moralis").default;
const Details = require("./00_Settings.json");

const apiKey = Details.MORALIS_API_KEY1;
const streamId = Details.STREAM_ID_1;
const Address1 = Details.ETH_USDT_UniswapV2
const Address2 = Details.LINK_WETH_UniswapV2

const add = async () => {
 await Moralis.start({
  apiKey: apiKey,
 });

 const list = [
    Address1,
    Address2
  ]
 const response = await Moralis.Streams.addAddress({
  id: streamId,
  address: list,
 });

 console.log(response.toJSON())
};

add();