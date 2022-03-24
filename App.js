import React from "react";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];

import styled from "styled-components";
import { BrowserRouter as Router,
Switch,
Route,
Link,
useHistory,
useLocation,
useParams} from "react-router-dom";

import Main from "./main";
import Review from "./Review";

function App() {

  const text = React.useRef(null);

  // const addBucketList = () => 
  // {
  // // 스프레드 문법! 기억하고 계신가요? :) 
  // // 원본 배열 list에 새로운 요소를 추가해주었습니다.
  // setList([...list, text.current.value]);
  // }
  return (
  <div className="App">
    <Route path="/" exact>
      <Main/>
    </Route>
    <Route path="/review/:week_day" exact>
      <Review />
    </Route>
  </div>
);
}



const Container = styled.div`
max-width: 500px;
width: 80vw;
height: 90vh;
margin: 5vh auto;
background-color: #fff;
padding: 5vh 0px;
border-radius: 5px;
box-sizing: border-box;
border: 1px solid #ddd;

`;

const Title = styled.h3`
color: slateblue;
text-align: center;

`;

const Line = styled.hr`
margin: 16px 0px;
border: 1px dotted #ddd;
`;

const ListStyle = styled.div`
display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  
`
const ItemStyle = styled.div`
padding: 16px;
margin: 8px;
background-color: aliceblue;
`;


export default App;