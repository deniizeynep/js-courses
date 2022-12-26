const BaseDataBase = require("./database/base-database");
const Passenger = require("./model/passenger.js");

class PassengerDataBase extends BaseDataBase {
  findByName(name) {
    const objects = this.load();

    return objects.find((o) => o.name == name);
  }
}

module.exports = new PassengerDataBase(Passenger);
