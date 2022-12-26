const colors = require("colors");

function printBooking(booking) {
  console.log(
    `${booking.passenger.name} booked ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}`
  );
}

function printBookingHistory(passenger) {
  if (passenger.booking.length == 0)
    return console.log(`${booking.passenger.name} has no bookings yet`);
  passenger.bookings.forEach(printBooking);
}

module.exports = printBookingHistory;
