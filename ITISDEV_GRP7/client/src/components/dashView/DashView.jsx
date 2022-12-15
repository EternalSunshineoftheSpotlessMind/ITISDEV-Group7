import DashItem from "../dashItem/DashItem";
import "./dashView.css"
import { useState } from "react";
import { useMemo } from "react";

export default function DashView({invent}) {
    const [srt,setSort] = useState(true);

    const filteredItems = useMemo(() =>(
         invent.sort((a,b) => {
            if(srt){
                if(a.itemSupply<b.itemSupply){
                    return -1;
                }
                    return 1;
            }else{
                if(a.itemSupply>b.itemSupply){
                    return -1;
                }
                    return 1;
            }

        })
    ), [srt,invent])

    function onSort(e){
        e.preventDefault()
        console.log("aw")
        setSort(!srt)
      }
  return (
    <div className="dashview">
        <button className={srt?"dashviewButtonAsc":"dashviewButtonDes"} onClick={onSort}>{srt?"Ascending":"Descending"}</button>
        {filteredItems.map((i)=>(
        <DashItem item={i}/>
      ))}
    </div>
  )
}
