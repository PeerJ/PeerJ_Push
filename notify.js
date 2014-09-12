var gcm = require('node-gcm');
var message = new gcm.Message();
 
//API Server Key
var sender = new gcm.Sender('AIzaSyDZGKv-YbuEaP88vRwoBv81Al-0fKLSsa4');
var registrationIds = [];
 
// Value the payload data to send...
message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
message.addData('title','Push Notification Sample' );
message.addData('msgcnt','3'); // Shows up in the notification in the status bar
message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
//message.collapseKey = 'demo';
//message.delayWhileIdle = true; //Default is false
message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// At least one reg id required
registrationIds.push('APA91bGozsX67ay6tD87swDU7oRvlQMmvx7pL8xAXTMu9XSBQkibu4W5QaS6-gb1p0mRl3IymvLl_vQOJiunnqgm3S_6uDkDv_e7Ze0_sHI23xpjMFmZ5h7-t87v5UFgSCeiqWUqmyWzUoFWzXFWMcPnyEEifNtsbQ');
registrationIds.push('APA91bFq9voX26YpvGXBP9tLE3Z4CkyV_sEOLk3jrt0PQTTvp8mQZxkijnNFbYLw-CV7G_Weogb21W6S4O54BEFL5PlOAvbUzRDKoLPzeG02SXwlCog-tCj3PFZnro1YdMCqYLwdRiRE');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
