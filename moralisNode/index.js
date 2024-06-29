import fetch from 'node-fetch';

const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    "jsonrpc": "2.0",
    "id": 1,
    "method": "eth_blockNumber"
  })
};

fetch('https://site1.moralis-nodes.com/eth/88d70949b29c48129a8c096d4c2cf9f9', options)
  .then(response => response.json())
  .then(response => console.log(Number(response.result)))
  .catch(err => console.error(err));