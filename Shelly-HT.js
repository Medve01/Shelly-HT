Module.register("Shelly-HT",{
	// Default module config.
	defaults: {
		ShellyHTApiPath: "http://www.mocky.io/v2/5e9999183300003e267b2744"
	},
	ShellyHTData: {
		tmp: "--",
		hum: "--",
		updated: "--"
	},
	getStyles: function () {
		return ["Shelly-HT.css", "font-awesome.css"];
	},
	start: function() {
		var self = this;

		// Schedule update timer.
		setInterval(function() {
			self.sendSocketNotification("GetShelly", self.config.ShellyHTApiPath);
			self.updateDom();
		}, 3000);

	},
	socketNotificationReceived: function (notification, payload) {
		Log.log(this.name + " received a socket notification: " + notification + " - Temp: " + payload.tmp + " Hum: " + payload.hum + "Updated: " + payload.updated);
		this.ShellyHTData.tmp = payload.tmp
		this.ShellyHTData.hum = payload.hum
		this.ShellyHTData.updated = payload.updated
	},
	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		ihtml = this.ShellyHTData.tmp + " ℃<br/>" + this.ShellyHTData.hum + " %";
		ihtml += "<div class='Shelly-updated'>last updated: " + this.ShellyHTData.updated + "</div>"
		wrapper.innerHTML = ihtml
		return wrapper
		}
});
