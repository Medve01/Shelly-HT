# Shelly-HT

## Description
This is a simple MagicMirror module to display ONE Shelly HT sensor data (temperature and humidity) on Magic Mirror.

Code could be a lot of better, I know also it only can read one sensor - since I only have one right now :)

Feel free to extend to fulfill your own needs, This fulfills my needs.

The module uses the Shelly HT API over LAN to get the sensor data. For details, check here: https://shelly-api-docs.shelly.cloud/#shelly-h-amp-t
For it to work properly, it's best to have a static IP for your Shelly. Since it's using LAN connection, no authentication is needed towards the API

Current status is works for me, I kinda consider it completed. Will add further features as I need them.
Feel free to enhance :)
## Screenshot crop
![shelly-HT screen](https://medve01.github.io/shelly-ht.jpg)

## Prerequisites
You need to have a MagicMirror up and running, also a Shelly HT sensor (https://shelly.cloud/shelly-humidity-and-temperature/) with a fixed IP.

## Installing

Go to your MagicMirror directory
```
cd modules
git clone https://github.com/Medve01/Shelly-HT.git
```
check our the config.sample.js in the module directory. Copy the content to your config.js and change as necessary. You have to change ShellyHTApiPath to your device's IP address.

Restart MagicMirror and enjoy.
Note: Shelly HT can be asleep for hours. If you don't receive any data, make sure to turn it on manually the first time. On how to do this, check the Shylle HT user manual.
