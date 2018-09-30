var Service, Characteristic;

module.exports = function (homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory('homebridge-demo-switch', 'DemoSwitch', Switch);
};

function Switch(log, config) {
    this.log = log;
    this.switch = {
        powerOn: {},
        powerOff: {}
    };
    this.name = config.name;
}
Switch.prototype.getServices = function () {
    var plugin = this;
    plugin.log('creating Switch');
    var switchService = new Service.Switch(plugin.name);
    switchService.getCharacteristic(Characteristic.On)
        .on('set', function (value, callback) {
            plugin.log("Switch -> " + value);
            callback();
        });
    return [switchService];
}