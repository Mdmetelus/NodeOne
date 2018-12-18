const lightningHash = (data) => {
    return data + '*';
}

class Block {
    constructor(data, hash, lastHash) {
        this.data = data;
        this.hash = hash;
        this.lastHash = lastHash;
    }
}


// const fooBlock = new Block('foo-data','foo-hash', 'foo-lastHash');
// console.log(fooBlock);

class Blockchain {
    constructor() {
        const genesis = new Block('gen-data', 'gen-hash'," gen-lastHash")
        this.chain = [genesis];
    }

    addBlock(data) {
        const lastHash = this.chain[this.chain.length -1].hash;

        const hash = lightningHash(data + lastHash);

        const block = new Block(data, hash, lastHash);
        this.chain .push(block);
    }
}

const fooBlockchain = new Blockchain();
fooBlockchain.addBlock('one');
fooBlockchain.addBlock('two');
fooBlockchain.addBlock('three');
fooBlockchain.addBlock('monkey');
fooBlockchain.addBlock('banana');
fooBlockchain.addBlock('six');
fooBlockchain.addBlock('seven');

console.log(fooBlockchain);

//node output Bellow
// └─ $ ▶ node secondBlock.js
// Blockchain {
//   chain:
//    [ Block { data: 'gen-data', hash: 'gen-hash', lastHash: ' gen-lastHash' },
//      Block { data: 'one', hash: 'onegen-hash*', lastHash: 'gen-hash' },
//      Block {
//        data: 'two',
//        hash: 'twoonegen-hash**',
//        lastHash: 'onegen-hash*' },
//      Block {
//        data: 'three',
//        hash: 'threetwoonegen-hash***',
//        lastHash: 'twoonegen-hash**' },
//      Block {
//        data: 'monkey',
//        hash: 'monkeythreetwoonegen-hash****',
//        lastHash: 'threetwoonegen-hash***' },
//      Block {
//        data: 'banana',
//        hash: 'bananamonkeythreetwoonegen-hash*****',
//        lastHash: 'monkeythreetwoonegen-hash****' },
//      Block {
//        data: 'six',
//        hash: 'sixbananamonkeythreetwoonegen-hash******',
//        lastHash: 'bananamonkeythreetwoonegen-hash*****' },
//      Block {
//        data: 'seven',
//        hash: 'sevensixbananamonkeythreetwoonegen-hash*******',
//        lastHash: 'sixbananamonkeythreetwoonegen-hash******' } ] }


