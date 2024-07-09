import React, { useEffect, useState } from "react";

const UseEffectTimer = () => {
  // 컴포넌트 정의
  const [time, setTime] = useState(0); // 타이머의 현재 시간 나타내는 상태 변수, 초기값 0
  const [isRunning, setIsRunning] = useState(false); // 타이머가 실행중인지 확인하는 상태 변수, 초기값 false

  useEffect(() => {
    // useEffect 훅 사용
    // isRunning 이 true 이면 1초마다 time State 를 1씩 증가
    if (isRunning) {
      const timeoutId = setTimeout(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      // javascript 내장 함수, 지정된 시간이 지난 후 콜백 함수 실행, 두번째 인자는 지연 시간 : 1000 밀리초=1초

      // time 이 10이라면
      if (time === 10) {
        // isRunning 을 false 로 변경
        setIsRunning(false);
        // time 을 0으로 변경
        setTime(0);
        // timeoutId 를 clearTimeout, javascript 내장 함수
        clearTimeout(timeoutId); // 타이머 정리
      }

      // 컴포넌트 언마운트, isRunning 이 false 이면 clearTimeout
      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isRunning, time]); // isRunning이나 time이 변경될 때마다 useEffect 훅이 다시 실행

  // Start 버튼 클릭 시 실행할 함수
  const handleStart = () => {
    setIsRunning(true);
  };

  return (
    <div>
      {isRunning ? (
        <>
          <h1>Time: {time} seconds</h1>
          <h2>남은 시간 : {10 - time}</h2>
        </>
      ) : (
        <button onClick={handleStart}>타이머 시작</button>
      )}
    </div>
  );
};

export default UseEffectTimer;
