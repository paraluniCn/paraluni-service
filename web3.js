let Web3 = require("web3")
//let Bignumber = require("bignumber")

const web3 = new Web3("https://bsc-dataseed.binance.org")
const veBAGELAddress = "0x9E9D8D79fc181F6C3e2190457ddb557cfC6e7991";
const bagelAddress = "0xBb238FcE6E2eE90781cD160C9C6eAf3a4CfAD801";
const busdAddress = "0xe9e7cea3dedca5984780bafc599bd69add087d56";
const bagelBUSDLPAddress = "0xe5C1d157E35E363289E2B413e2344fffd82569D3"

const erc20Abi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
let veBAGELContract = new web3.eth.Contract(erc20Abi, veBAGELAddress);
let bagelContract = new web3.eth.Contract(erc20Abi, bagelAddress);
let busdContract = new web3.eth.Contract(erc20Abi, busdAddress);
let bagelBUSDLPContract = new web3.eth.Contract(erc20Abi, bagelBUSDLPAddress);

// function bagelBalanceOf(address,res){
//   let result = 0;
//   bagelContract.methods.balanceOf(address).call(function(err,balance){
//     result = balance;
//     //console.log(result);
//     //return Number(balance);
//   })
//   console.log(result);
//   return result;
// }
function bagelBalanceOf(address){
  let result = 0;
  bagelContract.methods.balanceOf(address).call().then(function(balance){
    result = balance;
  })
  return result;
  console.log(result)
}

function busdBalanceOf(address){
  busdContract.methods.balanceOf(address).call(function(err,balance){
    return Number(balance);
  })
}
function getGasPrice(req,res){
   web3.eth.getGasPrice(function(err,gasPrice){
    let results = {"msg": gasPrice}
    res.status(200);
    res.json(results)
  })
}
function getBalance(req,res,address){
  web3.eth.getBalance(address,function(err,balance){
    let results = {"msg": balance}
    res.status(200);
    res.json(results)
  })
}

function getBagelPrice(){
  // bagelBalanceOf(bagelBUSDLPAddress, function(err,bagelBalance){
  //   console.log(bagelBalance);
  // });
  var bagelBalance = bagelBalanceOf(bagelBUSDLPAddress);
  //console.log(bagelBalance);
  var busdBalance = busdBalanceOf(bagelBUSDLPAddress);
  //console.log(busdBalance);
}

function getTVL(){

}

module.exports = {
  getGasPrice,
  getBalance,
  bagelBalanceOf,
  getBagelPrice
}

// // Base Func
// export const getBalance = async (address) => await web3.eth.getBalance(address)

// export const fromWei = async (val, unit) => await web3.utils.fromWei(val, unit)

// export const toWei = async (val, unit) => await web3.utils.toWei(val, unit)

// export const estimateGas = async (from, to, data, value) => await web3.eth.estimateGas({ from, to, data, value })

// export const getGasPrice = async () => await web3.eth.getGasPrice()

// /**
//  * 是否可以进行Mint
//  * @returns
//  */
// export const saleIsActive = async () => {
//   const myContract = new web3.eth.Contract(tigerABI, tigerContractAddr)
//   return await myContract.methods.saleIsActive().call()
// }

// /**
//  * 获取单价
//  * @returns
//  */
// export const tigerPrice = async () => {
//   const myContract = new web3.eth.Contract(tigerABI, tigerContractAddr)
//   return await myContract.methods.tigerPrice().call()
// }

// /**
//  * 单次最大mint数量
//  * @returns
//  */
// export const maxTigerPurchase = async () => {
//   const myContract = new web3.eth.Contract(tigerABI, tigerContractAddr)
//   return await myContract.methods.maxTigerPurchase().call()
// }

// /**
//  *
//  * @returns
//  */
// export const totalSupply = async () => {
//   const myContract = new web3.eth.Contract(tigerABI, tigerContractAddr)
//   return await myContract.methods.totalSupply().call()
// }
// /**
//  *
//  * @returns
//  */
// export const tokenOfOwnerByIndex = async (address, index) => {
//   const myContract = new web3.eth.Contract(tigerABI, tigerContractAddr)
//   return await myContract.methods.tokenOfOwnerByIndex(address, index).call()
// }
// /**
//  *
//  * @returns
//  */
// export const balanceOf = async (address) => {
//   const myContract = new web3.eth.Contract(tigerABI, tigerContractAddr)
//   return await myContract.methods.balanceOf(address).call()
// }
// /**
//  * Mint
//  * @param {*} 盲盒数量
//  * @param {*} 盲盒数量 * 盲盒单价
//  * @param {*} address
//  * @returns
//  */
// export const mintTigers = async (amount, value, address) => {
//   const myContract = new web3.eth.Contract(tigerABI, tigerContractAddr)
//   const _value = web3.utils.toWei(String(value), 'ether')
//   const gasPrice = await getGasPrice()

//   const estimateGas = await myContract.methods.mintTigers(amount).estimateGas({
//     from: address,
//     value: _value
//   })

//   return await myContract.methods.mintTigers(amount).send({
//     from: address,
//     gas: estimateGas,
//     gasPrice,
//     value: _value
//   })
// }
