#!/bin/sh
mkdir plugins
phonegap local build android
phonegap local plugin add https://github.com/phonegap-build/PushPlugin
phonegap local build android
