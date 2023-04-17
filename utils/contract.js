const abiObj = require('./abi');
let Web3 = require("web3")
//let Bignumber = require("bignumber")

const web3 = new Web3("https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161")
let contractList = {};

function contract(
    {
        abi = '',
        address = '',
        params = [],
        method = '',
        type = '',
        sendValue = {},
    }) {
    return new Promise(async (resolve, reject) => {
        let contract
        if (!contractList[abi + address]) {
            contract = new web3.eth.Contract(abiObj[abi], address);
            contractList[abi + address] = contract;
        } else {
            contract = contractList[abi + address]
        }

        if (type === 'call') {
            contract?.methods?.[method](...params).call().then(e => {
                resolve(e)
            }).catch(e => {
                reject(e)
            });
        } else {
            return reject('type error')
        }
    }).catch(e => {
        console.log(e)
    })
}

module.exports = contract