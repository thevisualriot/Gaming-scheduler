import React from "react";
import TimeSlotButton from "./TimeSlotButton";
import { useState } from "react";

const DayRow = (props) => {
    const [isActive, setActive] = useState(false);

    const hours = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24,
    ];

    const handleRowToggle = (e) => {
        console.log(e.target.id);
        setActive(!isActive);
    };

    const handleToggle = (e) => {
        console.log(e.target.id);
        // setActive(!isActive);
    };

    return (
        <div className="flex mx-20 mt-2">
            <div className="min-w-40">
                <h2
                    className="font-sub uppercase hover:text-pinkHover hover:cursor-pointer"
                    onClick={handleRowToggle}
                >
                    {props.day}
                </h2>
            </div>
            <div className="flex w-full justify-between">
                {hours.map((hour) => (
                    <TimeSlotButton
                        className={
                            isActive
                                ? "bg-cyan w-5 h-5 rounded-md hover:bg-red"
                                : "bg-red w-5 h-5 rounded-md hover:bg-cyan"
                        }
                        id={props.day + hour}
                        key={props.day + hour}
                        handleToggle={handleToggle}
                    />
                ))}
            </div>
        </div>
    );
};

export default DayRow;
