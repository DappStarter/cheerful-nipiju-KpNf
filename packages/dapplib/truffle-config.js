require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remember snake idea ensure outer genius'; 
let testAccounts = [
"0xd3c01edfee12e8e5975b227a3627c9d720434b7661044ab148b485c4740a1f51",
"0xa4545e622a66f6a83044def6e9328cc9d6bf300c2e7964d80f79e4e80afa8f01",
"0x29ef29f59b45ec8ca0dbf6981970f9b9c8f63df0e569dacdcd6234ff6d08831d",
"0x24a3e3cc4c5a2f3882eae8668e148c09f97fcb9b04ba7ad2f0363349d92a6f17",
"0xa6f4004052e15a97e2d25c5ffd4e6069a22bbeebd777fbaf1cbfd2bd3a517aa7",
"0x4feae1cbc33736a24176a322f0d9c470c1a58cc4ad6c03702e54a88e5c66b98c",
"0x0bf430400827a9558c3276cf3cc532c7668ba1be2ef69a46577f654d2b81344a",
"0xbeb2c85e11078b90985bf919d8cd3d3ab20bcac26f3a73aa464ba5733f6189ee",
"0x698fb99a6f84e1ea109a1c90f768eefc5be4071ad99b513333d577075d7361c3",
"0xa8dc83bb2936ac0635914a2ab50c8677b71bd81238db0bf0a25052dbea590e8c"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

