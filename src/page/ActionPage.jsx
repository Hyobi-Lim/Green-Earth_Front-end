import { Link } from "react-router-dom";
import Header from "./Header";

export default function SelectPage() {
    return(
        <div>
            <Header/>
            <div className="setcenter">
                <button className="button" style={{height:"100px", fontSize:"40px", marginTop:"100px"}}><Link to="/uploadactionpage" style={{textDecoration:"none", color:"black"}}>실천 한 행동</Link></button>
                <button className="button" style={{height:"100px", fontSize:"40px", marginTop:"100px"}}><Link to="/selectwaypage" style={{textDecoration:"none", color:"black"}}>실천(절약) 방법</Link></button>
            </div>
        </div>
    );
}