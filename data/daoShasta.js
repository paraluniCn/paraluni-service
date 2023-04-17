const url = 'https://static.paraluni.org/images'
const poolInfo = {
    'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U': //聚合池
    {
        symbol: 'V42/V42',
        img: url + '/Logos/logo-yellow@2x.png',
        v42: 'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U',
    },
    'TBa4moDg6ZAT6h9vWdM7iLTkDNty4ndFN5': {   //WTRX/DHC LP池
        symbol: 'DHC/WTRX',
        img: url + '/Logos/DHC-TRX.png',
        DHC: 'TQQsGLYnakrmepDXqy4Mo1dpN16yL7rRs4',
        WTRX: 'TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk',
        name: 'DHC/TRX'
    },
    'TLFyM7vT8cTxZpcJJLRefTqKyVwuv1zPeA': {                                      //lux-trx lp池
        symbol: 'LUX/WTRX',
        img: url + '/Logos/LUX-TRX.png',
        LUX: 'TMrjv1LMXgEUeBYa1yXyg2pAwLLPABfULy',
        WTRX: 'TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk',
        name: 'LUX/TRX'
    },
    'TD4ew9oBaAFyzLjGtKWDjZWdJvqhL43AX9': {   //v42-trx底池
        symbol: 'V42/WTRX',
        img: url + '/Logos/V42-TRX.png',
        WTRX: 'TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk',
        V42: 'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U',
        name: 'V42/TRX'
    },
}
/**
 *dao联盟业务列表
 */
const daoList = {
    aggregationList: [
        {
            type: 1,
            pid: 8,
            symbol: 'V42/V42',
            img: url + '/Logos/logo-yellow@2x.png',
            v42: 'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U',
            token: 'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U',
            name: '质押V42 10分钟 赚取V42',
        },
        {
            type: 1,
            pid: 9,
            symbol: 'V42/V42',
            img: url + '/Logos/logo-yellow@2x.png',
            v42: 'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U',
            token: 'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U',
            name: '质押V42 30分钟 赚取V42',
        },
    ], //聚合池列表
    lpList: [   //LP池列表
        {
            type: 3,
            pid: 5,
            symbol: 'V42/WTRX',
            img: url + '/Logos/V42-TRX.png',
            WTRX: 'TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk',
            V42: 'TGEUiJqmZwpsQsQThp6c4BxxZRfqhNNG6U',
            token: 'TD4ew9oBaAFyzLjGtKWDjZWdJvqhL43AX9',
            name: 'V42/TRX'
        },
        {
            type: 3,
            pid: 6,
            symbol: 'DHC/WTRX',
            img: url + '/Logos/DHC-TRX.png',
            DHC: 'TQQsGLYnakrmepDXqy4Mo1dpN16yL7rRs4',
            WTRX: 'TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk',
            token: 'TBa4moDg6ZAT6h9vWdM7iLTkDNty4ndFN5',
            name: 'DHC/TRX'
        }, {
            type: 3,
            pid: 7,
            symbol: 'LUX/WTRX',
            img: url + '/Logos/LUX-TRX.png',
            LUX: 'TMrjv1LMXgEUeBYa1yXyg2pAwLLPABfULy',
            WTRX: 'TT4Svwu4BPXEviWqLYkyK6cDmNvzMcjCRk',
            token: 'TLFyM7vT8cTxZpcJJLRefTqKyVwuv1zPeA',
            name: 'LUX/TRX'
        }
    ],
    unitMiningList: [


    ] //联合挖矿池子列表
}
module.exports = {
    poolInfo,
    daoList,
}
