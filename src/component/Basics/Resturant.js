import React, { useState } from 'react'
import Menu from "./menuApi.js"
import MenuCard from "./menuCard"
import Navbar from '../Navbar.js';
const uniqueList=[...new Set(Menu.map((curElem)=>{
 return curElem.category;

})
),"All",
];

const Resturant = () => {
 const [menuData,setMenuData] =useState(Menu);
 const[menuList,setMenulist]=useState(uniqueList);
 const filteritem=(category)=>{

  if(category==="All")
  {
    setMenuData(Menu);
    return;
  }
const updatedList=Menu.filter((curElem)=>{
 return curElem.category===category;

});
    setMenuData(updatedList)
 };
 //console.log(menuData);
  return (
  <> 
  <Navbar filteritem={filteritem} menuList={menuList}/>
  <MenuCard menuData={menuData}/>
  </>
  );
};

export default Resturant