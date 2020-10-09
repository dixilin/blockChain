const Block = require("./block")

class Blockchain{
  constructor() {
    this.blockchain = [this.createGenesis()];
  }

  //创世块
  createGenesis() {
    let timestamp = Date.parse("2020/10/09 11:48:48")
    return new Block(timestamp, "创世块")
  }

  latestBlock() {
    return this.blockchain[this.blockchain.length - 1]
  }
  
  addBlock(data){
    const newBlock = new Block(Date.now(), data)
  
    newBlock.previousHash = this.latestBlock().hash
    this.blockchain.push(newBlock)
  }

  print() {
    this.blockchain.forEach((block, idx) => {
      console.log(`
        blockHeight: ${idx}
        previsousHash: ${block.previousHash}
        data: ${block.data},
        hash: ${block.hash}
      `)
    });
  }
}

module.exports = Blockchain