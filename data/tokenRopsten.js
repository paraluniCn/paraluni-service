const tokenList = [
    {
        "address": "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        "symbol": "USDT",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/USDT@2x.png',
    },
    {
        "address": "0x8104CcB258e3C1682F8D303a43Fe1678F45a2b9f",
        "symbol": "BUSD",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BUSD@2x.png'
    },
    {
        "address": "0x16852c7287E975a51c81870A101fd23445A2DEb7",
        "symbol": "BNB",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BNB@2x.png'
    },
    {
        "address": "0x16852c7287E975a51c81870A101fd23445A2DEb7",
        "symbol": "WBNB",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BNB@2x.png'
    },
    {
        "address": "0xAcE3EF9092d18E5Dc491d5FBa019F96e7f126586",
        "symbol": "V42(old)",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/V42_OLD.png',
        isOld: true
    },
    {
        "address": "0xd6000364D25C53A56DDe9b58A906203A1dE59f12",
        "symbol": "BTCB",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BBTC@2x.png'
    },
    {
        "address": "0xe44cb1a57e7f057d0652820aC5E6b44026B576CE",
        "symbol": "ETH",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/ETH@2x.png'
    },
    {
        "address": "0x4404a577411FaEA720aeA4b2603D95F95040Fb9b",
        "symbol": "FIL",
        "decimal": 18,
        'img': 'https://paraluni.org/images/tinified/FIL.png'
    },
    {
        "address": "0x3ce1A300101f704712C32A72108E36a092307Cf0",
        "symbol": "CF",
        "decimal": 18,
        'img': 'https://paraluni.org/images/tinified/CF.png',
    },
    {
        "address": "0x2A49331d6EA02ec23Ed229d252772874CB89c9c7",
        "symbol": "LS",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/LS.png',
    },

]

const tokenListNew = [
    {
        "address": "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        "symbol": "USDT",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/USDT@2x.png'
    },
    {
        "address": "0xE5a678BCd1d625D9723A0f274daFFE225AD0b81c",
        "symbol": "V42",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/logo-yellow@2x.png'
    },
    {
        "address": "0xa41D3321dCe39a0E20E07e2F9C368B1EBF0bA39f",
        "symbol": "PUSD",
        "decimal": 18,
        'img': 'https://paraluni.org/images/pusd/pusd.png',
    },
]
const url = 'https://paraluni.org/images';
const HomeCarouselList = [
    {img: url + '/Banners/HomeSwiperBg1.png', url: ''},
    {img: url + '/Banners/HomeSwiperBg5.png', url: ''},
    {img: url + '/Banners/HomeSwiperBg4.png', url: ''}
]
const FinanceCarouselList = [
    {img: url + '/Banners/FinanceSwiperBg1.png', url: ''},
    {img: url + '/Banners/FinanceSwiperBg3.png', url: ''},
]
const toastInfo={isShow:true,text1:'本周四晚八点平行宇宙空课：平行宇宙固收基金双链齐发',text2:'点击预约',url:'https://meeting.tencent.com/dm/Py8KdeapwRwt'}
module.exports = {
    tokenList,
    HomeCarouselList,
    FinanceCarouselList,
    tokenListNew,
    toastInfo
}
