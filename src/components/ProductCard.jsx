import { IoIosHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { useState } from "react";
const ProductCard = ({product,price,image}) => {
    const [isLiked,setIsLiked]=useState(false);

    return (
    <div>
    <img src={image}></img>
    <div className="flex justify-center">
    <p>{product}</p>
    <p>  {price} frw</p> 
    </div>
    <div onClick={()=>setIsLiked(prevShow=>!prevShow)}
    className="flex justify-center">
    
    {isLiked ? <IoMdHeart />:<IoIosHeartEmpty />}
    
    
    
    </div> 
    </div>

  )
}

export default ProductCard