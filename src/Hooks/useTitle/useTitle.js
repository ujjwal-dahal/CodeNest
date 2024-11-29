import { useEffect } from "react";


export default function useTitle(titleName){

  useEffect(()=>{
    document.title = titleName;
  },[])

  return null;

}