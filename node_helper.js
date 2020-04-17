var NodeHelper = require("node_helper");
const request = require('request');
module.exports = NodeHelper.create({


	start: function() {

	},

	socketNotificationReceived: function (notification, payload) {
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
			self.sendSocketNotification('ShellyHTData',payload)
		});
		console.log(notification, payload)
	}

});