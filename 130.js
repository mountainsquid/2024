let currentDateTime = new Date();
let currentDate = new Date();

console.log("[Date]", currentDate.toDateString());
console.log("[Time]", currentDateTime.toLocaleTimeString());



const getRemainingHours = () => {
  const currentHour = new Date().getHours();
  const remainingHours = 24 - currentHour;

  console.log(`[Hours left] ${remainingHours}`);
};

getRemainingHours();



const getRemainingWeeksInYearFromToday = (
  ) => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getFullYear(), 11, 31); // December 31st of the current year
  const oneWeek = 7 * 24 * 60 * 60 * 1000; // 7 days*hours*minutes*seconds*milliseconds
  const diffWeeks = Math.round(Math.abs((currentDate - targetDate) / oneWeek));
  
    console.log(`[Weeks Left] ${diffWeeks}`);
  };
  
  getRemainingWeeksInYearFromToday();
  
  


  const getRemainingDaysInYearFromToday = (
    ) => {
      const currentDate = new Date();
      const targetDate = new Date(currentDate.getFullYear(), 11, 31); // December 31st of the current year
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((currentDate - targetDate) / oneDay));
    
      console.log(`[Days left year] ${diffDays}`);
    };
    
    getRemainingDaysInYearFromToday();
    
    
    const getRemainingYearsUntil2045 = (
      ) => {
        const currentDate = new Date();
        const targetDate = new Date("2045-01-01"); // January 1st, 2045
      const oneYear = 365.25 * 24 * 60 * 60 * 1000; // accounting for leap years
      const diffYears = Math.round(Math.abs((currentDate - targetDate) / oneYear));
      
        console.log(`[Years left until 2045] ${diffYears}`);
      };
      
      getRemainingYearsUntil2045();
      

      
