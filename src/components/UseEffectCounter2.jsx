import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const calculateTimeLeft = () => {
    const now = new Date();
    const targetDate = new Date();

    // 이번 주 수요일로 설정
    const dayOfWeek = targetDate.getDay();
    const daysUntilWednesday = (3 - dayOfWeek + 7) % 7;
    targetDate.setDate(targetDate.getDate() + daysUntilWednesday);
    targetDate.setHours(18, 30, 0, 0);

    const difference = targetDate - now;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        일: Math.floor(difference / (1000 * 60 * 60 * 24)),
        시간: Math.floor((difference / (1000 * 60 * 60)) % 24),
        분: Math.floor((difference / 1000 / 60) % 60),
        초: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      <h1>타이머를 만들어 주세요!</h1>
      <p>조건: 다음 세션까지 몇 시간 몇 분 몇 초 남았는지 보여주세요!</p>
      <h2>다음 주 수요일 18시 30분까지 남은 시간</h2>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span>타이머가 종료되었습니다!</span>
      )}
    </div>
  );
}

export default CountdownTimer;
