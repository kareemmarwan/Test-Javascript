const prompt = require("prompt-sync")();
var Full_Name = prompt("Please Enter your Full Name : ");
var Job_Name = prompt("Please Enter The Job Title  : ");
var Start_Data = prompt("Please Enter The Work Start Date : ");
var End_Date = prompt("Please Enter The Work Last Date : ");
var Email = prompt("Please Enter Your Email : ");
function getMonthDifference() {
  const startDate = new Date(Start_Data);
  const endDate = new Date(End_Date);
  const res =
    endDate.getMonth() -
    startDate.getMonth() +
    12 * (endDate.getFullYear() - startDate.getFullYear());

  return res;
}

function Employee() {
  this.massge = function () {
    console.log(
      `
      Hello Eng ${this.name}
      Yor Title Job ${this.job}
      And Your Email ${this.email}
      Work Starting Date ${this.S_date}
      To Date ${this.L_date}
      Number Of Months Of Experience ${this.months_experience}
      `
    );
  };
}

const kareem = new Employee();

kareem.name = Full_Name;
kareem.job = Job_Name;
kareem.email = Email;
kareem.S_date = Start_Data;
kareem.L_date = End_Date;
kareem.months_experience = getMonthDifference();
kareem.massge();
