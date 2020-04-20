var NodeHelper = require("node_helper");
const request = require('request');
module.exports = NodeHelper.create({


	start: function() {

	},
// Frontend module pings the node helper to fetch data from Shelly HT
	socketNotificationReceived: function (notification, payload) {
		if (notification == "GetShelly"){
			//Parameters: notification can be anything (not used), payload must be the URL of the Shelly HT status api
			self = this;
			request(payload, {json: true }, (err, res, body) => {
				if (err) { return console.log(err); }
				currentdate = new Date();
				var options = { month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
				var printed_date = new Intl.DateTimeFormat('nl', options).format(currentdate);
				payload= {
					tmp: body.tmp.tC,
					hum: body.hum.value,
					bat: body.bat.value + "%(" + body.bat.voltage + " V)",
					updated: printed_date
				}
				console.log("Sending Shelly data to FE module", payload);
				//Only sending back temperature in Celsius and Humidity %.
				//Also, since Shelly HT is mostly asleep (see Shelly documentation),
				//Adding a "last updated" timestamp as well for displaying
				//TODO: add battery percentage maybe as well
				self.sendSocketNotification('ShellyHTData',payload)
			});
		}
	}
});
