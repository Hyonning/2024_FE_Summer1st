// import { useState, useEffect } from "react";

// function UseEffectCounter() {
//   // count State 생성
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log(`렌더링 완료! count의 값은 ${count}입니다.`);
//   });
//   // useEffect 는 렌더링이 완료된 후 실행됨
//   return (
//     <>
//       <p>이번엔 useEffect를 이용한 카운터지롱! {count} 번 클릭했다!</p>
//       <button onClick={() => setCount(count + 1)}>나를 눌러보세용❤️</button>
//     </>
//   );
// }
// export default UseEffectCounter;

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
