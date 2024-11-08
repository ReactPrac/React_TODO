import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
    const [date, setDate] = useState(new Date());

    return (
    <div>
        <Calendar
        onChange={setDate}
        value={date}
        formatDay={(locale, date) => date.getDate()} 
        />
    </div>
    );
};

export default CustomCalendar;
