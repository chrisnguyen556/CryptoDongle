var crypto_public = require('./cryptopia_api/cryptopia_public_api');
var crypto_private = require('./cryptopia_private_api/cryptopia_private_api');

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
    "GetMarketOrderGroups : 7\n" +
	"GetBalance           : 8\n" +
    "GetDepositAddress    : 9\n" +
    "GetTradeHistory      : 10\n"+
    "GetTransactions      : 11\n"+
    "SubmitTrade          : 12\n"+
    "CancelTrade          : 13\n"+
    "SubmitTip            : 14\n"+
    "SubmitWithdraw       : 15\n"+
    "SubmitTransfer       : 16\n"+
    "GetOpenOrders        : 17\n"
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
        break;
    case '7':
        crypto_public.GetMarketOrderGroups();
        break;
	case '8':
		crypto_private.GetBalance();
		break;
    case '9':
        crypto_private.GetDepositAddress();
        break;
    case '10':
        crypto_private.GetTradeHistory();
        break;
    case '11':
        crypto_private.GetTransactions();
        break;
    case '12':
        crypto_private.SubmitTrade();
        break;
    case '13':
        crypto_private.CancelTrade();
        break;
    case '14':
        crypto_private.SubmitTip();
        break;
    case '15':
        crypto_private.SubmitWithdraw();
        break;
    case '16':
        crypto_private.SubmitTransfer();
        break;
    case '17':
        crypto_private.GetOpenOrders();
        break;
    default:
        console.log("Invalid choice nibba!");
}