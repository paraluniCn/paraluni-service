const express = require('express');
const tokenData = require('../data/tokenV2');

let router = express.Router();
router.get('/List', function (req, res) {

    res.status(200);
    let tokenList = {
        status: 200,
        data: tokenData.tokenList
    };
    res.json(tokenList);
});

router.get('/ListNew', function (req, res) {

    res.status(200);
    let tokenList = {
        status: 200,
        data: tokenData.tokenListNew
    };
    res.json(tokenList);
});


router.get('/carouselListHome',function (req,res){
    res.status(200);
    let carouselList = {
        status: 200,
        data: tokenData.HomeCarouselList
    };
    res.json(carouselList);
})

router.get('/carouselListFin',function (req,res){
    res.status(200);
    let carouselList = {
        status: 200,
        data: tokenData.FinanceCarouselList
    };
    res.json(carouselList);
})

router.get('/toastInfo',function (req,res){
    res.status(200);
    let info = {
        status: 200,
        data: tokenData.toastInfo
    };
    res.json(info);
})

module.exports = router;
