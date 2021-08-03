// Question 1

var dateToday = new Date('October 15, 1996 05:35:32:77 GMT+11:00')
var uniMilliseconds = dateToday.getMilliseconds() // .getUTCMilliseconds() also works

// If the question means milliseconds since Unix epoch, then...

var UniMilliSec = dateToday.getTime()
