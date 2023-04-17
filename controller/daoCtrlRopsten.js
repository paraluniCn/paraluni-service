const express = require('express');
const daoData = require('../data/daoRopsten');
let router = express.Router();

router.get('/poolInfo', function (req, res) {
    res.status(200);
    let poolInfo = {
        status: 200,
        data: daoData.poolInfo
    };
    res.json(poolInfo);
});

router.get('/getPoolInfo/:pid', function (req, res) {
    const {pid}=req.params;
    let data={}
    Object.keys(daoData.daoList).map(key=>{
        if(data&&data.pid){
            return
        }
        daoData.daoList[key].map(item=>{
            if(data&&data.pid){
                return
            }
            if(item.pid==pid){
                data=item
            }
        })
    })
    res.status(200);
    let poolInfo = {
        status: 200,
        data: data
    };
    res.json(poolInfo);
});

router.get('/daoList', function (req, res) {
    res.status(200);
    let poolInfo = {
        status: 200,
        data: daoData.daoList
    };
    res.json(poolInfo);
});
module.exports = router;
