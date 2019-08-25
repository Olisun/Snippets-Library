// Must declare new Date method first. CL output is Mon Aug 05 2019 13:26:11 GMT-0700 (Pacific Daylight Time) {}

const today = new Date();
console.log(today);

// To get day of the month. CL outout is the day of the month (no 0 though).

const day = today.getDate();
console.log(day);

// To get the month of the year. Note that January is indexed to 0 hence the + 1.

const month = today.getMonth() + 1;
console.log(month);

// To get the year. CL output is current year.

const year = today.getFullYear();
console.log(year);

// Date format. No 0's though.

const date = `${month}/${day}/${year}`;
console.log(date);

//  To get the hour in the day. CL output is in military hours.

const hours = today.getHours();
console.log(hours);

// To get the minutes in the hours. CL output is as expected.

const minutes = today.getMinutes();
console.log(minutes);

// Time format. CL output is military.

const time = `${hours}:${minutes}`;
console.log(time);