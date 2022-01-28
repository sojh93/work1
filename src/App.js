import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";

// Main 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];
import Main from "./Main";
import Detail from "./Detail";
import DayBox from "./component/DayBox";



function App() {
  const [list, setList] = React.useState(["월", "화", "수", "목", "금", "토", "일"]);
const text = React.useRef(null);

const addDayBox = () => {
  // 스프레드 문법! 기억하고 계신가요? :) 
  // 원본 배열 list에 새로운 요소를 추가해주었습니다.
  setList([...list, text.current.value]);
  }
<Route path="/" exact>


{/* 컴포넌트를 넣어줍니다. */}
{/* <컴포넌트 명 [props 명]={넘겨줄 것(리스트, 문자열, 숫자, ...)}/> */}
</Route>
<Route path="./Detail" component={Detail} />
<Route path="./Main" component={Main} />
</div>

);
};





// const Input = styled.div`
// max-width: 350px;
// min-height: 10vh;
// background-color: #fff;
// padding: 16px;
// margin: 20px auto;
// border-radius: 5px;
// border: 1px solid #ddd;
// `;

const wrap = styled.div`
max-width: 350px;
min-height: 80vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;

const Title = styled.h3`
color: black;
text-align: center;
`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

const ScoreCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background: ${(props) => (props.isActive ? "#ffeb3b" : "#dddddd")};
`;

const Button = styled.button`
    width: 100%;
    background-color: purple;
    border: none;
    border-radius: 5px;
    padding: 1rem;
    color: red;
`;
}

export default App;