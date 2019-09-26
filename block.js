const crypto = require('crypto');

let blockchain = [];


const genesisBlock = {
    index: blockchain.length,
    timestamp: Date(),
    data: "fistblock",
    dataHash: crypto.createHash('sha256').update("firstblock").digest('hex'),
    previousHash: '',
    headerHash: crypto.createHash('sha256').update("firstblockheader").digest('hex')
}

let createBlock = function(data){
    let block = {
        index : blockchain.length,
        timestamp : Date(),
        data : data,
        dataHash : crypto.createHash('sha256').update(data).digest('hex'),
        previousHash : blockchain[blockchain.length-1].headerHash,
        headerHash : crypto.createHash('sha256').update(
            data + genesisBlock.previousHash).digest('hex')
    }
    blockchain.push(block);
}


blockchain.push(genesisBlock);

createBlock('secondblock');
createBlock('thirdblock');
createBlock('forthblock');
createBlock('fifthblock');

console.log(blockchain);