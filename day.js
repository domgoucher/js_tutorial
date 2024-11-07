// Returns the day of the week for a given day
function dayName(date) {
  const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
                         "Thursday", "Friday", "Saturday"];
  return daysOfTheWeek[date.getDay()];
}