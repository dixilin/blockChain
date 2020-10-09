const Blockchain = require("./blockchain")

const nodejsChain = new Blockchain()

nodejsChain.addBlock("Send 100 BTC to Lin")
nodejsChain.addBlock("Send 200 BTC to Wu")

nodejsChain.print()