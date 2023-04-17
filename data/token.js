const tokenList = [
  {"address": "0x55d398326f99059ff775485246999027b3197955", "symbol": "USDT", "decimal": 18},
  {"address": "0xe9e7cea3dedca5984780bafc599bd69add087d56", "symbol": "BUSD", "decimal": 18},
  {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "BNB", "decimal": 18},
  {"address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "symbol": "WBNB", "decimal": 18},
  {"address": "0x43Feaca246392C23EE5A0Db618fCd81a74b91726", "symbol": "T42", "decimal": 18},
  {"address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", "symbol": "BTCB", "decimal": 18},
  {"address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8", "symbol": "ETH", "decimal": 18},
  {"address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82", "symbol": "CAKE", "decimal": 18},
  {"address": "0x965f527d9159dce6288a2219db51fc6eef120dd1", "symbol": "BSW", "decimal": 18},
  {"address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd", "symbol": "LINK", "decimal": 18}
]
const lpList = [
  {"address": "0x3fd4fbd7a83062942b6589a2e9e2436dd8e134d4", "symbol": "USDT-BUSD", "decimal": 18},
  {"address": "0x7b97ae900fca3d8f909e1b335a792ab784c72141", "symbol": "ETH-BNB", "decimal": 18},
  {"address": "0xdc009de0bf74e90b10e243e103d5d07afd1c450e", "symbol": "BTCB-BNB", "decimal": 18},
  {"address": "0xbe6621067f4c9ed308ae07e2d8b0f636c11dcafb", "symbol": "BTCB-BUSD", "decimal": 18},
  {"address": "0x6bb7c8968f29c51293229bbd8140962166438088", "symbol": "BNB-BUSD", "decimal": 18},
  {"address": "0x65855f11d7238ee33580174adcfa2a78cf009118", "symbol": "ETH-BUSD", "decimal": 18},
  {"address": "0xf14c92fdfe809390ef9154cff8faa59be4582864", "symbol": "CAKE-BUSD", "decimal": 18},
  {"address": "0x7294c6659d4c4733e2ffed579eacc5dd6cf68d3c", "symbol": "BSW-BUSD", "decimal": 18}
]

const tokensLp = {
  "USDT": "0x3fd4fbd7a83062942b6589a2e9e2436dd8e134d4",
  "BTCB": "0xbe6621067f4c9ed308ae07e2d8b0f636c11dcafb",
  "ETH": "0x65855f11d7238ee33580174adcfa2a78cf009118",
  "WBNB": "0x6bb7c8968f29c51293229bbd8140962166438088",
  "T42": "0xcdd33e0a056470e281a03b1d1f3ef05334f9dbe1",
  "BNB": "0x6bb7c8968f29c51293229bbd8140962166438088",
  "CAKE": "0xf14c92fdfe809390ef9154cff8faa59be4582864",
  "BSW": "0x7294c6659d4c4733e2ffed579eacc5dd6cf68d3c",
  "LINK": "0x47902F5Ed61711E71882C25fC3114390f5A373d9",
}
const url = 'https://paraluni.org/images';
const HomeCarouselList = [
  {img: url + '/Banners/HomeSwiperBg1.gif', url: ''},
  {img: url + '/Banners/HomeSwiperBg5.jpg', url: ''},
  {img: url + '/Banners/HomeSwiperBg2.png', url: ''},
  {img: url + '/Banners/HomeSwiperBg3.png', url: ''},
  {img: url + '/Banners/HomeSwiperBg4.png', url: ''}

]
const FinanceCarouselList = [
  {img: url + '/Banners/FinanceSwiperBg1.png', url: ''},
  {img: url + '/Banners/FinanceSwiperBg2.png', url: ''},
  {img: url + '/Banners/FinanceSwiperBg3.png', url: ''},
]
module.exports = {
  tokenList,
  lpList,
  tokensLp,
  HomeCarouselList,
  FinanceCarouselList
}
