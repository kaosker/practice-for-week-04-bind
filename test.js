const Employee = require("./employee");

const johnWick = new Employee("John Wick", "dog lover");


setTimeout(johnWick.sayOccupation.bind(johnWick), 3000);
