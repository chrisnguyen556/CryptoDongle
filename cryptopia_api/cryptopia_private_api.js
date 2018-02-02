/**
 * User: Lance
 * Date: 1/29/18
 */
'use strict';

var request = require('request');
var util = require('util');
const crypto = require('crypto');

var base_URL = "https://www.cryptopia.co.nz/api/";

//build the JSON object
var private_options = {
    url: base_URL,
    method: "POST",
    json: true,
    headers: {
        "Content-Type" : "application/json; charset=utf-8"
    }
};
 function private_request(params){
     //Check to see if there are params being pass and handle it.
     if(!params){
         params = {};
     }
    //Private api variables needs to be moved out before push
     var API_KEY = "";
     var API_SECRET = "";

     //Building request signature
     var nonce = Math.floor(new Date().getTime() / 1000);
     var requestContent = crypto.createHash('md5').update(JSON.stringify(params)).digest().toString('base64');
     var req_signature = API_KEY + "POST" + encodeURIComponent( private_options.url).toLowerCase() + nonce + requestContent;
     var hmac_signed = crypto.createHmac('sha256', new Buffer( API_SECRET, 'base64' ) ).update( req_signature ).digest().toString('base64');

     return "amx " + API_KEY + ":" + hmac_signed + ":" + nonce;
 }

function ExecuteRequest(name, options)
{
    request(options, function (err, res, body)
    {
        if (body != null)
        {
            var json = body;
            console.log(json);
        }
        else
        {
            console.log(util.format("%s got fucked", name));
            console.log(body);
        }
        console.log(options);
    });
}
module.exports = {
    GetBalance: function(){
        private_options.url += "GetBalance";
        private_options.headers.Authorization = private_request({Currency: "DOT"});
        private_options.body = {Currency: "DOT"};
        ExecuteRequest("GetBalance", private_options);
    },
    GetDepositAddress: function(){
        private_options.url += "GetDepositAddress";
        private_options.body = {Currency: "DOT"};
        private_options.headers.Authorization = private_request({Currency: "DOT"});
        ExecuteRequest("GetDepositAddress", private_options);
    },
    GetTradeHistory: function(){
        private_options.url += "GetTradeHistory";
        private_options.body = {Market: "DOT/BTC"};
        private_options.headers.Authorization = private_request({Market: "DOT/BTC"});
        ExecuteRequest("GetDepositAddress", private_options);
    },
    GetTransactions: function(){
        private_options.url += "GetTransactions";
        private_options.body = {};
        private_options.headers.Authorization = private_request();
        ExecuteRequest("GetDepositAddress", private_options);
    },
    SubmitTrade: function(){
        private_options.url += "SubmitTrade";
        private_options.headers.Authorization = private_request();
        private_options.body = {};
        ExecuteRequest("GetBalance", private_options);
    },
    CancelTrade: function(){
        private_options.url += "CancelTrade";
        private_options.body = {};
        private_options.headers.Authorization = private_request();
        ExecuteRequest("GetDepositAddress", private_options);
    },
    SubmitTip: function(){
        private_options.url += "SubmitTip";
        private_options.body = {};
        private_options.headers.Authorization = private_request();
        ExecuteRequest("GetDepositAddress", private_options);
    },
    SubmitWithdraw: function(){
        private_options.url += "SubmitWithdraw";
        private_options.body = {};
        private_options.headers.Authorization = private_request();
        ExecuteRequest("GetDepositAddress", private_options);
    },
    SubmitTransfer: function(){
        private_options.url += "SubmitTransfer";
        private_options.body = {};
        private_options.headers.Authorization = private_request();
        ExecuteRequest("GetDepositAddress", private_options);
    },
    GetOpenOrders: function(){
        private_options.url += "GetOpenOrders";
        private_options.body = {"Market": "DOT/BTC"};
        private_options.headers.Authorization = private_request({Market: "DOT/BTC"});
        ExecuteRequest("GetDepositAddress", private_options);
    }
};
/*
module.exports = {
    */
/*
     Returns all currency data
     GET https://www.cryptopia.co.nz/api/GetCurrencies
     *//*

    GetCurrencies: function ()
    {
        options.url += "GetCurrencies";
        ExecuteRequest("GetCurrencies", options);
    },

    */
/*
     Returns all trade pair data
     GET https://www.cryptopia.co.nz/api/GetTradePairs
     *//*

    GetTradePairs: function ()
    {
        options.url += "GetTradePairs";
        ExecuteRequest("GetTradePairs", options);
    },

    */
/*
     Returns all market data
     GET https://www.cryptopia.co.nz/api/GetMarkets

     Param: baseMarket (optional, default: All)
     Param: hours (optional, default: 24)
     TODO : "GET https://www.cryptopia.co.nz/api/GetMarkets/BTC"
     TODO :"GET https://www.cryptopia.co.nz/api/GetMarkets/12"
     TODO :"GET https://www.cryptopia.co.nz/api/GetMarkets/BTC/12"
     *//*

    GetMarkets: function ()
    {
        options.url += "GetMarkets";
        ExecuteRequest("GetMarkets", options);
    },

    */
/*
     Returns market data for the specified trade pair

     Param: market (Required)(TradePairId or MarketName)
     TODO: GET https://www.cryptopia.co.nz/api/GetMarket/100
     TODO: GET https://www.cryptopia.co.nz/api/GetMarket/DOT_BTC

     Param: hours(optional, default: 24)
     TODO: GET https://www.cryptopia.co.nz/api/GetMarket/100/6
     *//*

    GetMarket: function()
    {
        options.url += "GetMarket";
        ExecuteRequest("GetMarket", options);
    },

    */
/*
     GetMarketHistory
     Returns the market history data for the specified trade pair

     Param: market (Required) (TradePairId or MarketName)
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/100
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/DOT_BTC

     Param: hours (optional, default: 24)
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/100/48
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/DOT_BTC/48
     *//*

    GetMarketHistory: function()
    {
        options.url += "GetMarketHistory";
        ExecuteRequest("GetMarketHistory", options);
    },

    */
/*
     GetMarketOrders
     Returns the open buy and sell orders for the specified trade pair

     Param: market (Required) (TradePairId or MarketName)
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/100
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/DOT_BTC

     Param: orderCount (optional, default: 100)
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/100/50
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/DOT_BTC/50
     *//*

    GetMarketOrders: function()
    {
        options.url += "GetMarketOrders";
        ExecuteRequest("GetMarketOrders", options);
    },

    */
/*
     Returns the open buy and sell orders for the specified markets

     Param: markets (Required) (TradePairIds or MarketNames seperated by '-')
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/100-101-102-103
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/DOT_BTC-DOT_LTC-DOT_DOGE-DOT_UNO

     Param: orderCount (optional, default: 100)
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/100-101-102-103/50
     TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/DOT_BTC-DOT_LTC-DOT_DOGE-DOT_UNO/50
     *//*

    GetMarketOrderGroups: function()
    {
        options.url += "GetMarketOrderGroups";
        ExecuteRequest("GetMarketOrderGroups", options);
    }
};
*/
