import React, { useEffect, useState } from 'react';
import SerctionTitle from '../../../component/SerctionTitle';
import MenuItem from '../../../shared/menuitem/MenuItem';
import useMenu from '../../../hookes/UseMenu';

const PopularMenu = () => {
    const [menu]=useMenu();
    const popular =menu.filter(item=>item.category==='popular')
    // const [menu,setMenu]=useState([]);
    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         const popularItems=data.filter(item=>item.category==='popular');
    //         setMenu(popularItems)})
    // }
    
    // ,[])
    return (
       <section className='mb-10'>
        <SerctionTitle
        heading={'from our menu'}
        subHeading={'popular Item '}
        ></SerctionTitle>
   <div className='grid md:grid-cols-2 gap-10'>
    {
        popular.map(item=> <MenuItem
        key={item._id}
        item={item}
        ></MenuItem>)
    }
   </div>

       </section>
    );
};

export default PopularMenu;