import React, { useState, useEffect } from 'react'
import "../components/styles/NavBar.css"


function DateAndHour() {

    var [date, setDate] = useState(new Date());
    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <div className="dateAndHour">
            Time : {date.toLocaleTimeString()}  Date : {date.toLocaleDateString()}
        </div>
    )
}

export default DateAndHour