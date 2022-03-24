import React from "react";
import { useHistory } from "react-router-dom";
// BucketList 컴포넌트를 import 해옵니다.
// import [컴포넌트 명] from [컴포넌트가 있는 파일경로];

import styled from "styled-components";

function Main() {

  const [list, setList] = React.useState(["영화관 가기", "매일 책읽기", "수영 배우기"]);
  const text = React.useRef(null);
  const history=useHistory();
  const today = new Date();
  const day=today.getDay();
  console.log(day)
  const day_text_dict = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };
//   console.log(day_text_dict["3"]);

//   console.log(
//     "요일이 한글로 바뀌었나 확인해봐야지! : ",
//     Object.keys(day_text_dict).map((_d, idx) => day_text_dict[_d])
//   );
  const week_days=Object.keys(day_text_dict).map((_d, idx) => day_text_dict[_d]);
//   console.log(week_days)

  const week_rates=  week_days.map( (value,idx) => {return {day:value,
rate: Math.floor(Math.random()*(Math.floor(6)-Math.ceil(0))+Math.ceil(0))
}}
  );
  console.log(week_rates)
  return (
  <div style={{
    maxWidth: "350px",
    width: "80vw",
    height: "90vh",
    margin: "5vh auto",
    padding: "5vh 0",
    border: "1px solid #ddd",
    boxSizing: "border-box",
    borderRadius: "5px",
  }} className="main_view">
      <h3 style={{textAlign:"center"}}>내 일주일은?</h3>
      {week_rates.map((w, idx) => {
          return (
            <div
              key={`week_day_${idx}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
              }}
            >
              <p style={{ margin: "0 0.5rem 0 0", fontWeight: "bold" }}>
                {w.day}
              </p>
              {Array.from({ length: 5 }, (item, idx) => {
                
                return (
                  <div
                    key={idx}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "30px",
                      margin: "5px",
                      backgroundColor: w.rate < idx ? "#ddd" : "#ffeb3b",
                    }}
                  ></div>
                );
              })}
              <div
                style={{
                  appearance: "none",
                  backgroundColor: "transparent",
                  borderColor: "purple",
                  width: "0",
                  height: "0",
                  borderTop: "1rem solid transparent",
                  borderBottom: "1rem solid transparent",
                  borderLeft: "1.6rem solid black",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => {
                  // 요일 별 페이지로 이동해요!
                  history.push(`/review/${w.day}`);
                }}
              ></div>
            </div>
          );
            })}
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


export default Main;