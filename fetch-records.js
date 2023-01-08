const { passengerDatabase, driverDatabase } = require("./database");
const printBookingHistory = require("./lib/print-booking-history");

async function main() {
  const stefan = await driverDatabase.findBy("name", "Stefan");
  const ali = await passengerDatabase.findByName("Ali");

  ali.book(stefan, "Kreuzberg", "Wannsee");
  passengerDatabase.update(ali);

  printBookingHistory(ali);

  console.log(await passengerDatabase.findBy("location", "Mitte"));
}

main();
