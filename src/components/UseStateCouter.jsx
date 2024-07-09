// UseStateCouter.jsx

import React, { useState } from "react";

function UseStateCounter() {
  const [count, setCount] = useState(0);
  // count : 현재 상태 값, setCount : 상태 업데이트, useState(0) : 카운트 초기 값 0으로 설정
  return (
    <div>
      <p>제가 클릭을 {count} 번이나 했어욥 !!</p>
      {/* count는 현재 상태 값인count를 jsx 안에서 동적으로 텍스트 표시 */}
      <button onClick={() => setCount(count + 1)}>나를 눌러보세용❤️</button>
      {/* 버튼이 클릭될 때 setCount 함수를 호출하여 count 값을 1 증가 */}
    </div>
  );
}
export default UseStateCounter;
