class Booking {
  constructor(driver, passenger, origin, destination) {
    this.driver = driver;
    this.passenger = passenger;
    this.origin = origin;
    this.destination = destination;
    this.state = "Finished";
  }
}

module.exports = Booking;
