import React from 'react';
import {Categories, SortPopup,PizzaBlock} from "../components";



function Home ({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Meat', 'Vegetarian', 'Grilled', 'Sharp', 'Closed']}/>
                <SortPopup items={['popularity', 'price', 'alphabet']}/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                { items.map((obj) =>(
                    <PizzaBlock key={obj.id} {...obj}/>
                    )) }


            </div>
        </div>
    );
}

export default Home;