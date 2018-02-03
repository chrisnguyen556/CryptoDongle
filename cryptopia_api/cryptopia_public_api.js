'use strict';

var request = require('request');
var util = require('util');
var options = {
    url: "https://www.cryptopia.co.nz/api/",
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=utf-8"
    },
    json: true
};

function ExecuteRequest(call, options)
{
    request(options, function (err, res, body)
    {
        if (body != null)
        {
            var json = JSON.stringify(body);
            //console.log(json);
        }
        else
        {
            console.log(util.format("%s got fucked", call));
        }
    });
}

module.exports = {
    /*
    TODO: Usage formatting needs to be done
     */
    SendRequest: function (call, params)
    {
        var params_url = "";
        if (Object.keys(params).length > 0)
        {
            Object.keys(params).forEach(function(key)
            {
                params_url += util.format("/%s", params[key]);
            });

            options.url += util.format("%s%s", call, params_url);
        }
        else
        {
            options.url += call;
        }

        console.log(util.format("Calling public call %s using %s", call, options.url));
        ExecuteRequest(call, options);
    }

    /*
    All parameters: baseMarket (optional), market (required), markets (required), hours (optional), orderCount (optional)

    Usage : baseMarket/hours, baseMarket, hours
    Usage : market, market/hours
    Usage : market, market/hours
    Usage : market, market/orderCount
    Usage : markets, markets/orderCount

    GET https://www.cryptopia.co.nz/api/GetMarkets
    Params: baseMarket (optional), hours (optional)
    Usage : baseMarket/hours, baseMarket, hours
    https://www.cryptopia.co.nz/api/GetMarkets/BTC
    https://www.cryptopia.co.nz/api/GetMarkets/12
    https://www.cryptopia.co.nz/api/GetMarkets/BTC/12

    GET https://www.cryptopia.co.nz/api/GetMarkets
    Params: market (required), hours (optional)
    Usage : market, market/hours
    https://www.cryptopia.co.nz/api/GetMarket/100/6

    GET https://www.cryptopia.co.nz/api/GetMarketHistory
    Params: market (required), hours (optional)
    Usage : market, market/hours
    https://www.cryptopia.co.nz/api/GetMarketHistory/100/48
    https://www.cryptopia.co.nz/api/GetMarketHistory/DOT_BTC/48

    GET https://www.cryptopia.co.nz/api/GetMarketOrders
    Params: market (required), orderCount (optional)
    Usage : market, market/orderCount
    https://www.cryptopia.co.nz/api/GetMarketOrders/100/50
    https://www.cryptopia.co.nz/api/GetMarketOrders/DOT_BTC/50

    GET https://www.cryptopia.co.nz/api/GetMarketOrderGroups
    Note: TradePairIds or MarketNames separated by '-'
    Params: markets (required), orderCount (optional)
    Usage : markets, markets/orderCount
    https://www.cryptopia.co.nz/api/GetMarketOrderGroups/100-101-102-103/50
    https://www.cryptopia.co.nz/api/GetMarketOrderGroups/DOT_BTC-DOT_LTC-DOT_DOGE-DOT_UNO/50
     */
};
