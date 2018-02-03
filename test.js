var crypto_public = require('./cryptopia_api/cryptopia_public_api');
var crypto_private = require('./cryptopia_api/cryptopia_private_api');
var Getopt = require('node-getopt');
var util = require('util');

getopt = new Getopt([
    ['c', '=', 'Command'],
    ['p', '=', 'Parameters']
]);

// List of commands names
var public_commands = ["GetCurrencies", "GetTradePairs", "GetMarkets", "GetMarket", "GetMarketHistory", "GetMarketOrder", "GetMarketOrderGroups"];
var private_commands = ["GetBalance", "GetDepositAddress", "GetTradeHistory", "GetTransactions", "SubmitTrade", "CancelTrade", "SubmitTip", "SubmitWithdraw", "SubmitTransfer", "GetOpenOrders"];
var commands = public_commands.concat(private_commands);
// Generating menu
var menu = "Usage: node test.js [OPTION]\n" +
           "[[OPTIONS]]\n\n" +
           "Command Name : ID\n";

for (var c in commands) {
    var diff = 21 - commands[c].length;
    menu += util.format("%s%s : %i\n", commands[c], ' '.repeat(diff), parseInt(c)+1);
}

getopt.setHelp(menu);
getopt.showHelp();

var opt = getopt.parse(process.argv.slice(2));
var params = getopt.parse(process.argv.slice(2)).options['p'] !== undefined ? JSON.parse(getopt.parse(process.argv.slice(2)).options['p']) : {};
var call = commands[opt.options['c']];

switch(opt.options['c']) {
    case '1':
        crypto_public.SendRequest(call, params);
        break;
    case '2':
        crypto_public.SendRequest(call, params);
        break;
    case '3':
        crypto_public.SendRequest(call, params);
        break;
    case '4':
        crypto_public.SendRequest(call, params);
        break;
    case '5':
        crypto_public.SendRequest(call, params);
        break;
    case '6':
        crypto_public.SendRequest(call, params);
        break;
    case '7':
        crypto_public.SendRequest(call, params);
        break;
	case '8':
		crypto_private.SendRequest(call, params);
		break;
    case '9':
        crypto_private.SendRequest(call, params);
        break;
    case '10':
        crypto_private.SendRequest(call, params);
        break;
    case '11':
        crypto_private.SendRequest(call, params);
        break;
    case '12':
        crypto_private.SendRequest(call, params);
        break;
    case '13':
        crypto_private.SendRequest(call, params);
        break;
    case '14':
        crypto_private.SendRequest(call, params);
        break;
    case '15':
        crypto_private.SendRequest(call, params);
        break;
    case '16':
        crypto_private.SendRequest(call, params);
        break;
    case '17':
        crypto_private.SendRequest(call, params);
        break;
    default:
        console.log("Invalid choice nibba!");
}