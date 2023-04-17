const express = require('express');
const tokenData = require('../data/token');

let router = express.Router();
router.get('/List', function (req, res) {

    res.status(200);
    let tokenList = {
        status: 200,
        data: tokenData.tokenList
    };
    res.json(tokenList);
});


router.get('/lp', function (req, res) {
    res.status(200);
    let lpList = {
        status: 200,
        data: tokenData.lpList
    };
    res.json(lpList);
});
router.get('/tokenToLp', function (req, res) {
    res.status(200);
    let lpList = {
        status: 200,
        data: tokenData.tokensLp
    };
    res.json(lpList);
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

module.exports = router;
