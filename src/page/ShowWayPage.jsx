import { selectway } from "./SelectWayPage";
import { ways } from "./SelectWayPage";
import Header from "./Header";

export default function ShowWayPage() {
    
    return(
        <div>
            <Header/>
            <div className="setcenter">
                <div className="main-title" style={{marginBottom:"-10px", marginTop:"30px"}}>{selectway} 실천 방법</div>
                <img src={'/img/boiler.png'} alt="보일러" style={{marginTop:"30px", height:"200px"}}/>
                <div>
                    {
                        ways[0].map((item,index) => {
                            return(
                                <div style={{fontWeight:"bold", fontSize:"30px", marginTop:"50px"}}>{ways[0][index]}</div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}