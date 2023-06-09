const url = 'https://static.paraluni.org/images'
const poolInfo = {
    '0xA573cD6890b50E02Dd658164882ee7B6A86C1122': //质押V42(old)赚取V42
    {
        symbol: 'V42(old)/V42',
        img: url + '/Logos/V42_OLD.png',
        'V42(old)': '0xA573cD6890b50E02Dd658164882ee7B6A86C1122'
    },
    '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888': //质押CF赚取V42
    {
        symbol: 'CF/V42',
        img: url + '/tinified/CF.png',
        CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
        v42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122'
    },
    '0x4C4D7C721d4889430f4AcEe4f2bfd2d67eD8c944': //CF-USDT LP池
    {
        symbol: 'CF/USDT',
        img: url + '/tinified/CF-USDT.png',
        CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
        USDT: '0x55d398326f99059ff775485246999027b3197955'
    },
    '0x25621C9B6529bA74E8E3C36bF1ff79552E976Af9': { //CF-USDT有质押功能的联合挖矿
        symbol: 'CF/USDT',
        img: url + '/tinified/CF-USDT-UNIT.png',
        CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
        chain: 'Pancake'
    },
    '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8': { //质押FA赚取V42
        symbol: 'FA/V42',
        img: url + '/tinified/FA.png',
        FA: '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8',
        V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    },
    '0xBDAB4d0a4a9C73A55d8C7856E6ED165f34286bC9': {  //FA-V42（old） LP池
        symbol: 'FA/V42(old)',
        img: url + '/tinified/FA-V42.png',
        FA: '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8',
        'V42(old)': '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    },
    '0x73aa37a9b83eA5a273D728D4aFe4A83e02CbBa17': {  //FA-USDT Lp池
        symbol: 'FA/USDT',
        img: url + '/tinified/FA-USDT.png',
        FA: '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
    },
    '0xeb6e66A6443CA69C0bB9B70d04cE418085D4048A': {             //FIL-V42 LP池                                    //FIL-V42 LP池
        symbol: 'FIL/V42(old)',
        img: url + '/tinified/FIL-V42-LP.png',
        FIL: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
        'V42(old)': '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    },
    '0x1d6215ca4692dd6491250b116831750dd0ecf656': {   //质押cgk赚v42 聚合池
        symbol: 'CGK/V42',
        img: 'https://chinggiskhaan.io/images/CGK.png',
        CGK: '0x1d6215ca4692dd6491250b116831750dd0ecf656',
        V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    },
    '0x89Da113f5185619cF1345aa2b1cE9c880E8B8A80': { //cgk-usdt lp池
        symbol: 'CGK/USDT',
        img: 'https://chinggiskhaan.io/images/CGK-USDT.png',
        CGK: '0x1d6215ca4692dd6491250b116831750dd0ecf656',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
    },
    '0x7482dC9D6c9238d424935A3e2617572Cc3083Ba4': { // v42-usdt底池
        symbol: "V42/USDT",
        img: url + '/Logos/V42-USDT.png',
        V42: '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
    },
    '0xC26A2BB245E0bceD2C2a2671391507fae3630846': { //质押tcp赚取v42 j聚合池
        symbol: 'TCP/V42',
        img: url + '/Logos/TCP.png',
        TCP: '0xC26A2BB245E0bceD2C2a2671391507fae3630846',
        V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    },
    '0x8d7028d0CCEdc725eBE60E146699b4139b3f7344': { //fil-usdt lp池
        symbol: 'FIL/USDT',
        img: url + '/Logos/FIL-USDT.png',
        FIL: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
    },
    '0x8Cfa40A29D054026378CBD2a077b687E68C64eB5': {   //xrk-wbnb lp池
        symbol: 'XRK/WBNB',
        img: url + '/Logos/XRK-WBNB.png',
        XRK: '0x600F437DD7d9bd431A4B5156655183f118d2640A',
        WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    '0x600F437DD7d9bd431A4B5156655183f118d2640A': {  //xrk 聚合池
        symbol: 'XRK/V42',
        img: url + '/Logos/XRK.png',
        XRK: '0x600F437DD7d9bd431A4B5156655183f118d2640A',
        V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    },
    '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25': {
        symbol: 'V42/V42',
        img: url + '/Logos/logo-yellow@2x.png',
        V42: '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25',
    },
    '0x23d1169b05F3dF1AcB12cd9a514af7f9df2d8510': {  //NL-USDT LP池
        symbol: 'NL/USDT',
        img: url + '/Logos/NL-USDT.png',
        NL: '0xf9fb823089f7178fc19be2bf1d811937bbf3f331',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
    },
    '0xf9fb823089f7178fc19be2bf1d811937bbf3f331': {
        symbol: 'NL/V42',
        img: url + '/Logos/NL.png',
        NL: '0xf9fb823089f7178fc19be2bf1d811937bbf3f331',
        V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    },
    '0xC5F9248B9BA7e3A3613677b4268F7F6155E17E05': {
        symbol: 'BTCB/USDT',
        img: url + '/Logos/BTCB-USDT.png',
        BTCB: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
    },
    '0xc21F3C89C8955E7f8Af5A5B26642dAaf8c494932': {
        symbol: 'QFD/CF',
        img: url + '/Logos/QFD-CF.png',
        QFD: '0x9fb934d49056120573b54A3d3148C36214A464a4',
        CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
    },
    '0x6c49Fd7785A8901593Df4c9605011fE20332301E': {
        symbol: 'QFD/CF',
        img: url + '/Logos/QFD-CF.png',
        QFD: '0x6C12dE1f85aA804955d235f3D05e216ae339D99A',
        CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
    },
    '0x3794ab6DF3AC91FC2277dd6dD31a563b3134Db44': {
        symbol: 'Aster/USDT',
        img: url + '/Logos/ASTER-USDT.png',
        Aster: '0x846b8F848bd3e55183E03DBc8170655947Cc3C2c',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
    },
    '0x55d398326f99059ff775485246999027b3197955': {
        symbol: 'USDT/V42',
        img: url + '/products/USDT@2x.png',
        USDT: '0x55d398326f99059ff775485246999027b3197955',
        V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
    }
}
/**
 *dao联盟业务列表
 */
const daoList = {
    aggregationList: [  //聚合池列表
        {
            type: 1,
            pid: 45,
            symbol: 'PUSD/V42',
            img: url + '/pusd/pusd.png',
            PUSD: '0x8EE943bab23C31de7164Ab8aB18a6eAa47f15478',
            name: 'PUSD/30',
        },
        {
            type: 1,
            pid: 30,
            symbol: 'V42/V42',
            img: url + '/Logos/logo-yellow@2x.png',
            V42: '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25',
            name: 'V42/60',
        },
        {
            type: 1,
            pid: 31,
            symbol: 'V42/V42',
            img: url + '/Logos/logo-yellow@2x.png',
            V42: '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25',
            name: 'V42/90',
        },
        {
            type: 1,
            pid: 0,
            symbol: 'CF/V42',
            img: url + '/tinified/CF.png',
            CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
            v42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'CF/90',
        },
        {
            type: 1,
            pid: 1,
            symbol: 'CF/V42',
            img: url + '/tinified/CF.png',
            CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
            v42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'CF/60',
        },
        {
            type: 1,
            pid: 2,
            symbol: 'V42(old)/V42',
            img: url + '/Logos/V42_OLD.png',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'V42(old)/90',
        },
        {
            type: 1,
            pid: 3,
            symbol: 'V42(old)/V42',
            img: url + '/Logos/V42_OLD.png',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'V42(old)/180',
        },
        {
            type: 1,
            pid: 11,
            symbol: 'FA/V42',
            img: url + '/tinified/FA.png',
            FA: '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'FA/60',
        },
        {
            type: 1,
            pid: 12,
            symbol: 'FA/V42',
            img: url + '/tinified/FA.png',
            FA: '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'FA/180',
        },
        {
            type: 1,
            pid: 19,
            symbol: 'CGK/V42',
            img: 'https://chinggiskhaan.io/images/CGK.png',
            CGK: '0x1d6215ca4692dd6491250b116831750dd0ecf656',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'CGK/60',
        },
        {
            type: 1,
            pid: 20,
            symbol: 'CGK/V42',
            img: 'https://chinggiskhaan.io/images/CGK.png',
            CGK: '0x1d6215ca4692dd6491250b116831750dd0ecf656',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'CGK/90',
        },
        {
            type: 1,
            pid: 23,
            symbol: 'TCP/V42',
            img: url + '/Logos/TCP.png',
            TCP: '0xC26A2BB245E0bceD2C2a2671391507fae3630846',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'TCP/60',
        },
        {
            type: 1,
            pid: 24,
            symbol: 'TCP/V42',
            img: url + '/Logos/TCP.png',
            TCP: '0xC26A2BB245E0bceD2C2a2671391507fae3630846',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'TCP/90',
        },
        {
            type: 1,
            pid: 27,
            symbol: 'XRK/V42',
            img: url + '/Logos/XRK.png',
            XRK: '0x600F437DD7d9bd431A4B5156655183f118d2640A',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'XRK/30',
        },
        {
            type: 1,
            pid: 28,
            symbol: 'XRK/V42',
            img: url + '/Logos/XRK.png',
            XRK: '0x600F437DD7d9bd431A4B5156655183f118d2640A',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'XRK/90',
        },
        {
            type: 1,
            pid: 29,
            symbol: 'XRK/V42',
            img: url + '/Logos/XRK.png',
            XRK: '0x600F437DD7d9bd431A4B5156655183f118d2640A',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'XRK/180',
        },
        {
            type: 1,
            pid: 33,
            symbol: 'NL/V42',
            img: url + '/Logos/NL.png',
            NL: '0xf9fb823089f7178fc19be2bf1d811937bbf3f331',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'NL/30',
        },
        {
            type: 1,
            pid: 34,
            symbol: 'NL/V42',
            img: url + '/Logos/NL.png',
            NL: '0xf9fb823089f7178fc19be2bf1d811937bbf3f331',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'NL/90',
        },
        {
            type: 1,
            pid: 35,
            symbol: 'NL/V42',
            img: url + '/Logos/NL.png',
            NL: '0xf9fb823089f7178fc19be2bf1d811937bbf3f331',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'NL/180',
        },
        {
            type: 1,
            pid: 41,
            symbol: 'USDT/V42',
            img: url + '/products/USDT@2x.png',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'USDT/180',
        },
        {
            type: 1,
            pid: 42,
            symbol: 'USDT/V42',
            img: url + '/products/USDT@2x.png',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
            V42: '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
            name: 'USDT/360',
        },
        {
            type: 1,
            pid: 43,
            symbol: 'V42/V42',
            img: url + '/Logos/logo-yellow@2x.png',
            V42: '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25',
            name: 'V42/7',
        },
        {
            type: 1,
            pid: 44,
            symbol: 'V42/V42',
            img: url + '/Logos/logo-yellow@2x.png',
            V42: '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25',
            name: 'V42/14',
        },

    ],
    lpList: [   //LP池列表
        {
            type: 3,
            pid: 22,
            symbol: "V42/USDT",
            img: url + '/Logos/V42-USDT.png',
            V42: '0xBb87F2a37cf805E3755Cb1e7DA41140589190e25',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        },
        {
            type: 3,
            pid: 46,
            symbol: "V42/PUSD",
            img: url + '/tinified/V42-PUSD.png',
            V42: "0xBb87F2a37cf805E3755Cb1e7DA41140589190e25",
            PUSD: "0x8EE943bab23C31de7164Ab8aB18a6eAa47f15478",
        },
        {
            type: 3,
            pid: 36,
            symbol: 'BTCB/USDT',
            img: url + '/Logos/BTCB-USDT.png',
            BTCB: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        },
        {
            type: 3,
            pid: 4,
            symbol: 'CF/USDT',
            img: url + '/tinified/CF-USDT.png',
            CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        },
        {
            type: 3,
            pid: 13,
            symbol: 'FA/V42(old)',
            img: url + '/tinified/FA-V42.png',
            FA: '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8',
            'V42(old)': '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
        },
        {
            type: 3,
            pid: 14,
            symbol: 'FA/USDT',
            img: url + '/tinified/FA-USDT.png',
            FA: '0x5Ad04Ad0fDB383fe0e939690D8ce9fCbBE0E3CA8',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        },
        {
            type: 3,
            pid: 18,
            symbol: 'FIL/V42(old)',
            img: url + '/tinified/FIL-V42-LP.png',
            FIL: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
            'V42(old)': '0xA573cD6890b50E02Dd658164882ee7B6A86C1122',
        },
        {
            type: 3,
            pid: 21,
            symbol: 'CGK/USDT',
            img: 'https://chinggiskhaan.io/images/CGK-USDT.png',
            CGK: '0x1d6215ca4692dd6491250b116831750dd0ecf656',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        },
        {
            type: 3,
            pid: 25,
            symbol: 'FIL/USDT',
            img: url + '/Logos/FIL-USDT.png',
            FIL: '0x0D8Ce2A99Bb6e3B7Db580eD848240e4a0F9aE153',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        },
        {
            type: 3,
            pid: 26,
            symbol: 'XRK/WBNB',
            img: url + '/Logos/XRK-WBNB.png',
            XRK: '0x600F437DD7d9bd431A4B5156655183f118d2640A',
            WBNB: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
        },
        {
            type: 3,
            pid: 32,
            symbol: 'NL/USDT',
            img: url + '/Logos/NL-USDT.png',
            NL: '0xf9fb823089f7178fc19be2bf1d811937bbf3f331',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        },
        {
            type: 3,
            pid: 38,
            symbol: 'QFD/CF',
            img: url + '/Logos/QFD-CF.png',
            QFD: '0x6C12dE1f85aA804955d235f3D05e216ae339D99A',
            CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
        },
        {
            type: 3,
            pid: 40,
            symbol: 'Aster/USDT',
            img: url + '/Logos/ASTER-USDT.png',
            Aster: '0x846b8F848bd3e55183E03DBc8170655947Cc3C2c',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
        }
    ],
    unitMiningList: [  //联合挖矿池子列表
        {
            type: 5,
            pid: 6,
            symbol: 'CF/USDT',
            img: url + '/tinified/CF-USDT-UNIT.png',
            CF: '0xFdc7a089CD7463dd6be155A7f3f21CF10338B888',
            USDT: '0x55d398326f99059ff775485246999027b3197955',
            chain: 'Pancake'
        }
    ]
}
module.exports = {
    poolInfo,
    daoList,
}
