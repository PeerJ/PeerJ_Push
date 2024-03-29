/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */



/**
 * Load page into url
 *
 * @param url           The url to load
 */
function loadPage(url) {
    var xmlhttp = new XMLHttpRequest();

    // Callback function when XMLHttpRequest is ready
    xmlhttp.onreadystatechange=function(){
        if (xmlhttp.readyState === 4){
            if (xmlhttp.status === 200) {
                document.getElementById('container').innerHTML = xmlhttp.responseText;
            }
        }
    };
    xmlhttp.open("GET", url , true);
    xmlhttp.send();
}

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    
        var pushNotification = window.plugins.pushNotification;
        pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"847644074324","ecb":"app.onNotificationGCM"});


        console.log('Received Event: ' + id);
    },
    successHandler: function(result) {
    },
    errorHandler:function(error) {
    },
    onNotificationGCM: function(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    console.log("Regid " + e.regid);
                    //loadPage("https://peerj:!p33rj@14@www.staging.peerj.com:442/registerSCM?regid="+e.regid);
                    // loadPage("http://192.168.15.73/registerSCM?regid="+e.regid);
                    // loadPage("http://qdot.me/?"+e.regid);
                    //loadPage("https://www.peerj.com/registerSCM?regid="+e.regid);
                    //loadPage("https://www.staging.peerj.com:442/");
                    document.getElementById('container').innerHTML = '<iframe src="http://192.168.15.73/registerGCM?' + e.regid + '" style="width:100%; height:100%">';
                }
            break;

            case 'message':
                // this is the actual push notification. its format depends on the data model from the push server
                alert('message = '+e.message+' msgcnt = '+e.msgcnt);
            break;

            case 'error':
                alert('GCM error = '+e.msg);
            break;

            default:
                alert('An unknown GCM event has occurred');
            break;
        }
    }
};
