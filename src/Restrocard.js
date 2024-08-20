const Restrocard=({resdata})=>{
    const{name,cloudinaryImageId,cuisines,avgRating,costForTwo}=resdata?.info
    return (
        <div className="restrocard" >  
            <div className="resimage">
               <img className="restrologo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}></img>
               </div>
               <h2 style={{marginLeft:10}}>{name}</h2>
               <p style={{marginLeft:10,marginBottom:0,wordBreak:"break-word"}}>{cuisines.join(",")}</p>
               <div style={{display:"flex",alignItems:"center",marginBottom:0,marginTop:0}}  className="rating">
                <img style={{marginLeft:10,width:20,height:20,marginBottom:0}}src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGenF_VBi-3q4TH74Tmv0cU2F38L2L55-fg&s"></img>
               <p style={{marginLeft:10}}>{avgRating}</p>
               </div>
               <p style={{marginLeft:10,marginTop:0}}>{costForTwo}</p>

        </div>
    )
}
export default Restrocard;