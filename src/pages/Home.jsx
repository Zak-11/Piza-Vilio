import React from 'react';
import {Categories, SortPopup,PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";



function Home () {
    const dispatch = useDispatch()
    const items=useSelector(({pizzas}) => pizzas.items)



    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Meat', 'Vegetarian', 'Grilled', 'Sharp', 'Closed']}/>
                <SortPopup
                    items={[
                        { name: 'популярности', type: 'popular' },
                        { name: 'цене', type: 'price' },
                        { name: 'алфавит', type: 'alphabet' },
                    ]}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((obj) => (
                    <PizzaBlock key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    );
}
export default Home;