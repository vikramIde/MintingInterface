const coinbaseOracle = {
  "contractName": "CoinbaseOracle",
  "abi": [
    {
      "name": "PriceUpdated",
      "inputs": [
        {
          "type": "uint256",
          "name": "price",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "outputs": [],
      "inputs": [
        {
          "type": "address",
          "name": "_admin"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "constructor"
    },
    {
      "name": "setPrice",
      "outputs": [],
      "inputs": [
        {
          "type": "uint256",
          "unit": "sec",
          "name": "_timestamp"
        },
        {
          "type": "string",
          "name": "_message"
        },
        {
          "type": "string",
          "name": "_signature"
        },
        {
          "type": "uint256",
          "name": "_price"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 1021838
    },
    {
      "name": "changeAdmin",
      "outputs": [],
      "inputs": [
        {
          "type": "address",
          "name": "_new_admin"
        }
      ],
      "constant": false,
      "payable": false,
      "type": "function",
      "gas": 36418
    },
    {
      "constant": false,
      "payable": true,
      "type": "fallback"
    },
    {
      "name": "admin",
      "outputs": [
        {
          "type": "address",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1211
    },
    {
      "name": "lastUpdate",
      "outputs": [
        {
          "type": "uint256",
          "unit": "sec",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1241
    },
    {
      "name": "message",
      "outputs": [
        {
          "type": "string",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 22329
    },
    {
      "name": "signature",
      "outputs": [
        {
          "type": "string",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 13565
    },
    {
      "name": "price",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "constant": true,
      "payable": false,
      "type": "function",
      "gas": 1331
    }
  ],
  "bytecode": "0x740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a05260206105f36101403934156100a157600080fd5b60206105f360c03960c05160205181106100ba57600080fd5b50610140516000556105db56600436101561000d57610513565b600035601c52740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a0526369a6d04160005114156102615734156100ba57600080fd5b610222602435600401610140376102026024356004013511156100dc57600080fd5b6101206044356004016103a0376101006044356004013511156100fe57600080fd5b6000543314151561019f576308c379a06104e0526020610500526045610520527f4572726f722072756e6e696e67207365745072696365202d204f6e6c79207468610540527f6520636f6e74726163742061646d696e2063616e207570646174652074686520610560527f70726963650000000000000000000000000000000000000000000000000000006105805261052050600061019e5760c46104fcfd5b5b60043560015561014080600260c052602060c020602082510161012060006012818352015b826101205160200211156101d7576101f9565b61012051602002850151610120518501555b81516001018083528114156101c4575b5050505050506103a080600360c052602060c020602082510161012060006009818352015b8261012051602002111561023157610253565b61012051602002850151610120518501555b815160010180835281141561021e575b505050505050606435600455005b638f283970600051141561033557341561027a57600080fd5b600435602051811061028b57600080fd5b506000543314151561032d576308c379a061014052602061016052604d610180527f4572726f722072756e6e696e67207365745072696365202d204f6e6c792074686101a0527f6520636f6e74726163742061646d696e2063616e2075706461746520746865206101c0527f61646d696e2061646472657373000000000000000000000000000000000000006101e05261018050600061032c5760c461015cfd5b5b600435600055005b63f851a440600051141561035c57341561034e57600080fd5b60005460005260206000f350005b63c0463711600051141561038357341561037557600080fd5b60015460005260206000f350005b63e21f37ce600051141561043757341561039c57600080fd5b60028060c052602060c020610180602082540161012060006012818352015b826101205160200211156103ce576103f0565b61012051850154610120516020028501525b81516001018083528114156103bb575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b6351ff484760005114156104eb57341561045057600080fd5b60038060c052602060c020610180602082540161012060006009818352015b82610120516020021115610482576104a4565b61012051850154610120516020028501525b815160010180835281141561046f575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b63a035b1fe600051141561051257341561050457600080fd5b60045460005260206000f350005b5b5b6100c76105db036100c76000396100c76105db036000f3",
  "deployedBytecode": "0x600436101561000d57610513565b600035601c52740100000000000000000000000000000000000000006020526f7fffffffffffffffffffffffffffffff6040527fffffffffffffffffffffffffffffffff8000000000000000000000000000000060605274012a05f1fffffffffffffffffffffffffdabf41c006080527ffffffffffffffffffffffffed5fa0e000000000000000000000000000000000060a0526369a6d04160005114156102615734156100ba57600080fd5b610222602435600401610140376102026024356004013511156100dc57600080fd5b6101206044356004016103a0376101006044356004013511156100fe57600080fd5b6000543314151561019f576308c379a06104e0526020610500526045610520527f4572726f722072756e6e696e67207365745072696365202d204f6e6c79207468610540527f6520636f6e74726163742061646d696e2063616e207570646174652074686520610560527f70726963650000000000000000000000000000000000000000000000000000006105805261052050600061019e5760c46104fcfd5b5b60043560015561014080600260c052602060c020602082510161012060006012818352015b826101205160200211156101d7576101f9565b61012051602002850151610120518501555b81516001018083528114156101c4575b5050505050506103a080600360c052602060c020602082510161012060006009818352015b8261012051602002111561023157610253565b61012051602002850151610120518501555b815160010180835281141561021e575b505050505050606435600455005b638f283970600051141561033557341561027a57600080fd5b600435602051811061028b57600080fd5b506000543314151561032d576308c379a061014052602061016052604d610180527f4572726f722072756e6e696e67207365745072696365202d204f6e6c792074686101a0527f6520636f6e74726163742061646d696e2063616e2075706461746520746865206101c0527f61646d696e2061646472657373000000000000000000000000000000000000006101e05261018050600061032c5760c461015cfd5b5b600435600055005b63f851a440600051141561035c57341561034e57600080fd5b60005460005260206000f350005b63c0463711600051141561038357341561037557600080fd5b60015460005260206000f350005b63e21f37ce600051141561043757341561039c57600080fd5b60028060c052602060c020610180602082540161012060006012818352015b826101205160200211156103ce576103f0565b61012051850154610120516020028501525b81516001018083528114156103bb575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b6351ff484760005114156104eb57341561045057600080fd5b60038060c052602060c020610180602082540161012060006009818352015b82610120516020021115610482576104a4565b61012051850154610120516020028501525b815160010180835281141561046f575b50505050505061018051806101a001818260206001820306601f82010390500336823750506020610160526040610180510160206001820306601f8201039050610160f350005b63a035b1fe600051141561051257341561050457600080fd5b60045460005260206000f350005b5b",
  "source": "# (c) 2020 Brandon McFarland\n\n# @title CoinbaseOracle\n# @author Brandon McFarland\n# @notice A contract for writing Coinbase Oracle data to chain and reading it\n\nPriceUpdated: event({\n    price: uint256\n})\n\nadmin: public(address)\nlastUpdate: public(timestamp)\nmessage: public(string[514])\nsignature: public(string[256])\nprice: public(uint256)\n\n@public\ndef __init__(_admin: address):\n    self.admin = _admin\n\n@public\ndef setPrice(_timestamp: timestamp, _message: string[514], _signature: string[256], _price: uint256):\n    if not msg.sender == self.admin:\n        raise \"Error running setPrice - Only the contract admin can update the price\"\n    self.lastUpdate = _timestamp\n    self.message = _message\n    self.signature = _signature\n    self.price = _price\n\n@public\ndef changeAdmin(_new_admin: address):\n    if not msg.sender == self.admin:\n        raise \"Error running setPrice - Only the contract admin can update the admin address\"\n    self.admin = _new_admin\n\n@public\n@payable\ndef __default__():\n    pass\n",
  "sourcePath": "/Users/brandonmcfaraland/Desktop/contract_dev/dev/truffle/contracts/CoinbaseOracle.vy",
  "compiler": {
    "name": "vyper",
    "version": "0.1.0b16+commit.df97c9c"
  },
  "networks": {
    "42": {
      "events": {
        "0x66cbca4f3c64fecf1dcb9ce094abcf7f68c3450a1d4e3a8e917dd621edb4ebe0": {
          "name": "PriceUpdated",
          "inputs": [
            {
              "type": "uint256",
              "name": "price",
              "indexed": false
            }
          ],
          "anonymous": false,
          "type": "event"
        }
      },
      "links": {},
      "address": "0x62684DE00fbEFeC1F02A9EE450325A631E9D6937",
      "transactionHash": "0xdf96cfa9581ea680deb545b3491039a2c4c5264b2ba6bce52806d48ec9faa3ac"
    }
  },
  "schemaVersion": "3.0.23",
  "updatedAt": "2020-07-09T19:53:19.724Z"
}

module.exports = coinbaseOracle;