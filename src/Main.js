import React from "react";
import styled from "styled-components";

function Main () {
    return(
        <h3 class="title">내 일주일 평가</h3>
    );
};

function App() {
    
    
    const list = ["월", "화", "수", "목", "금", "토" ,"일"];
    var i = 0;
    while(i < list.length) {
      list.push(<li><a href={"/Main/"+list[i]}></a></li>);
    };
    
    );
    
};

const title = styled.h3`
max-width: 350px;
min-height: 80vh;
background-color: #fff;
padding: 16px;
margin: 20px auto;
border-radius: 5px;
border: 1px solid #ddd;
`;



export default Main;