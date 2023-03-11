import { useEffect, useState, useRef } from "react";
import {db} from './config'
import {doc, onSnapshot,getDoc} from 'firebase/firestore'

export const  useDocument=async(c,d)=>{
    const [document, setDocument]=useState(null);
    const docRef= doc(db, c, d)
    const docSnap= await getDoc(docRef)
    docSnap.exists()?setDocument(docSnap.data()): setDocument(null);
    return {document}
}