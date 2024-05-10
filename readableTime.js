/**
 * 1. Create the variables (year, day, hour, minute)
 * 2. if input is 0 => now
 * 3. calculate the number of years, days, hours, minutes, and second based on argument
 * 4. if available values
 */

// prettier-ignore
const convertTime = (seconds) => {
  const YEAR_SECONDS = 365 * 24 * 60 * 60;
  const DAY_SECONDS = 24 * 60 * 60;
  const HOUR_SECONDS = 60 * 60;
  const MINUTE_SECONDS = 60;

  let results = "";

  if (seconds === 0) return "now";
  if(seconds < 60) return `${seconds} second${seconds>1?'s':''}`
  if (seconds >= YEAR_SECONDS) {
    let years = Math.floor(seconds / YEAR_SECONDS);
    results = `${years} year${years > 1 ? "s" : ""}`;
    seconds %= YEAR_SECONDS;
  }
  if (seconds >= DAY_SECONDS) {
    let days = Math.floor(seconds / DAY_SECONDS);
    seconds %= DAY_SECONDS;
    results += `${results&&(seconds === 0) ? "and " : results ? ", " : ""}${days} day${days > 1 ? "s" : "" }`;
  }
  if (seconds >= HOUR_SECONDS) {
    let hours = Math.floor(seconds / HOUR_SECONDS);
    seconds %= HOUR_SECONDS;
    results += `${results&&(seconds === 0) ? "and " : results ? ", " : ""}${hours} hour${hours > 1 ? "s" : ""}`;
  }
  if (seconds >= MINUTE_SECONDS) {
    let minutes = Math.floor(seconds / MINUTE_SECONDS);
    seconds %= MINUTE_SECONDS;
    results += `${results&&(seconds === 0) ? " and " : results ? ", " : ""}${minutes} minute${
      minutes > 1 ? "s" : ""
    }`;
    if (seconds > 0) {
      results += ` and ${seconds} second${
        seconds > 1 ? "s" : ""
      }`;
    }
  }
  return results;
};

console.log(convertTime(132030240));
console.log(convertTime(120));
console.log(convertTime(3662));
console.log(convertTime(13));
