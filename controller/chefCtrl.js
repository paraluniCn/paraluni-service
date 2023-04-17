const express = require('express');
const chefData = require('../data/chef');
let router = express.Router();

router.get('/list/:type', async function (req, res) {
    const {type} = req.params;
    let arr = chefData[type];
    res.status(200);
    res.json({
        status: 200,
        data: arr || [],
    });
})
router.get('/all', async function (req, res) {
    let data = {chef0: [...chefData.chef0], chef1: [...chefData.chef1], chef2: [...chefData.chef2]}
    for (let key in data) {
        if (data[key].length > 4) {
            data[key].length = 4;
        }
    }

    res.status(200);
    res.json({
        status: 200,
        data,
    });
})
router.get('/full', async function (req, res) {
    let data = {chef0: chefData.chef0, chef1: chefData.chef1, chef2: chefData.chef2}

    res.status(200);
    res.json({
        status: 200,
        data,
    });
})

router.get('/search', async function (req, res) {
    const {key} = req.query
    let arr = [];
    let data = {chef0: chefData.chef0, chef1: chefData.chef1, chef2: chefData.chef2}
    for (let i in data) {
        const itemList = data[i];
        if (itemList.length)
            for (let j = 0; j < itemList.length; j++) {
                if (itemList[j]?.symbol?.indexOf(key) !== -1) {
                    itemList[j].type = i;
                    itemList[j].index = j
                    arr.push(itemList[j])
                }
            }
    }
    res.status(200);
    res.json({
        status: 200,
        data: arr || [],
    });
})
router.get('/detail/:type/:index', async function (req, res) {
    const {type, index} = req.params;
    let arr = chefData[type];
    if (arr.length) {
        res.status(200);
        res.json({
            status: 200,
            data: arr[Number(index)] || {},
        });
    } else {
        res.status(503);
        res.json({
            status: 503,
            msg: 'parameter error'
        });
    }
})
module.exports = router;
