import React from "react";
import ProductCard from "../Components/productcard";
import { Productlist } from "../Data/productlist";

export default function Dashboard(){
    return(
        <div className="d-flex flex-wrap justify-content-center p-3">
            {Productlist.map((product)=><ProductCard {...product} key={product.id}/>)}
        </div>
    )
}