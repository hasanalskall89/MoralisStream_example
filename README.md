
![Logo](https://admin.moralis.io/assets/moralisLogo-DnjUHa6D.svg)


# Moralis Script

First, install dependencies by running

```bash
  npm install
```
in the project's root directory and then again in the ``server`` directory

go to server

```bash
  cd server
```

install dependencies by running

```bash
  npm install
```

Then, start the server with

```bash
  node index.js
```

While the server is running, open a new terminal window/tab

And continue through the docs

## Localhost

To fully test locally,
you must set up a webhook using a tool like **``NGROK``**.
Run it after starting the server to obtain the necessary webhook URL
## Roadmap

- Create New Stream

- Update The Stream Settings

- Add Addresses To The Stream

- Get All Streams List

- Delete Stream

- Get The Stream Status

- Update Status

- Get The WebhookUrl For Stream

- Update The WebhookUrl


## Creat New Stream

To Creat new Stream, First go to the file **``00_Settings.json``** and modify all setting.

- Moralis API Key
- Webhook Url
- Description
- Tag

To specify the network on which the stream will operate, refer to the list of available networks in the file **``00_Chains.json``**.

Update line 9 in the file **``01_create.js``** with your chosen network.

``` json
{
 "Ethereum_Mainnet": "0x1",
 "Ethereum Sepolia": "0xaa36a7",
 "Ethereum Holesky": "0x4268",
 "Polygon Mainnet": "0x89",
 "Polygon Amoy": "0x13882",
 "Binance Smart Chain Mainnet": "0x38",
 "Binance Smart Chain Testnet": "0x61",
 "Arbitrum": "0xa4b1",
 "Arbitrum Sepolia": "0x66eee",
 "Base":"0x2105",
 "Base Sepolia": "0x14a34",
 "Optimism": "0xa",
 "Optimism Sepolia": "0xaa37dc",
 "Pulsechain": "0x171",
 "Avalanche": "0xa86a",
 "Linea": "0xe708",
 "Linea Sepolia": "0xe705",
 "Fantom Mainnet": "0xfa",
 "Fantom Tsetnet": "0xfa2",
 "Cronos Mainnet": "0x19",
 "Palm": "0x2a15c308d",
 "Gnosis": "0x64",
 "Gnosis Chiado": "0x27d8",
 "Chiliz Mainnet": "0x15b38",
 "Chiliz Tsetnet": "0x15b32",
 "Moonbeam": "0x504",
 "Moonriver": "0x505",
 "Moonbase": "0x507"
}
```

After that Run:

```bash
  npm run Create
```

In the CONSOLE you can Find the Stream ID:

```bash
0d65****-05da-4f**-8eec-bca87250****
```
## Update The Stream

To Update The Stream, First go to the file **``00_Settings.json``** and modify it.

- Moralis API Key
- Stream ID

And go to File **``02_update.js``** and Customize the properties you want to update

|Parameter|Type    |Description                |
|:--------|:-------| :------------------------- |
|`topic0` |`array` | An Array of topic0's in string-signature format ex: ['FunctionName(address,uint256)'] |
|`allAddresses`|`boolean`| Include events for all addresses (only applied when abi and topic0 is provided) |
|`includeNativeTxs`|`boolean`|Include or not native transactions defaults to false|
|`includeContractLogs`|`boolean`|Include or not logs of contract interactions defaults to false|
|`includeInternalTxs`|`boolean`|Include or not include internal transactions defaults to false|
|`includeAllTxLogs`|`boolean`|Include all logs if atleast one value in tx or log matches stream config|
|`getNativeBalances`|`object`|Include native balances for each address in the webhook|
|`advancedOptions`|`object`||
|`chainIds`|`array`|The ids of the chains for this stream in hex Ex: ["0x1","0x38"]|
|`abi`|`object`||
|`functionAbi`|`object`|The abi to parse the log object of the contract|
|`triggers`|`object`|triggers|


After that Run:

```bash
  npm run update
```

In the CONSOLE you can Find the Stream Info:

```bash
{
   "id": "0d653a7a-05da-4f4a-8eec-bca8725046cd",
   "webhookUrl": "https://f40e-2a02-2454-8169-9200-5f0-16c8-42de-f987.ngrok-free.app/webhook",
   "description": "UniSwapV2",
   "tag": "ETH/USDT $ LINK/WETH",
   "demo": false,
   "topic0": null,
   "allAddresses": false,
   "includeNativeTxs": true,
   "filterPossibleSpamAddresses": false,
   "includeContractLogs": true,
   "includeInternalTxs": true,
   "includeAllTxLogs": false,
   "getNativeBalances": [],
   "triggers": [],
   "abi": null,
   "advancedOptions": null,
   "chainIds": ["0x1"],
   "status": "active",
   "statusMessage": "Stream is active",
   "amountOfAddresses": 0,
   "updatedAt": "2024-05-26T17:39:34.711Z"
  }
```
## Add Addresses

To Add Addresses To The Stream, First go to the file **``00_Settings.json``** and modify it.

- Add The Addresses To the file

After that Run:

```bash
  npm run add
```

You can also find the pairs Addresses by using the file **``getPairAddress.js``**, for that first modify the settigns:
- Token address 1
- Token address 2
- exchange

the Supported exchanges:

||||
|:--------|:-------| :------------------------- |
| UniSwap V3 | UniSwap V2 | QuickSwap |
| SushiSwap V2 | PancakeSwap V2 | PancakeSwap V1 |


After that Run:

```bash
  npm run pair
```

In the CONSOLE you can Find the Pair address:

```bash
0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852
```

and the script directly add the result to the file **``pairDetails.json``**
## Get All Streams List

To get all the streams list from the Moralis Account, First go to the file **``00_Settings.json``** and modify it.

- Moralis API Key

After That Run: 

```bash
npm run getstreams
```

In the CONSOLE you can Find the Streams list Details, And the total:

```bash
{
 "result": [
  {
   "id": "0d653a7a-05da-4f4a-8eec-bca8725046cd",
   "webhookUrl": "https://f40e-2a02-2454-8169-9200-5f0-16c8-42de-f987.ngrok-free.app/webhook",
   "description": "UniSwapV2",
   "tag": "ETH/USDT $ LINK/WETH",
   "demo": false,
   "topic0": null,
   "allAddresses": false,
   "includeNativeTxs": true,
   "filterPossibleSpamAddresses": false,
   "includeContractLogs": true,
   "includeInternalTxs": true,
   "includeAllTxLogs": false,
   "getNativeBalances": [],
   "triggers": [],
   "abi": null,
   "advancedOptions": null,
   "chainIds": [
    "0x1"
   ],
   "status": "active",
   "statusMessage": "Stream is active",
   "amountOfAddresses": 0,
   "updatedAt": "2024-05-26T17:39:34.711Z"
  },
  {
   "id": "9947d8ef-26d1-4012-8404-852f91b4be65",
   "webhookUrl": "https://f40e-2a02-2454-8169-9200-5f0-16c8-42de-f987.ngrok-free.app/webhook",
   "description": "UniSwapV2",
   "tag": "ETH/USDT $ LINK/WETH",
   "demo": false,
   "topic0": null,
   "allAddresses": false,
   "includeNativeTxs": true,
   "filterPossibleSpamAddresses": false,
   "includeContractLogs": false,
   "includeInternalTxs": false,
   "includeAllTxLogs": false,
   "getNativeBalances": [],
   "triggers": [],
   "abi": null,
   "advancedOptions": null,
   "chainIds": [
    "0x1"
   ],
   "status": "active",
   "statusMessage": "Stream is active",
   "amountOfAddresses": 0,
   "updatedAt": "2024-05-26T17:40:43.024Z"
  }
 ],
 "total": 2
}
```

and the script directly add the result to the file **``streamDetails.json``**
## Delete Stream

To delete a streams from the Moralis Account, First go to the file **``00_Settings.json``** and modify it.

- Moralis API Key
- Stream ID

After That Run: 

```bash
npm run delete
```
## Get The Stream Status

To get the streams Status, First go to the file **``00_Settings.json``** and modify it.

- Moralis API Key
- Stream ID

After That Run:

```bash
npm run status
```

In the CONSOLE you can Find the Streams status:

```bash
active
```

## Update Status

To Update the streams Status

just Run :

```bash
npm run updatestatus
```

In the CONSOLE you can Find the Streams status, first one the old status, and the second one the new:

```bash
Old Status: active
New Status: paused
```
## Get The WebhookUrl

To get the streams WebhookUrl, First go to the file **``00_Settings.json``** and modify it.

- Moralis API Key
- Stream ID

After That Run:

```bash
npm run getwebhook
```

In the CONSOLE you can Find the Streams WebhookUrl:

```bash
https://03e6-2a02-2454-8169-9200-5f0-16c8-42de-f987.ngrok-free.app/webhook
```
## Update The WebhookUrl

To Update the streams WebhookUrl, First go to the file **``00_Settings.json``** and modify it.

- Moralis API Key
- Stream ID
- WEBHOOK_URL

After That Run:

```bash
npm run updatewebhook
```

In the CONSOLE you can Find the Streams WebhookUrl:

```bash
New Webhook: https://03e6-2a02-2454-8169-9200-5f0-16c8-42de-f987.ngrok-free.app/webhook
```


## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

[![Node JS](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)

[![Json](https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white)](https://www.javascript.com/)
