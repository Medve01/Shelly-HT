//Include this into your config.js file

{
    module: "Shelly-HT",
    header: "Shelly-HT",
    position: "top_left",
    config: {
        //Your Shelly HT needs to have a fixed IP (or your LAN must be supporting mDNS)
        ShellyHTApiPath: "http://192.168.0.149/status",
        RefreshInterval: "5000" //milliseconds
    }
}