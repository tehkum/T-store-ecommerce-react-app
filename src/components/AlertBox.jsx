import { useEffect, useState } from "react";
import "./AlertBox.css";

export default function AlertBox({alertMessage, clicked}){
    const [ showAlert, setAlert ] = useState(false);

    useEffect(()=>{
        alertMessage.length && setAlert(true);
        setTimeout(()=>setAlert(false),3000)
    },[clicked, alertMessage.length])


    return<div className={showAlert ? "alert-box alert-show" : "alert-box alert-hidden"}>
        <p>{alertMessage}</p>
    </div>
}