import { Link } from "react-router-dom";
import Header from "./Header";

export default function SelectPage() {
    return(
        <div>
            <Header/>
            <div className="setcenter">
                <button className="button" style={{height:"100px", fontSize:"40px", marginTop:"100px"}}><Link to="/mycheckpage" style={{textDecoration:"none", color:"black"}}>내 이용량 확인</Link></button>
                <button className="button" style={{height:"100px", fontSize:"40px", marginTop:"100px"}}><Link to="/actionpage" style={{textDecoration:"none", color:"black"}}>생활 속 탄소저감 실천</Link></button>
            </div>
        </div>
    );
}