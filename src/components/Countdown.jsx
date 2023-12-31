import '../styles/countdown.css';
import { useState, useEffect } from 'react';

const Countdown = () => {

    const targetDate = new Date("2024-02-30T08:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = new Date(targetDate) - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  /* eslint-disable-next-line */
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [targetDate]);

    return (
        <div className="countdown" id='countdown'>
            <div className="countdown-container">
                <div className="text-timer">
                    <div className="text">
                        <p>Countdown to launch of Innovision Academy</p>
                        <button>Join our waitlist</button>
                    </div>
                    <div className="timer">
                        <div className="time">
                            <p className="count">{timeLeft.days}</p>
                            <div className="unit">Days</div>
                        </div>
                        <div className="time">
                            <p className="count">{timeLeft.hours}</p>
                            <div className="unit">Hours</div>
                        </div>
                        <div className="time">
                            <p className="count">{timeLeft.minutes}</p>
                            <div className="unit">Minutes</div>
                        </div>
                        <div className="time">
                            <p className="count">{timeLeft.seconds}</p>
                            <div className="unit">Seconds</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countdown;