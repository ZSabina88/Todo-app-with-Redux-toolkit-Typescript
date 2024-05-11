import { useEffect, useState } from 'react';
import classes from "../styles/Clock.module.css";

type Props = {
    time: number
}

const Clock = ({ time: initial }: Props) => {
    const [time, setTime] = useState(new Date(initial));

    useEffect(() => {
        const timer = setInterval(() =>
            setTime(new Date())
            , 1000);

        return () => clearInterval(timer);

    }, [time])
    return (
        <div className={classes.clock}>
            <span>{time.toLocaleTimeString()}</span>
        </div>
    );
}

export default Clock;
