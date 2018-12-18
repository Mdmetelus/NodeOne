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

