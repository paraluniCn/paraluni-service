// const url = 'https://test.paraluni.org/images';
// const url = 'http://localhost:8890/images';
const url = 'https://static.paraluni.org/images';
const chef0 = [
    {
        "pid": 0,
        "token": "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        "symbol": "青铜",
        decimal: 18,
        "ticket_address": "0xF75C284e027b3e62b5314B213d64e90183c0B1f2",
        "ticket_level": "0",
        profitName: 'APR',
        img: url + '/tinified/bronze.png'
    },
]
const chef1 = [
    {
        "pid": 2,
        "token": "0x86fCd4fb21D17D77a054C0aE69faB1F2fE41697E",
        "symbol": "ETH/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/ETH-BUSD.png'
    },
    {
        "pid": 3,
        "token": "0xad30bad7a6f660a78c9b58a8dba8cb7213c2f8a9",
        "symbol": "USDT",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/products/USDT@2x.png',
    },
]

const chef2 = [
    {
        "pid": 1,
        "token": "0x482b3f5287378be4fa07fC23655a90487d98E3Ab",
        "symbol": "USDT/BUSD",
        "decimal": 18,
        profitName: 'APR',
        img: url + '/tinified/USDT-BUSD.png'
    },
    {
        "pid": 4,
        "token": "0xD6554918caaB4bc2855Fc6817622579148f0bd31",
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
