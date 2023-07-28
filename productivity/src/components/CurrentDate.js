import React from 'react'
import {
    useState, 
    useEffect
} from 'react'

function CurrentDate() {

    const [currDate, setCurrDate] = useState('');
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    useEffect(() =>   {
      const interval = setInterval(() =>  {
          const dateObj = new Date();
          
          const formattedDate = dateObj.toLocaleString(undefined, options);
          setCurrDate(formattedDate);
      }, 1000); // update the date every second
  
      return () => clearInterval(interval);
    }, []);


  return (
    <div className="p-8">
        <h1 className="text-2xl font-bold align-center">{currDate}</h1>
    </div>
  )
}

export default Date
