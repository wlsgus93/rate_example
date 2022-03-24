import React from "react";
import { useHistory, useParams } from "react-router-dom";
// import Main from "./main";

const Review = (props) =>
{   const history = useHistory();
    const params= useParams();
    console.log(params);
    const [rate,setRate]=React.useState(0);
    // console.log(props);
    return (

        <div style={{
            maxWidth: "350px",
            width: "80vw",
            height: "90vh",
            margin: "5vh auto",
            padding: "5vh 4vw",
            border: "1px solid #ddd",
            boxSizing: "border-box",
            borderRadius: "5px",
          }} className="main_view">
            <h3 style={{textAlign:"center"}}>
                  <span>{params.week_day}요일</span> 평점 남기기
            </h3>

            <div
                style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "1rem 0",
                width: "100%",
            }}>
                {Array.from({ length: 5 }, (item, idx) => {
                return (
                <div
                    key={idx}
                    onClick={() => {
                  setRate(idx + 1);
                }}
                    style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    backgroundColor: rate < idx + 1 ? "#ddd" : "#ffeb3b",
                    }}
                >
                
                        
                </div>
                
                        );
                })}
                
            
            </div>
            <button
          style={{
            
            width: "100%",
            backgroundColor: "purple",
            border: "none",
            borderRadius: "5px",
            padding: "1rem",
            margin : "20px auto",
            color: "#fff",
          }}
            onClick={() => {
          
            history.goBack();
          }}
        >
          평점 남기기
        </button>
        </div>);
    
    // <div onClick={() =>{
    //     props.history.push("/")
    // }}>개 화면입니다!</div>);
};

export default Review;