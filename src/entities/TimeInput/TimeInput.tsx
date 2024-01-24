import React, {FC, useState, useEffect, useRef} from 'react';
import {Dispatch, SetStateAction} from 'react';

interface Options {
    deliveryTime: Date,
    setDeliveryTime: Dispatch<SetStateAction<Date>>;
}

const TimeInput: FC<Options> = ({deliveryTime, setDeliveryTime}) => {
    const [timeOptions, setTimeOptions] = useState<string[]>([]);

    useEffect(() => {
        setTimeOptions(generateTimeOptions());
    }, [deliveryTime]);

    function generateTimeOptions() {
        let startTime = new Date(deliveryTime)
        startTime.setHours(11, 0, 0, 0)

        let finishTime = new Date(deliveryTime)
        finishTime.setHours(21, 30, 0, 0)
        if (startTime < new Date()) {
            startTime = new Date()
            //min delivery gap is 30 min
            startTime.setMinutes(startTime.getMinutes() + 45 - startTime.getMinutes()%15)
        }

        const options = [];

        for (let i = 0; i < 24 * 4; i++) {
            if (finishTime < startTime) {
                break
            }
            options.push(startTime.toLocaleTimeString('en-Gb', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }));
            const day = startTime.getDate()
            startTime.setMinutes(startTime.getMinutes() + 15);
            if (day != startTime.getDate()) {
                break
            }

        }

        return options;
    };

    const handleChange = (time: string) => {
        const newDeliveryTime = new Date(deliveryTime)
        newDeliveryTime.setMinutes(Number(time.split(':')[1]))
        newDeliveryTime.setHours(Number(time.split(':')[0]))
        setDeliveryTime(newDeliveryTime)
    }

    return (
        <select value={deliveryTime.toLocaleTimeString('en-Gb', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        })} name="deliveryTime" id="time"
                onChange={(e) =>
                    handleChange(e.target.value)}
        >
            {
                timeOptions.map((time, index) => (
                    <option key={index} value={time}>
                        {time}
                    </option>
                ))
            }
        </select>
    );
};

export default TimeInput;
