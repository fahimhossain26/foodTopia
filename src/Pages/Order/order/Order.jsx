
import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../../shared/Cover/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hookes/UseMenu';
import FoodCard from '../../../component/foodCard/FoodCard';
import OrderTab from '../orderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
const Order = () => {
  const categories = ['salad', 'pizza', 'dessert', 'soup', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter(item => item.category === 'dessert')
  const soup = menu.filter(item => item.category === 'soup')
  const pizza = menu.filter(item => item.category === 'pizza')
  const offered = menu.filter(item => item.category === 'offered')
  const drinks = menu.filter(item => item.category === 'drinks')
  const salad = menu.filter(item => item.category === 'salad')
  return (
    <div>
      <Helmet>
        <title>FoodTopia || Order</title>
      </Helmet>

      <Cover img={orderCover} title="Order Food"></Cover>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>dessert</Tab>
          <Tab>soup</Tab>
          <Tab>Drinks</Tab>

        </TabList>
        <TabPanel>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;