const url = 'https://paraluni.org/images'
const poolInfo = {
    "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9": {
        symbol: "USDT/V42",
        img: "https://paraluni.org/images/products/USDT@2x.png",
        USDT: "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        V42: "0xE5a678BCd1d625D9723A0f274daFFE225AD0b81c",

    },
    "0x7aba68b4142D782a2A409fC9EcBe8D237C94178D": {
        symbol: "V42/USDT",
        img: "https://paraluni.org/images/Logos/V42-USDT.png",
        USDT: "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        V42: "0xE5a678BCd1d625D9723A0f274daFFE225AD0b81c",

    },
    '0x51B6Aa33DdFfb357343993c67452e807a5B2736C':  {
        symbol: "LS/USDT",
        img: "https://paraluni.org/images/Logos/LS-USDT.png",
        LS: "0x2A49331d6EA02ec23Ed229d252772874CB89c9c7",
        USDT: "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
    }
}

/**
 *dao联盟业务列表
 */
const daoList={
    aggregationList:[  //聚合池列表
        {
            type: 1,
            pid: 1,
            symbol: "USDT/V42",
            img: "https://paraluni.org/images/products/USDT@2x.png",
            USDT: "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
            V42: "0xE5a678BCd1d625D9723A0f274daFFE225AD0b81c",
            name: "USDT/180"
        },
    ],
    lpList:[   //LP池列表
        {
            type: 3,
            pid: 2,
            symbol: "V42/USDT",
            img: "https://paraluni.org/images/Logos/V42-USDT.png",
            V42: "0xE5a678BCd1d625D9723A0f274daFFE225AD0b81c",
            USDT: "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        },
        {
            type: 3,
            pid: 10,
            symbol: "LS/USDT",
            img: "https://paraluni.org/images/Logos/LS-USDT.png",
            LS: "0x2A49331d6EA02ec23Ed229d252772874CB89c9c7",
            USDT: "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        },
        {
            type: 3,
            pid: 12,
            symbol: "V42/PUSD",
            img: url + '/tinified/PUSD-USDT.png',
            V42: "0xE5a678BCd1d625D9723A0f274daFFE225AD0b81c",
            PUSD: "0xa41D3321dCe39a0E20E07e2F9C368B1EBF0bA39f",
        }
    ],
}

module.exports = {
    poolInfo,
    daoList,
}
