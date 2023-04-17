// const url = 'https://test.paraluni.org/images';
// const url = 'http://localhost:8890/images';
const url = 'https://static.paraluni.org/images';
const chef0 = [
  {
    "pid": 0,
    "token": "0x55d398326f99059ff775485246999027b3197955",
    "symbol": "青铜",
    decimal: 18,
    "ticket_address": "0x7D6247006C8F41C09E254312653E1601dc29eBde",
    "ticket_level": "0",
    profitName: 'APR',
    img: url + '/tinified/bronze.png'
  },
  {
    "pid": 1,
    "token": "0x55d398326f99059ff775485246999027b3197955",
    "symbol": "白银",
    decimal: 18,
    "ticket_address": "0xfcF074E1e358Ffa5c3002A1f3BC1fd44C75fb406",
    "ticket_level": "1",
    profitName: 'APR',
    img: url + '/tinified/sliver.png'
  },
  {
    "pid": 2,
    "token": "0x55d398326f99059ff775485246999027b3197955",
    "symbol": "黄金",
    decimal: 18,
    "ticket_address": "0x636AE89d818bB77350eFbc2Dc4a705aca95CbF8D",
    "ticket_level": "2",
    profitName: 'APR',
    img: url + '/tinified/gold.png'
  },
  {
    "pid": 3,
    "token": "0x55d398326f99059ff775485246999027b3197955",
    "symbol": "铂金",
    decimal: 18,
    "ticket_address": "0xCb11B1499fC32B76a13f545fE2e793728D6e7a59",
    "ticket_level": "3",
    profitName: 'APR',
    img: url + '/tinified/platinum.png'
  },
  {
    "pid": 4,
    "token": "0x55d398326f99059ff775485246999027b3197955",
    "symbol": "钻石",
    decimal: 18,
    "ticket_address": "0x450f562BBF8B5084B6e71D0f6d68AA683E805a50",
    "ticket_level": "4",
    profitName: 'APR',
    img: url + '/tinified/diamond.png'
  }
]
const chef1 = [
  {
    "pid": 19,
    "token": "0xcdd33e0a056470e281a03b1d1f3ef05334f9dbe1",
    "symbol": "T42/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/products/PUC-BUSD@2x.png'
  },
  {
    "pid": 8,
    "token": "0x7b97ae900fca3d8f909e1b335a792ab784c72141",
    "symbol": "ETH/BNB",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/ETH-BNB.png'
  },
  {
    "pid": 9,
    "token": "0xdc009de0bf74e90b10e243e103d5d07afd1c450e",
    "symbol": "BTCB/BNB",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/BTCB-BNB.png'
  },
  {
    "pid": 10,
    "token": "0x6bb7c8968f29c51293229bbd8140962166438088",
    "symbol": "BNB/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/BNB-BUSD.png'
  },
  {
    "pid": 11,
    "token": "0x65855f11d7238ee33580174adcfa2a78cf009118",
    "symbol": "ETH/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/ETH-BUSD.png'
  },
  {
    "pid": 12,
    "token": "0xbe6621067f4c9ed308ae07e2d8b0f636c11dcafb",
    "symbol": "BTCB/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/BTCB-BUSD.png'
  },
  {
    "pid": 15,
    "token": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
    "symbol": "BTCB",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/BTCB.png'
  },
  {
    "pid": 16,
    "token": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "symbol": "WBNB",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/BNB.png'
  },
  {
    "pid": 17,
    "token": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    "symbol": "ETH",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/ETH.png'
  },
  {
    "pid": 20,
    "token": "0xf14c92fdfe809390ef9154cff8faa59be4582864",
    "symbol": "CAKE/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/CAKE-BUSD.png'
  },
  {
    "pid": 21,
    "token": "0x7294c6659d4c4733e2ffed579eacc5dd6cf68d3c",
    "symbol": "BSW/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/BSW-BUSD.png'
  },
  {
    "pid": 22,
    "token": "0x47902F5Ed61711E71882C25fC3114390f5A373d9",
    "symbol": "LINK/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/LINK-BUSD.png'
  },
  {
    "pid": 24,
    "token": "0x781f5D719Dcd59B6eE01aDEE6170750DC9132247",
    "symbol": "T42/BTCB",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/T42-BTCB.png'
  },
  {
    "pid": 23,
    "token": "0x5976815f279d8bf22748f75072887591e1f65264",
    "symbol": "T42/BNB",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/T42-BNB.png'
  }
]

const chef2 = [
  {
    "pid": 18,
    "token": "0x3fd4fbd7a83062942b6589a2e9e2436dd8e134d4",
    "symbol": "USDT/BUSD",
    "decimal": 18,
    profitName: 'APR',
    img: url + '/tinified/USDT-BUSD.png'
  }
]

module.exports = {
  chef0,
  chef1,
  chef2,
}
