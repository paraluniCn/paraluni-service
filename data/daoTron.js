const url = 'https://paraluni.org/images'
const poolInfo = {
    'TNx4eA17QANL3prrypCzunyTcekaPjdvvS': //DHC 聚合池
        {
            symbol: 'DHC/V42',
            img: url + '/Logos/DHC-V42.png',
            DHC: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
        },
    'TZJbtEjXVrWKfsCC8iLok46WZWBNE73qCp': {   //WTRX/DHC LP池
        symbol: 'DHC/WTRX',
        img: url + '/Logos/WTRX-DHC.png',
        DHC: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'DHC/TRX'
    },
    'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb': {   //GCB聚合池
        symbol: 'GCB/V42',
        img: url + '/Logos/GCB.png',
        GCB: 'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TTKXUrCPYQuBsREBZAgEF2h6BTY8539JaT': {  //GCB/TRX LP池
        symbol: 'GCB/WTRX',
        img: url + '/Logos/GCB-TRX.png',
        GCB: 'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'GCB/TRX'
    },
    'TP5hCa2nHiW96a73NAKN2RpHjd9DyhWGfj': {  //NTC/TRX  LP池
        symbol: 'NTC/WTRX',
        img: url + '/Logos/NTC-TRX.png',
        NTC: 'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'NTC/TRX'
    },
    'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6': {   //NTC 聚合池
        symbol: 'NTC/V42',
        img: url + '/Logos/NTC.png',
        NTC: 'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TBysnj3N12tLuxQY8pjbKA5wd6fR3BjjA9': {                 //LUX LP池                        //lux-trx lp池
        symbol: 'LUX/WTRX',
        img: url + '/Logos/LUX-TRX.png',
        LUX: 'TLS13tXPQSa7qry7RXC5EEZGTTTbbSmNWw',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'LUX/TRX'
    },
    'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk': {   //FS聚合池
        symbol: 'FS/V42',
        img: url + '/Logos/FS.png',
        FS: 'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TM15QoGQHNRXqTAe12PWKXMNcwoJxJvp5Y': {  // FS LP池
        symbol: 'FS/WTRX',
        img: url + '/Logos/FS-TRX.png',
        FS: 'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'FS/TRX'
    },
    'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB': {  //MST聚合池
        symbol: 'MST/V42',
        img: url + '/Logos/MST.png',
        MST: 'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TMMB9yhKGE7TsNHpbg7KgcJeCKysEj9Abn': {   // MST LP池
        symbol: 'MST/WTRX',
        img: url + '/Logos/MST-TRX.png',
        MST: 'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'MST/TRX'
    },
    'TNnYHjnzt49QhLu47TQjmEF8KrgsbnUDUz': {   //NNC LP池
        symbol: 'NNC/WTRX',
        img: url + '/Logos/NNC-TRX.png',
        NNC: 'TWC4W76QYE8TXwWV99YZ96vQYx7GFNBHcb',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'NNC/TRX'
    },
    'TNa11Z8VrVDC6HXi2h49oNpGhDCzsMf1KK': {  // NNC 质押联合挖矿池
        symbol: 'NNC/TRX',
        img: url + '/Logos/NNC-TRX.png',
        NNC: 'TWC4W76QYE8TXwWV99YZ96vQYx7GFNBHcb',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        chain: 'Sunswap'
    },
    'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW': {  //star 聚合池
        symbol: 'STAR/V42',
        img: url + '/Logos/STAR.png',
        STAR: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TFkZSC5x8jkzMyfSWRWTVVggQugAhMqj7u': { // star lp池
        symbol: 'STAR/WTRX',
        img: url + '/Logos/STAR-TRX.png',
        STAR: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'STAR/TRX'
    },
    'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w': {  //dxm聚合池
        symbol: 'DXM/V42',
        img: url + '/Logos/DXM.png',
        DXM: 'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TF8KTpMdQYHdDQ7jL8qhBHPgF5psU6dYQk': {  //dxm LP池
        symbol: 'DXM/WTRX',
        img: url + '/Logos/DXM-TRX.png',
        DXM: 'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'DXM/TRX'
    },
    'TAhpDxdrUAfk56S88CQ38cHRUxneFPKDHa': {   //盲盒60天聚合池
        symbol: 'SAVAGEBOX/V42',
        img: url + '/Logos/SAVAGEBOX.png',
        SAVAGEBOX: 'TAhpDxdrUAfk56S88CQ38cHRUxneFPKDHa',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TSaQzATU59LFNma8SKKHLBHaxkgCNi9vrD': {  //FAMP-TRX LP池
        symbol: 'FAMP/WTRX',
        img: url + '/Logos/FAMP-TRX.png',
        FAMP: 'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'FAMP/TRX'
    },
    'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ': {  //FAMP聚合池
        symbol: 'FAMP/V42',
        img: url + '/Logos/FAMP.png',
        FAMP: 'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ',
        V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
    },
    'TKgPc7WHSjPpBHFGY5Wx9ZyMf3MVSLVpGq':{  //底池 V42-WTRX
        symbol: 'V42/WTRX',
        img: url + '/Logos/V42-TRX.png',
        V42: 'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1',
        WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        name: 'V42/WTRX'
    },
    // 'TVkCPuxkS61CTpiEBCWdkZs2DT6vwVT7xh':{  //USDT/TRX LP池
    //     symbol: 'USDT/WTRX',
    //     img: url + '/Logos/USDT-TRX.png',
    //     USDT: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    //     WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
    //     token: 'TVkCPuxkS61CTpiEBCWdkZs2DT6vwVT7xh',
    //     name: 'USDT/TRX'
    // },
    'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1':{ //V42聚合池
        symbol: 'V42/V42',
        img:url+'/Logos/logo-yellow@2x.png',
        V42: 'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1',
    }
}
/**
 *dao联盟业务列表
 */
const daoList = {
    aggregationList: [
        {
            type: 1,
            pid:38,
            symbol: 'V42/V42',
            img:url+'/Logos/logo-yellow@2x.png',
            V42: 'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1',
            token: 'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1',
            name: '质押V42 60天 赚取V42',
        },
        {
            type: 1,
            pid:39,
            symbol: 'V42/V42',
            img:url+'/Logos/logo-yellow@2x.png',
            V42: 'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1',
            token: 'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1',
            name: '质押V42 90天 赚取V42',
        },
        {
            type: 1,
            pid: 3,
            symbol: 'DHC/V42',
            img: url + '/Logos/DHC-V42.png',
            DHC: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            name: '质押DHC 60天 赚取V42',
        },
        {
            type: 1,
            pid: 4,
            symbol: 'DHC/V42',
            img: url + '/Logos/DHC-V42.png',
            DHC: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            name: '质押DHC 90天 赚取V42',
        },
        {
            type: 1,
            pid: 5,
            symbol: 'DHC/V42',
            img: url + '/Logos/DHC-V42.png',
            DHC: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            name: '质押DHC 180天 赚取V42',
        },
        {
            type: 1,
            pid: 7,
            symbol: 'GCB/V42',
            img: url + '/Logos/GCB.png',
            GCB: 'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb',
            name: '质押GCB 60天 赚取V42',
        },
        {
            type: 1,
            pid: 8,
            symbol: 'GCB/V42',
            img: url + '/Logos/GCB.png',
            GCB: 'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb',
            name: '质押GCB 90天 赚取V42',
        },
        {
            type: 1,
            pid: 10,
            symbol: 'NTC/V42',
            img: url + '/Logos/NTC.png',
            NTC: 'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6',
            name: '质押NTC 60天 赚取V42',
        },
        {
            type: 1,
            pid: 11,
            symbol: 'NTC/V42',
            img: url + '/Logos/NTC.png',
            NTC: 'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6',
            name: '质押NTC 90天 赚取V42',
        },
        {
            type: 1,
            pid: 15,
            symbol: 'FS/V42',
            img: url + '/Logos/FS.png',
            FS: 'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk',
            name: '质押FS 60天 赚取V42',
        },
        {
            type: 1,
            pid: 16,
            symbol: 'FS/V42',
            img: url + '/Logos/FS.png',
            FS: 'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk',
            name: '质押FS 90天 赚取V42',
        },
        {
            type: 1,
            pid: 18,
            symbol: 'MST/V42',
            img: url + '/Logos/MST.png',
            MST: 'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB',
            name: '质押MST 90天 赚取V42',
        },
        {
            type: 1,
            pid: 19,
            symbol: 'MST/V42',
            img: url + '/Logos/MST.png',
            MST: 'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB',
            name: '质押MST 180天 赚取V42',
        },
        {
            type: 1,
            pid: 23,
            symbol: 'STAR/V42',
            img: url + '/Logos/STAR.png',
            STAR: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
            name: '质押STAR 30天 赚取V42',
        },
        {
            type: 1,
            pid: 24,
            symbol: 'STAR/V42',
            img: url + '/Logos/STAR.png',
            STAR: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
            name: '质押STAR 60天 赚取V42',
        },
        {
            type: 1,
            pid: 28,
            symbol: 'STAR/V42',
            img: url + '/Logos/STAR.png',
            STAR: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
            name: '质押STAR 90天 赚取V42',
        },
        {
            type: 1,
            pid: 26,
            symbol: 'DXM/V42',
            img: url + '/Logos/DXM.png',
            DXM: 'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w',
            name: '质押DXM 60天 赚取V42',
        },
        {
            type: 1,
            pid: 27,
            symbol: 'DXM/V42',
            img: url + '/Logos/DXM.png',
            DXM: 'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w',
            name: '质押DXM 180天 赚取V42',
        },
        {
            type: 1,
            pid: 31,
            symbol: 'SAVAGEBOX/V42',
            img: url + '/Logos/SAVAGEBOX.png',
            SAVAGEBOX: 'TAhpDxdrUAfk56S88CQ38cHRUxneFPKDHa',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TAhpDxdrUAfk56S88CQ38cHRUxneFPKDHa',
            name: '质押SAVAGEBOX 60天 赚取V42',
        },
        {
            type: 1,
            pid: 33,
            symbol: 'FAMP/V42',
            img: url + '/Logos/FAMP.png',
            FAMP: 'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ',
            name: '质押FAMP 60天 赚取V42',
        },
        {
            type: 1,
            pid: 34,
            symbol: 'FAMP/V42',
            img: url + '/Logos/FAMP.png',
            FAMP: 'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ',
            V42: 'TFqiPzeXDZeyDjLm6zAzwPSZaSx2FPmxuT',
            token: 'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ',
            name: '质押FAMP 90天 赚取V42',
        },

    ], //聚合池列表
    lpList: [   //LP池列表
        {
            type: 3,
            pid: 35,
            symbol: 'V42/WTRX',
            img: url + '/Logos/V42-TRX.png',
            V42: 'TP9kyEaTJJz7YZtyyTHpcnKwM4pMQMTHx1',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TKgPc7WHSjPpBHFGY5Wx9ZyMf3MVSLVpGq',
            name: 'V42/WTRX'
        },
        // {
        //     type: 3,
        //     pid: 37,
        //     symbol: 'USDT/WTRX',
        //     img: url + '/Logos/USDT-TRX.png',
        //     USDT: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
        //     WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
        //     token: 'TVkCPuxkS61CTpiEBCWdkZs2DT6vwVT7xh',
        //     name: 'USDT/TRX'
        // },
        {
            type: 3,
            pid: 2,
            symbol: 'DHC/WTRX',
            img: url + '/Logos/WTRX-DHC.png',
            DHC: 'TNx4eA17QANL3prrypCzunyTcekaPjdvvS',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TZJbtEjXVrWKfsCC8iLok46WZWBNE73qCp',
            name: 'DHC/TRX'
        },
        {
            type: 3,
            pid: 6,
            symbol: 'GCB/WTRX',
            img: url + '/Logos/GCB-TRX.png',
            GCB: 'TF8UNE1yVpk67mCe3ot5acJkKG8B2MDmWb',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TTKXUrCPYQuBsREBZAgEF2h6BTY8539JaT',
            name: 'GCB/TRX'
        },
        {
            type: 3,
            pid: 9,
            symbol: 'NTC/WTRX',
            img: url + '/Logos/NTC-TRX.png',
            NTC: 'TLDJtK6Cus4UXaEXW5d8HFG8LyxWrNhsq6',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TP5hCa2nHiW96a73NAKN2RpHjd9DyhWGfj',
            name: 'NTC/TRX'
        },
        {
            type: 3,
            pid: 13,
            symbol: 'LUX/WTRX',
            img: url + '/Logos/LUX-TRX.png',
            LUX: 'TLS13tXPQSa7qry7RXC5EEZGTTTbbSmNWw',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TBysnj3N12tLuxQY8pjbKA5wd6fR3BjjA9',
            name: 'LUX/TRX'
        },
        {
            type: 3,
            pid: 14,
            symbol: 'FS/WTRX',
            img: url + '/Logos/FS-TRX.png',
            FS: 'TRaH6Q1XRXetdpQfctmGMKGwyq7iV3zppk',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TM15QoGQHNRXqTAe12PWKXMNcwoJxJvp5Y',
            name: 'FS/TRX'
        },
        {
            type: 3,
            pid: 17,
            symbol: 'MST/WTRX',
            img: url + '/Logos/MST-TRX.png',
            MST: 'TRcjyxJpGRsaQtWNecG1QLNwRzyqoce4UB',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TMMB9yhKGE7TsNHpbg7KgcJeCKysEj9Abn',
            name: 'MST/TRX'
        },
        {
            type: 3,
            pid: 20,
            symbol: 'NNC/WTRX',
            img: url + '/Logos/NNC-TRX.png',
            NNC: 'TWC4W76QYE8TXwWV99YZ96vQYx7GFNBHcb',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TNnYHjnzt49QhLu47TQjmEF8KrgsbnUDUz',
            name: 'NNC/TRX'
        },
        {
            type: 3,
            pid: 22,
            symbol: 'STAR/WTRX',
            img: url + '/Logos/STAR-TRX.png',
            STAR: 'TA74PoX3vgpZfghFJDB3sog7mfYRkjWQwW',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TFkZSC5x8jkzMyfSWRWTVVggQugAhMqj7u',
            name: 'STAR/TRX'
        },
        {
            type: 3,
            pid: 25,
            symbol: 'DXM/WTRX',
            img: url + '/Logos/DXM-TRX.png',
            DXM: 'TEoPMYFa5zPP1SayeXkAqZSAmf7VkqNv2w',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TF8KTpMdQYHdDQ7jL8qhBHPgF5psU6dYQk',
            name: 'DXM/TRX'
        },
        {
            type: 3,
            pid: 32,
            symbol: 'FAMP/WTRX',
            img: url + '/Logos/FAMP-TRX.png',
            FAMP: 'TPQTCJSQs1ukGTZnAt6oEEF3zPv91F96PQ',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TSaQzATU59LFNma8SKKHLBHaxkgCNi9vrD',
            name: 'FAMP/TRX'
        },

    ],
    unitMiningList: [
        {
            type: 5,
            pid: 21,
            symbol: 'NNC/TRX',
            img: url + '/Logos/NNC-TRX.png',
            NNC: 'TWC4W76QYE8TXwWV99YZ96vQYx7GFNBHcb',
            WTRX: 'TNUC9Qb1rRpS5CbWLmNMxXBjyFoydXjWFR',
            token: 'TNnYHjnzt49QhLu47TQjmEF8KrgsbnUDUz',
            chain: 'Sunswap'
        }
    ] //联合挖矿池子列表
}
module.exports = {
    poolInfo,
    daoList,
}
