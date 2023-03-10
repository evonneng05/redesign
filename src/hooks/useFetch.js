import {useState, useEffect} from "react"

export const useFetch=(url)=>{
    const[data,setData]=useState(null)
    const [isPending, setIsPending]= useState(false)
    const [error, setError]= useState(null)

    useEffect(()=>{
        const controller= new AbortController()

        const fetchData= async()=>{
            setIsPending(true)
            try{
                const response= await fetch(url,{signal: controller.signal})
                if (!response.ok){//triggers for wrong url
                    throw new Error(response.statusText)
                }
                const json= await response.json()
                setIsPending(false)
                setData(json)
                setError(null)
            }catch (err){ //triggers for network errors
                if (err.name==="AbortError"){  //cleanup function triggered
                    console.log('the fetch was aborted')
                }else{
                    setIsPending(false)
                    setError('Could not fetch the data')
                    console.log(err.message)
                }
            }
        }
        fetchData()
        return()=>{ //triggered when the component useEffect is used on is unmounted
            controller.abort()
        }
    },[url])

    return {data: data, isPending: isPending, error: error}
}
