const tokenList = [
    {
        "address": "0x55d398326f99059ff775485246999027b3197955",
        "symbol": "USDT",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/USDT@2x.png'
    },
    {
        "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "symbol": "BUSD",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BUSD@2x.png'
    },
    {
        "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "symbol": "BNB",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BNB@2x.png'
    },
    {
        "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "symbol": "WBNB",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BNB@2x.png'
    },
    {
        "address": "0xA573cD6890b50E02Dd658164882ee7B6A86C1122",
        "symbol": "V42(old)",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/V42_OLD.png'
    },
    {
        "address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        "symbol": "BTCB",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BBTC@2x.png'
    },
    {
        "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        "symbol": "ETH",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/ETH@2x.png'
    },
    {
        "address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        "symbol": "CAKE",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/CAKE@2x.png'
    },
    {
        "address": "0x965f527d9159dce6288a2219db51fc6eef120dd1",
        "symbol": "BSW",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/BSW@2x.png'
    },
    {
        "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
        "symbol": "LINK",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/LINK@2x.png'
    },
    {
        "address": "0xFdc7a089CD7463dd6be155A7f3f21CF10338B888",
        "symbol": "CF",
        "decimal": 18,
        'img': 'https://paraluni.org/images/tinified/CF.png'
    },
    {
        "address": "0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8",
        "symbol": "FA",
        "decimal": 18,
        'img': 'https://paraluni.org/images/tinified/FA.png'
    },
    {
        "address": '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
        "symbol": 'FIL',
        "decimal": 18,
        'img': 'https://paraluni.org/images/tinified/FIL.png'
    },
    {
        "address": '0x1d6215ca4692dd6491250b116831750dd0ecf656',
        "symbol": 'CGK',
        "decimal": 18,
        'img': 'https://chinggiskhaan.io/images/CGK.png'
    },
    {
        "address": '0x846b8F848bd3e55183E03DBc8170655947Cc3C2c',
        "symbol": 'Aster',
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/ASTER.png',
    },
    // {
    //     "address": '0x600F437DD7d9bd431A4B5156655183f118d2640A',
    //     "symbol": 'XRK',
    //     "decimal": 18,
    //     'img': 'https://paraluni.org/images/Logos/XRK.png'
    // },
    // {
    //     "address": '0x6C12dE1f85aA804955d235f3D05e216ae339D99A',
    //     "symbol": 'QFD',
    //     "decimal": 18,
    //     'img': 'https://paraluni.org/images/Logos/QFD.png',
    //     maxPercentage: 0.8,
    //     maxCanSellNum: 0,
    //     buyCommission: 0.06,
    //     serviceChargeList: [
    //         {percentage: 0, sell: 0.06},
    //         {percentage: 0.1, sell: 0.1},
    //         {percentage: 0.2, sell: 0.15},
    //         {percentage: 0.3, sell: 0.2},
    //         {percentage: 0.4, sell: 0.3},
    //         {percentage: 0.5, sell: 0.4},
    //         {percentage: 0.6, sell: 0.5},
    //     ]
    // },

    // {
    //     "address": '0xf9fb823089f7178fc19be2bf1d811937bbf3f331',
    //     "symbol": 'NL',
    //     "decimal": 18,
    //     'img': 'https://paraluni.org/images/Logos/NL.png'
    // }
]


const tokenListNew = [
    {
        "address": "0x8EE943bab23C31de7164Ab8aB18a6eAa47f15478",
        "symbol": "PUSD",
        "decimal": 18,
        'img': 'https://paraluni.org/images/pusd/pusd.png'
    },
    {
        "address": "0xBb87F2a37cf805E3755Cb1e7DA41140589190e25",
        "symbol": "V42",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/logo-yellow@2x.png'
    },
    {
        "address": "0x55d398326f99059ff775485246999027b3197955",
        "symbol": "USDT",
        "decimal": 18,
        'img': 'https://paraluni.org/images/products/USDT@2x.png'
    },
]
const url = 'https://paraluni.org/images';
const HomeCarouselList = [
    {img: url + '/pusd/pusd_fund_home_banner.png',url: 'https://apollo.paraluni.org/pusdFundBuy/0',openNewWindow: true},
    {img: url + '/pusd/pusd_banner.png',url: 'https://apollo.paraluni.org/saIntroduction',openNewWindow: true},
    {img: url + '/Banners/banner_contact.jpg', url: 'https://t.me/paraluni_CN', openNewWindow: true},
    {img: url + '/Banners/pledge-V42.png', url: '/pledgeBorrowIntroduction', openNewWindow: false},
    {img: url + '/Banners/pledge_borrow_banner.png', url: '/pledgeBorrowIntroduction', openNewWindow: false},
    {img: url + '/Banners/paraluni_trade_banner.png', url: ''},
    {img: url + '/Banners/HomeSwiperBg5.png', url: 'https://legacy.paraluni.org/', openNewWindow: true},

]
const FinanceCarouselList = [
    {img: url + '/Banners/qfd_banner_small.png', url: '/finance', openNewWindow: false},
    {img: url + '/Banners/banner-dongsheng-small.png', url: '/finance', openNewWindow: false},
    {img: url + '/Banners/BannerCgkSmall.png'},
]

const toastInfo = {
    isShow: true,
    text1: '盈利宝正式上线啦！',
    text2: '',
    url: ''
}
module.exports = {
    tokenList,
    HomeCarouselList,
    FinanceCarouselList,
    tokenListNew,
    toastInfo
}
