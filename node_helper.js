var NodeHelper = require("node_helper");
const request = require('request');
module.exports = NodeHelper.create({


	start: function() {

	},
// Frontend module pings the node helper to fetch data from Shelly HT
	socketNotificationReceived: function (notification, payload) {
		if (notification == "GetShelly"){
			self = this;
			console.log(payload)
			request(payload, {json: true }, (err, res, body) => {
				if (err) { return console.log(err); }
				currentdate = new Date();
				payload= {
					tmp: body.tmp.tC,
					hum: body.hum.value,
					updated: currentdate.getMonth()+1 + "/"
					+ (currentdate.getDate())  + " "
					+ currentdate.getHours() + ":"
					+ currentdate.getMinutes()
				}
				console.log("Sending Shelly data to FE module", payload);
				//Only sending back temperature in Celsius and Humidity %.
				//Also, since Shelly HT is mostly asleep (see Shelly documentation),
				//Adding a "last updated" timestamp as well for displaying
				//TODO: add battery percentage maybe as well
				self.sendSocketNotification('ShellyHTData',payload)
			});
			//Generates a lot of logs. TODO: make logging configurable
			console.log(notification, payload)
		}
	}

});