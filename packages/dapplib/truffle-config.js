require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth situate coin harvest clog orange gentle'; 
let testAccounts = [
"0xe5208f8bc335c1442d58e7a13957ce6529ec4c4034e0d3c4fa4c8faa4dece02a",
"0xa3e841f6cace82d44c166b315f6f5994c60beb08fd1f70b5533f23b9ef7ce5b7",
"0x3c6ef5b2816a722a3298c4624919128a7034e160c77b7a17e090823c8e1255e7",
"0x29904e328acbbd201de37a152c84aaf3586b3f173c8d1d907365aedd2ca80baf",
"0x65e4c74c59d52ff9622e0d693f2abcc01bf8a620d18628152ff35ef416402604",
"0x658e80871988f3b069de3e0561526501e619480e71d886f297acbcfa4f4dc980",
"0x4dff98c1bc24b6c01529f7e10afe2dd5698ae0c0bd94ea54911119b8d226c7c7",
"0x28ee6259194aed51e41d9f38b000cb57554d5976283326cd2272a3c4975ac3da",
"0xd16734103e72fd086708704f0c5ee8a2bf4eb340f6a210f33b5b63ebddf38bd8",
"0x4ad96243aed4fc78d411b9e1aedb8b7e872db6c61cba2406060a8b75f4dc7562"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

