import { useEffect, useState, useRef } from "react";
import {db} from './config'
import {doc, onSnapshot,} from 'firebase/firestore'

export const useDocument=(c,d)=>{
    const [document, setDocument]=useState(null);
    useEffect(()=>{
        const unsub = onSnapshot(doc(db, c, d), (doc) => {
            console.log("Current data: ", doc.data());
            setDocument(doc.data())
        });
        return ()=>unsub()
    },[c,d])
    return {document}
}