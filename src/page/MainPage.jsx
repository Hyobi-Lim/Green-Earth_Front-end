import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { TextField } from "@material-ui/core";
import Header from "./Header";

export default function MainPage() {

    const [account, setAccount] = useState({
        id: "",
        password: "",
    });
    
      //input에 입력될 때마다 account state값 변경되게 하는 함수
    const onChangeAccount = (e) => {
        setAccount({
          ...account,
          [e.target.name]: e.target.value,
        });
    };

    return(
        <div>
            <Header/>
            <div className="setcenter">
                <div className="main-title">로그인</div>
                <div>
                    <div container spacing={2}>
                        <div item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="id"
                                label="아이디를 입력해주세요"
                                name="id"
                                autoComplete="email" 
                                onChange={onChangeAccount}/>
                        </div>
                        <h6> </h6>
                        <div item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="password"
                                label="비밀번호를 입력해주세요"
                                name="password"
                                autoComplete="current-password" 
                                type="password"
                                onChange={onChangeAccount}/>
                        </div>
                        <div item xs={12} className="setcenter">
                            <button
                                className="button"
                                type="submit"
                                style={{marginBottom:"30px"}}
                            >
                                <Link to="/selectpage" style={{textDecoration:"none", color:"black"}}>로그인</Link>
                            </button>
                        </div>
                        <div className="setcenter">
                            <Link href="/" varient="body2" style={{textDecoration:"none", color:"black"}}>
                                <div className="setcenter" style={{textDecoration:"underline"}}>계정이 없습니까? 여기서 가입 해주세요.</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}