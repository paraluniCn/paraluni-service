const tokenList = [
    {
        "address": "TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk",
        "symbol": "TRX",
        "decimal": 6,
        'img': 'https://static.paraluni.org/images/Logos/WTRX.png'
    },
    {
        "address": "TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk",
        "symbol": "WTRX",
        "decimal": 18,
        'img': 'https://static.paraluni.org/images/Logos/WTRX.png'
    },
    {
        "address": "TQQsGLYnakrmepDXqy4Mo1dpN16yL7rRs4",
        "symbol": "DHC",
        "decimal": 6,
        'img': 'https://static.paraluni.org/images/products/BUSD@2x.png'
    },
    {
        "address": "TMrjv1LMXgEUeBYa1yXyg2pAwLLPABfULy",
        "symbol": "LUX",
        "decimal": 6,
        'img': 'https://static.paraluni.org/images/Logos/LUX.png'
    },
    {
        "address": "TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U",
        "symbol": "V42",
        "decimal": 18,
        'img': 'https://static.paraluni.org/images/Logos/logo-yellow@2x.png'
    }
]


const url = 'https://static.paraluni.org/images';
const HomeCarouselList = [
    { img: url + '/Banners/tron-banner1.png', openNewWindow: false },
    { img: url + '/Banners/HomeSwiperBg2.png', url: '' },
]
const FinanceCarouselList = [
    { img: url + '/Banners/tron-banner2.png', url: '' },
    { img: url + '/Banners/HomeSwiperBg8.png', url: '' },

]

const toastInfo = {
    isShow: true,
    text1: '本周四晚八点平行宇宙空课：平行宇宙固收基金双链齐发',
    text2: '点击预约',
    url: 'https://meeting.tencent.com/dm/Py8KdeapwRwt'
}

module.exports = { HomeCarouselList, FinanceCarouselList, tokenList, toastInfo }
