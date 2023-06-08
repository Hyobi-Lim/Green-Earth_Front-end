import Header from "./Header";
import { actionway } from "./UploadActionPage";
import { actionreduction } from "./UploadActionPage";
import { actiontree } from "./UploadActionPage";
import { actioneffect } from "./UploadActionPage";

export default function MyResultPage() {
    return(
        <div>
            <Header/>
            <div className="setcenter" style={{marginTop:"30px"}}>
                <div className="main-title">실천 행동으로 줄어든</div>
                <div className="main-title">탄소저감량은 {actionreduction[0]}입니다!</div>
                <div style={{fontWeight:"bold", fontSize:"20px", marginTop:"30px"}}>이 행동을 일년동안 꾸준히 한다면?</div>
                <div style={{fontWeight:"bold", fontSize:"20px", marginTop:"30px"}}>⬇️</div>
                <div style={{fontWeight:"bold", fontSize:"20px", color:"green", marginTop:"30px"}}>{actiontree[0]}그루의 나무를 심는 효과</div>
                <div style={{fontWeight:"bold", fontSize:"20px", color:"green", marginTop:"30px"}}>{actioneffect[0]}의 경제적 효과</div>        
            </div>
        </div>
    );
}