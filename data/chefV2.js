// const url = 'https://test.paraluni.org/images';
// const url = 'http://localhost:8890/images';
const url = 'https://paraluni.org/images';
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
        "pid": 12,
        "token": "0xb56b17EE822c64E3E99d3d4946a182Ed18A41D1B",
        "symbol": "WBNB/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/BNB-BUSD.png'
    },
    {
        "pid": 14,
        "token": "0x1046D331D82b8281F82282808254a0A835c59A48",
        "symbol": "BTCB/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/BTCB-BUSD.png'
    },
    {
        "pid": 15,
        "token": "0xfA0f2D55067C2b6E7e6153ab28Cb4E6d7Ac6c370",
        "symbol": "ETH/WBNB",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/ETH-BNB.png'
    },
    {
        "pid": 13,
        "token": "0xa694CeD898AF6Cc581feECeF79dE855008D65f26",
        "symbol": "ETH/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/ETH-BUSD.png'
    },

    {
        "pid": 9,
        "token": "0xa4d3aE798a415fA9b25Af902659d814F46B2269A",
        "symbol": "BSW/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/BSW-BUSD.png'
    },
    {
        "pid": 10,
        "token": "0x3f9c46bc53B75206B82f7Bbc5C65C70629bA146F",
        "symbol": "CAKE/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/CAKE-BUSD.png'
    },
    {
        "pid": 11,
        "token": "0x6b0f9A844D21213D5144883f2103699B461d3C11",
        "symbol": "LINK/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/LINK-BUSD.png'
    },
    {
        "pid": 16,
        "token": "0xadde723E08fe79C5966F1B267782CC1236804e70",
        "symbol": "BTCB/WBNB",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/BTCB-BNB.png'
    },
    {
        "pid": 17,
        "token": "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
        "symbol": "WBNB",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/BNB.png'
    },
    {
        "pid": 18,
        "token": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        "symbol": "ETH",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/ETH.png'
    },
    {
        "pid": 19,
        "token": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        "symbol": "BTCB",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/BTCB.png'
    },
    {
        "pid": 6,
        "token": "0xdbbDF41929d65c974C13c979A87B235377897DF9",
        "symbol": "V42(old)/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/products/PUC-BUSD@2x.png'
    },
    {
        "pid": 7,
        "token": "0x7Bdc1963CA77f22C0c4829182876EBB2478e6380",
        "symbol": "V42(old)/BTCB",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/V42-BTCB.png'
    },
    {
        "pid": 8,
        "token": "0x478d1721f6FA74124C281CB17744249F51D55BC5",
        "symbol": "V42(old)/WBNB",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/V42-BNB.png'
    },
    {
        "pid": 20,
        "token": "0x55d398326f99059ff775485246999027b3197955",
        "symbol": "USDT",
        "decimal": 18,
        profitName: 'APR',
        img: 'https://paraluni.org/images/products/USDT@2x.png'
    },
]

const chef2 = [
    {
        "pid": 5,
        "token": "0xEF7ae734a1E522498DF44d68853E9329674d51D5",
        "symbol": "USDT/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/USDT-BUSD.png'
    },
    {
        "pid": 21,
        "token": "0x52EE3b54F30D3263E0ec0572916d186235382e8A",
        "symbol": "PUSD/USDT",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/PUSD-USDT.png'
    }
]
module.exports = {
    chef0,
    chef1,
    chef2,
}
