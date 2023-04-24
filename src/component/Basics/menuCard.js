import React from 'react'
import '../../resturant.css'

const menuCard = ({menuData}) => {
  return (
  <>
  <section>
 {
 menuData.map((curElem)=>{
  const {id,category,name,description,image}=curElem;
   return (
<>

<div className="card-container" key={id}>
    <div className="card">
        <div className="card-body">
            <span className="card-number card-circle subtle">
                {id}
            </span>
            <span className="card-author subtle">
               - {name}
            </span>
            <h2 className="card-title">{name}</h2>
            <span className="card-description subtle">{description}</span>
            <div className="card-read">Read</div>
            <img src={image} alt="image"/>
        </div>
        <span className="card-tag subtle">Order Now</span>
    </div>
  </div>
</>
   )


 })}
 </section>
  
  </>
  );
};

export default menuCard