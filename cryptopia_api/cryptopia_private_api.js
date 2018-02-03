'use strict';

var request = require('request');
var util = require('util');
var crypto = require('crypto');

var base_URL = "https://www.cryptopia.co.nz/api/";

//build the JSON object
var options = {
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
     var req_signature = API_KEY + "POST" + encodeURIComponent( options.url).toLowerCase() + nonce + requestContent;
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
    SendRequest: function(call, params){
        options.url += call;
        options.headers.Authorization = private_request(params);
        options.body = params;
        console.log(util.format("Calling private call %s using %s", call, options.url));
        ExecuteRequest(call, options);
    }
};