const BaseDataBase = require("./base-database");
const Passenger = require("../passenger.js");

class PassengerDataBase extends BaseDataBase {
  findByName(name) {
    const objects = this.load();

    return objects.find((o) => o.name == name);
  }
}

module.exports = new PassengerDataBase(Passenger);
