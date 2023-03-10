import { useEffect, useState, useRef } from "react";
import {db} from './config'


import {collection, onSnapshot, query, where} from 'firebase/firestore'

export const useCollection=(c, _q)=>{
    const [documents, setDocuments]=useState(null);

    //set up query
    const q= useRef(_q).current//handle references

    useEffect(()=>{
        let ref= collection(db,c)

        if (q){//check if there is a query
            ref=query(ref,where(...q))
        }

        const unsub =onSnapshot(ref,(snapshot)=>{ //unsub function returned from onSnapShot to unsub when component unmounts
            let results=[]
            snapshot.docs.forEach(doc=>{
            results.push({id: doc.id, ...doc.data()})
            })
            setDocuments(results)
        })

        return ()=>unsub()
    },[c,q])
    return {documents}
}