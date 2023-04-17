const web3Node = require("./web3.js");
const express = require('express');
const bodyParser = require('body-parser')
const chefCtrl = require('./controller/chefCtrl')
const tokenCtrl = require('./controller/tokenCtrl')
const chefV2Ctrl = require('./controller/chefV2Ctrl')
const tokenV2Ctrl = require('./controller/tokenV2Ctrl')
const chefCtrlRopsten = require('./controller/chefCtrlRopsten')
const tokenCtrlRopsten = require('./controller/tokenCtrlRopsten')
const daoCtrlRopsten = require('./controller/daoCtrlRopsten')
const daoCtrlV42 = require('./controller/daoCtrlV42')
const daoCtrlShasta=require('./controller/daoCtrlShasta')
const daoCtrlTron=require('./controller/daoCtrlTron')
const tokenTronCtrl=require('./controller/tokenTronCtrl')
const tokenShastaCtrl=require("./controller/tokenShastaCtrl")
const app = express();
const path = require('path');
const port = {
    development: '8890',
    production: '8891'
}[process.env.NODE_ENV]

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))//extended为false表示使用querystring来解析数据，这是URL-encoded解析器
// parse application/json
app.use(bodyParser.json())
app.use('/images', express.static(path.join(__dirname, 'images')))

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.use('/chef', chefCtrl);
app.use('/token', tokenCtrl);
app.use('/chefV2', chefV2Ctrl);
app.use('/tokenV2', tokenV2Ctrl);
app.use('/tokenTron',tokenTronCtrl)
app.use('/tokenShasta',tokenShastaCtrl)
app.use('/cheftest', chefCtrlRopsten);
app.use('/tokentest', tokenCtrlRopsten);
app.use('/chefDaoTest', daoCtrlRopsten);
app.use('/chefDaoV2', daoCtrlV42);
app.use('/chefDaoShasta',daoCtrlShasta)
app.use('/chefDaoTron',daoCtrlTron)
//配置服务端口
let server = app.listen(8891, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('Example app listening at http://localhost', host, port);
})

