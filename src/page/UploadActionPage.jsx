import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import { actiondummy } from "../actiondummy";

export const actionway=[];
export const actionreduction=[];
export const actiontree=[];
export const actioneffect=[];

export default function UploadActionPage() {

    const handleChange = (e) => {
        const { value } = e.target;
        actionway.length = 0;
        actioneffect.length = 0;
        actionway.push(value);
        for (let i = 0; i < actiondummy.length; i++) {
            if(actiondummy[i].id===actionway[0]) {
                actionreduction.push(actiondummy[i].reduction);
                actiontree.push(actiondummy[i].tree);
                actioneffect.push(actiondummy[i].effect);
            }
        }
        console.log(actionway[0]);
        console.log(actionreduction[0]);
        console.log(actiontree[0]);
        console.log(actioneffect[0]);
    };

    const [imageSrc, setImageSrc] = useState(null);

    const onUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        return new Promise((resolve) => { 
            reader.onload = () => {	
                setImageSrc(reader.result || null); // 파일의 컨텐츠
                resolve();
            };
        });
    }
    
    return(
        <div>
            <Header/>
            <div className="setcenter">
                <div className="main-title" style={{color:"green", marginTop:"30px"}}>탄소 저감을 위해 실천한 행동</div>
                <div className="main-title">잘 나오게 찍어보세요!</div>
                <input 
                    accept="image/*" 
                    multiple type="file"
                    onChange={e => onUpload(e)}
                />
                <br/>
                <img 
                    width={'300px'} 
                    src={imageSrc} 
                />
                <div style={{marginTop:"30px", fontWeight:"bold", fontSize:"20px"}}>⬇️ 탄소 저감을 위해 실천한 행동에 알맞는 것에 체크해주세요 ⬇️</div>
                <div style={{display:"flex"}}>
                    <button className="button">#탄소절감</button>
                    <div style={{margin:"0px 20px"}}></div>
                    <select name="actions" id="action-select" onChange={handleChange} style={{width:"450px", height:"48px", marginTop:"30px", fontSize:"20px"}}>
                        <option value="">--탄소 저감 실천 행동을 골라주세요--</option>
                        <option value="에어컨 냉방 온도 2℃ 높이기">에어컨 냉방 온도 2℃ 높이기</option>
                        <option value="보일러 난방 온도 2℃ 낮추기">보일러 난방 온도 2℃ 낮추기</option>
                        <option value="에어컨 필터 청소">에어컨 필터 청소</option>
                        <option value="보일러 내부 청소">보일러 내부 청소</option>
                        <option value="컴퓨터 절전 프로그램 사용">컴퓨터 절전 프로그램 사용</option>
                        <option value="에너지 효율 높은 TV 사용">에너지 효율 높은 TV 사용</option>
                        <option value="에너지 효율 높은 세탁기 사용">에너지 효율 높은 세탁기 사용</option>
                        <option value="에너지 효율 높은 냉장고 사용">에너지 효율 높은 냉장고 사용</option>
                        <option value="에너지 효율 높은 전기밥솥 사용">에너지 효율 높은 전기밥솥 사용</option>
                        <option value="에너지 효율 높은 조명 사용">에너지 효율 높은 조명 사용</option>
                        <option value="재활용 가능한 유리병, 캔 분리배출">재활용 가능한 유리병, 캔 분리배출</option>
                        <option value="절수 기기 사용">절수 기기 사용</option>
                        <option value="전자 영수증 받기">전자 영수증 받기</option>
                        <option value="종이타월 대신 손수건 사용">종이타월 대신 손수건 사용</option>
                        <option value="개인 텀블러 사용">개인 텀블러 사용</option>
                        <option value="장바구니 사용">장바구니 사용</option>
                    </select>
                </div>
                <button className="button"><Link to="/myresultpage" style={{textDecoration:"none", color:"black"}}>확인</Link></button>
            </div>
        </div>
    );
}