// UseStateName.jsx

import React, { useState } from "react";

function UseStateName() {
  const [name, setName] = useState("머쨍이사자");

  return (
    <div>
      <h1>안녕하세요, {name} 입니다.</h1>
      <button
        onClick={() =>
          setName(name === "머쨍이사자" ? "안머쨍이사자" : "머쨍이사자")
        }
      >
        {/* 삼항 연산자 이용해서, 조건에 따라 상태값 변경 */}
        이름 변경
      </button>
    </div>
  );
}

export default UseStateName;
