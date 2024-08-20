import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";



const Restramenu=()=>{
    const[resinfo,setresinfo]=useState([])
    const {resId}=useParams()
    useEffect(()=>{
        fetchmenu();
    },[])

    const fetchmenu=async ()=>{
          const menudata=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId="+ resId +"&catalog_qa=undefined&submitAction=ENTER")
          const json=await menudata.json();
          console.log(json.data)
          setresinfo(json.data)

    }
    if(resinfo.length===0){
        return(
            <h1>Loading!</h1>
        )
    }
  const { itemCards }=resinfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card || resinfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    console.log(itemCards)
      return (
        <div>
          <h1>Menu</h1>
          { <ul>
            {itemCards.map((item, index) => (
              <li key={index}>{item.card.info.name}: ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</li>
            ))}
          </ul> }
        </div>
      );
}
export default Restramenu;