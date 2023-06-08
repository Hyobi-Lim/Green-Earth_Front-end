import { Link } from "react-router-dom";
import { waydummy } from "../waydummy";
import Header from "./Header";

export const selectway=[];
export const ways=[];

export default function SelectWayPage() {
    
    const handleChange = (e) => {
        const { value } = e.target;
        selectway.length = 0;
        ways.length = 0;
        selectway.push(value);
        console.log(selectway[0]);
        for (let i = 0; i < waydummy.length; i++) {
            if(waydummy[i].id===selectway[0]) {
                ways.push(waydummy[i].ways);
            }
        }
        console.log(ways[0]);
        console.log(ways[0].length);
    };
    
    return(
        <div>
            <Header/>
            <div className="setcenter">
                <select name="ways" id="way-select" onChange={handleChange} style={{width:"450px", height:"100px", fontSize:"24px", marginTop:"100px"}}>
                    <option value="">--탄소 저감 실천 방법을 골라주세요--</option>
                    <option value="에어컨 냉방 온도 2℃ 높이기">에어컨 냉방 온도 2℃ 높이기</option>
                    <option value="에어컨 필터 청소">에어컨 필터 청소</option>
                    <option value="보일러 난방 온도 2℃ 낮추기">보일러 난방 온도 2℃ 낮추기</option>
                    <option value="보일러 내부 청소">보일러 내부 청소</option>
                    <option value="컴퓨터 절전 프로그램 사용">컴퓨터 절전 프로그램 사용</option>
                    <option value="에너지 효율 높은 가전제품 사용">에너지 효율 높은 가전제품 사용</option>
                    <option value="에너지 효율 높은 조명 사용">에너지 효율 높은 조명 사용</option>
                    <option value="재활용 가능한 유리병, 캔 분리배출">재활용 가능한 유리병, 캔 분리배출</option>
                    <option value="절수 기기 사용">절수 기기 사용</option>
                    <option value="전자 영수증 받기">전자 영수증 받기</option>
                    <option value="종이타월 대신 손수건 사용">종이타월 대신 손수건 사용</option>
                    <option value="개인 텀블러 사용">개인 텀블러 사용</option>
                    <option value="장바구니 사용">장바구니 사용</option>
                </select>
                <button className="button" style={{height:"100px", fontSize:"40px", marginTop:"100px"}}><Link to="/showwaypage" style={{textDecoration:"none", color:"black"}}>탄소 저감 실천 방법 보러가기</Link></button>
            </div>
        </div>
    );
}