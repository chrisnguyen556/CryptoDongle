var crypto_public = require('./cryptopia_api/cryptopia_public_api');
var Getopt = require('node-getopt');

getopt = new Getopt([
    ['c', '=', 'Commands']
]);

getopt.setHelp(
    "Usage: node test.js [OPTION]\n" +
    "[[OPTIONS]]\n\n" +
    "Command Name : ID\n" +
    "GetCurrencies        : 1\n" +
    "GetTradePairs        : 2\n" +
    "GetMarkets           : 3\n" +
    "GetMarket            : 4\n" +
    "GetMarketHistory     : 5\n" +
    "GetMarketOrders      : 6\n" +
    "GetMarketOrderGroups : 7\n"
);

getopt.showHelp();

var opt = getopt.parse(process.argv.slice(2));

switch(opt.options['c']) {
    case '1':
        crypto_public.GetCurrencies();
        break;
    case '2':
        crypto_public.GetTradePairs();
        break;
    case '3':
        crypto_public.GetMarkets();
        break;
    case '4':
        crypto_public.GetMarket();
        break;
    case '5':
        crypto_public.GetMarketHistory();
        break;
    case '6':
        crypto_public.GetMarketOrders();
    case '7':
        crypto_public.GetMarketOrderGroups();
    default:
        console.log("Invalid choice nibba!");
}