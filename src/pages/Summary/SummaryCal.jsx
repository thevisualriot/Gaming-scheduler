import React from "react";
import HourRow from "../../components/PlayerInputComponents/HourRow";
import StaticRow from "./StaticRow";

const SummaryCal = () => {
    const days = [
        { short: "Mon", long: "Monday" },
        { short: "Tue", long: "Tuesday" },
        { short: "Wed", long: "Wednesday" },
        { short: "Thu", long: "Thursday" },
        { short: "Fri", long: "Friday" },
        { short: "Sat", long: "Saturday" },
        { short: "Sun", long: "Sunday" },
    ];

    const dayRows = days.map((day) => (
        <StaticRow shortenedDay={day.short} day={day.long} key={day.short} />
    ));

    return (
        <div>
            <HourRow classList="hidden lg:flex text-xs lg:ml-12 xl:text-base mt-4 mb-4 xl:ml-14 justify-between hour-list" />
            {dayRows}
        </div>
    );
};

export default SummaryCal;
