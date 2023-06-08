import { Link } from "react-router-dom";
import Header from "./Header";

export default function MyCheckPage() {
    return(
        <div>
            <Header/>
            <div className="setcenter">
                <div style={{display:"flex"}}>
                    <div className="main-title" style={{marginTop:"30px"}}>나의 총 탄소 사용량은</div>
                    <div style={{height:"40px", width:"150px", marginTop:"70px", margin:"65px 30px", border:"5px solid green", borderRadius:"5px"}}></div>
                    <div className="main-title" style={{marginTop:"30px"}}>입니다.</div>
                </div>
                <div style={{display:"flex"}}>
                    <div className="main-title">서울시 평균 사용량보다</div>
                    <div style={{height:"40px", width:"150px", marginTop:"70px", margin:"35px 30px", border:"5px solid green", borderRadius:"5px"}}></div>
                    <div className="main-title">덜 사용하였습니다.</div>
                </div>
                <div className="main-title" style={{fontStyle:"normal"}}>⬇️</div>
                <div style={{display:"flex"}}>
                    <div className="main-title">현재 나의 탄소 온도는</div>
                    <div style={{height:"40px", width:"150px", marginTop:"70px", margin:"35px 30px", border:"5px solid green", borderRadius:"5px"}}></div>
                    <div className="main-title">°C입니다.</div>
                </div>
                <div style={{display:"flex"}}>
                    <button className="button"><Link to="/" style={{textDecoration:"none", color:"black"}}>내가 실천한 행동들</Link></button>
                    <div style={{margin:"0px 30px"}}></div>
                    <button className="button"><Link to="/" style={{textDecoration:"none", color:"black"}}>0°C에 도달하기까지</Link></button>
                </div>
            </div>
        </div>
    );
}