const url = 'https://paraluni.org/images';
const tokenList = [
    {
        "address": "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",
        "symbol": "TRX",
        "decimal": 6,
        'img': 'https://paraluni.org/images/Logos/WTRX.png'
    },
    {
        "address": "TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1",
        "symbol": "V42",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/logo-yellow@2x.png'
    },
    {
        "address": "TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR",
        "symbol": "WTRX",
        "decimal": 6,
        'img': 'https://paraluni.org/images/Logos/WTRX.png'
    },
    {
        "address": "TNx4eA17QANL3prrypCzunyTcekaPjdvvS",
        "symbol": "DHC",
        "decimal": 6,
        'img': 'https://paraluni.org/images/Logos/DHC.png'
    },
    {
        "address": "TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb",
        "symbol": "GCB",
        "decimal": 6,
        'img': 'https://paraluni.org/images/Logos/GCB.png'
    },
    {
        "address": "TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6",
        "symbol": "NTC",
        "decimal": 6,
        'img': 'https://paraluni.org/images/Logos/NTC.png'
    },
    {
        "address": "TLS13tXPQSa7qry7RXC5EEZGTTTbbSmNWw",
        "symbol": "LUX",
        "decimal": 6,
        'img': 'https://paraluni.org/images/Logos/LUX.png',
        maxPercentage: 0.8,
        maxCanSellNum: 0,
        buyCommission: 0,
        serviceChargeList: [
            { percentage: 0, sell: 0 },
            { percentage: 0.1, sell: 0.15 },
            { percentage: 0.15, sell: 0.20 },
            { percentage: 0.2, sell: 0.25 },
            { percentage: 0.3, sell: 0.3 },
            { percentage: 0.4, sell: 0.35 },
        ],
    },
    {
        "address": "TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk",
        "symbol": "FS",
        "decimal": 8,
        'img': 'https://paraluni.org/images/Logos/FS.png'
    },
    {
        "address": "TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB",
        "symbol": "MST",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/MST.png'
    },
    {
        "address": "TWC4W76QYE8TXwWV99YZ96vQYx7GFNBHcb",
        "symbol": "NNC",
        "decimal": 6,
        'img': 'https://paraluni.org/images/Logos/NNC.png'
    },
    {
        "address": "TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW",
        "symbol": "STAR",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/STAR.png'
    },
    {
        "address": "TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w",
        "symbol": "DXM",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/DXM.png'
    },
    {
        "address": "TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ",
        "symbol": "FAMP",
        "decimal": 18,
        'img': 'https://paraluni.org/images/Logos/FAMP.png'
    },
    // {
    //     "address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
    //     "symbol": "USDT",
    //     "decimal": 6,
    //     'img':'https://paraluni.org/images/products/USDT@2x.png'
    // }
]

const HomeCarouselList = [
    // {img: url + '/Banners/V42SF——banner.png'},
    // {img: url + '/Banners/pledge_mining.png', url: ''},
    {img: url + '/Banners/paraluni_trade_banner.png', url: ''},
    // {img: url + '/Banners/banner-dayu.png'},
    // {img: url + '/Banners/V42_banner.png'},

    // {img: url + '/Banners/nnc-banner.png'},
    // {img: url + '/Banners/mst-banner.png'},
    // {img: url + '/Banners/fs-banner.png'},
    // {img: url + '/Banners/star_banner.png'},
    {img: url + '/Banners/tron-banner1.png'},

]
const FinanceCarouselList = [
    {img: url + '/Banners/V42SF—tron-banner.png'},
    {img: url + '/Banners/V42_banner_small.png'},
    {img: url + '/Banners/nnc-banner-small.png'},
    {img: url + '/Banners/mst-banner-small.png'},
    {img: url + '/Banners/fs-banner-small.png'},
    {img: url + '/Banners/star_banner_small.png'},
    {img: url + '/Banners/tron-banner2.png', url: ''},
]

const toastInfo = {
    isShow: false,
    text1: '平行宇宙固收基金（BSC链）重磅上线了！！！',
    text2: '',
    url: ''
}

module.exports = {HomeCarouselList, FinanceCarouselList, tokenList,toastInfo}
