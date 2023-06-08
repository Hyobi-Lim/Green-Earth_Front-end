import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from "./page/MainPage";
import SelectPage from "./page/SelectPage";
import MyCheckPage from "./page/MyCheckPage";
import ActionPage from "./page/ActionPage";
import UploadActionPage from "./page/UploadActionPage";
import SelectWayPage from "./page/SelectWayPage";
import ShowWayPage from "./page/ShowWayPage";
import MyResultPage from "./page/MyResultPage";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="selectpage" element={<SelectPage />} />
        <Route path="mycheckpage" element={<MyCheckPage />} />
        <Route path="actionpage" element={<ActionPage />} />
        <Route path="uploadactionpage" element={<UploadActionPage />} />
        <Route path="selectwaypage" element={<SelectWayPage />} />
        <Route path="showwaypage" element={<ShowWayPage />} />
        <Route path="myresultpage" element={<MyResultPage />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;