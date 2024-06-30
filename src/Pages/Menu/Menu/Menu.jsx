import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
// import drinksImg from '../../../assets/menu/menu-bg.png'
import PopularMenu from '../../Home/populerMenu/PopularMenu';
import useMenu from '../../../hookes/UseMenu';
import SerctionTitle from '../../../component/SerctionTitle';
import MenuCategory from '../menuCategory/MenuCategory';

const Menu = () => {
    const [menu]=useMenu();
    const dessert =menu.filter(item=>item.category==='dessert')
    const soup =menu.filter(item=>item.category==='soup')
    const salad =menu.filter(item=>item.category==='salad')
    const pizza =menu.filter(item=>item.category==='pizza')
    const offered =menu.filter(item=>item.category==='offered')
    const drinks =menu.filter(item=>item.category==='drinks')
    return (
        <div>
            <Helmet>
                <title>FoodTopia || Menu</title>
            </Helmet>
            {/* main cover */}
            <Cover img={menuImg} title='our menu'></Cover>
           <SerctionTitle subHeading="don't miss this " heading="Todays offer"></SerctionTitle>
          {/*  */}
           <MenuCategory items={offered}></MenuCategory>

           {/* desert */}
           <MenuCategory items={dessert}
           title="dessert"
           img={dessertImg}></MenuCategory>

           {/* pizza */}

           <MenuCategory items={pizza}
           title="pizza"
           img={pizzaImg}></MenuCategory>

            {/* soup */}

            <MenuCategory items={soup}
           title="soup"
           img={soupImg}></MenuCategory>


             {/* soup */}

             <MenuCategory items={salad}
           title="salad"
           img={saladImg}></MenuCategory>

           {/* drinks */}

           <MenuCategory items={drinks}
           title="drinks"
           img='https://i.postimg.cc/vmP6t1vc/fresh-cocktails-with-ice-lemon-lime-fruits-generative-ai-188544-12370.avif'></MenuCategory>
        </div>
    );
};

export default Menu;