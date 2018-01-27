'use strict';

var request = require('request');
var util = require('util');
var options = {
    url: "https://www.cryptopia.co.nz/api/",
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=utf-8"
    }
};

function ExecuteRequest(name, options)
{
    request(options, function (err, res, body)
    {
        if (body != null)
        {
            var json = JSON.parse(body);
            console.log(json);
        }
        else
        {
            console.log(util.format("%s got fucked", name));
        }
    });
}

module.exports = {
    /*
    Returns all currency data
    GET https://www.cryptopia.co.nz/api/GetCurrencies
     */
    GetCurrencies: function ()
    {
        options.url += "GetCurrencies";
        ExecuteRequest("GetCurrencies", options);
    },

    /*
    Returns all trade pair data
    GET https://www.cryptopia.co.nz/api/GetTradePairs
     */
    GetTradePairs: function ()
    {
        options.url += "GetTradePairs";
        ExecuteRequest("GetTradePairs", options);
    },

    /*
    Returns all market data
    GET https://www.cryptopia.co.nz/api/GetMarkets

    Param: baseMarket (optional, default: All)
    Param: hours (optional, default: 24)
    TODO : "GET https://www.cryptopia.co.nz/api/GetMarkets/BTC"
    TODO :"GET https://www.cryptopia.co.nz/api/GetMarkets/12"
    TODO :"GET https://www.cryptopia.co.nz/api/GetMarkets/BTC/12"
     */
    GetMarkets: function ()
    {
        options.url += "GetMarkets";
        ExecuteRequest("GetMarkets", options);
    },

    /*
    Returns market data for the specified trade pair

    Param: market (Required)(TradePairId or MarketName)
    TODO: GET https://www.cryptopia.co.nz/api/GetMarket/100
    TODO: GET https://www.cryptopia.co.nz/api/GetMarket/DOT_BTC

    Param: hours(optional, default: 24)
    TODO: GET https://www.cryptopia.co.nz/api/GetMarket/100/6
     */
    GetMarket: function()
    {
        options.url += "GetMarket";
        ExecuteRequest("GetMarket", options);
    },

    /*
    GetMarketHistory
    Returns the market history data for the specified trade pair

    Param: market (Required) (TradePairId or MarketName)
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/100
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/DOT_BTC

    Param: hours (optional, default: 24)
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/100/48
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketHistory/DOT_BTC/48
     */
    GetMarketHistory: function()
    {
        options.url += "GetMarketHistory";
        ExecuteRequest("GetMarketHistory", options);
    },

    /*
    GetMarketOrders
    Returns the open buy and sell orders for the specified trade pair

    Param: market (Required) (TradePairId or MarketName)
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/100
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/DOT_BTC

    Param: orderCount (optional, default: 100)
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/100/50
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrders/DOT_BTC/50
     */
    GetMarketOrders: function()
    {
        options.url += "GetMarketOrders";
        ExecuteRequest("GetMarketOrders", options);
    },

    /*
    Returns the open buy and sell orders for the specified markets

    Param: markets (Required) (TradePairIds or MarketNames seperated by '-')
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/100-101-102-103
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/DOT_BTC-DOT_LTC-DOT_DOGE-DOT_UNO

    Param: orderCount (optional, default: 100)
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/100-101-102-103/50
    TODO: GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups/DOT_BTC-DOT_LTC-DOT_DOGE-DOT_UNO/50
     */
    GetMarketOrderGroups: function()
    {
        options.url += "GetMarketOrderGroups";
        ExecuteRequest("GetMarketOrderGroups", options);
    }
};
