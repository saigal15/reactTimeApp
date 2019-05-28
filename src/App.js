import React from 'react';

import './App.css';

function App() {
  
   const date  = new Date()
   const hours = date.getHours()
   let timeofday
   if(hours < 12)
   {
     timeofday = "morning"
   }
   else if (hours >= 12 && hours < 17)
   {
     timeofday = "afternoon"
   }
   else
   {
     timeofday = "night"
   }
   return(
  
     <h1>Good {timeofday}! </h1>
   
        );
}

export default App;
