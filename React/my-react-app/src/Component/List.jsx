import React from 'react'
import PropTypes from 'prop-types'
function List({
    category="Category",
    items=[],
}) {
    // const fruits = [{ id: 1, name: "apple", calories: 95 },
    // { id: 2, name: "orange", calories: 45 },
    // { id: 3, name: "banana", calories: 105 },
    // { id: 4, name: "coconut", calories: 159 },
    // { id: 5, name: "pineapple", calories: 37 }]

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); //Alphabetical
    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); //rev Alphabetical
    // fruits.sort((a,b)=> a.calories-b.calories); //Numeric
    // fruits.sort((a,b)=> b.calories-a.calories); //rev Numeric

    // const lowcalfruits=fruits.filter(fruit=>fruit.calories<100)
    // const highcalfruits=fruits.filter(fruit=>fruit.calories>100)


    // const listItem = fruits.map((fruit) => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>)
    // const listItem = lowcalfruits.map((lowcalfruits) => <li key={lowcalfruits.id}>{lowcalfruits.name}: &nbsp; <b>{lowcalfruits.calories}</b></li>)
    // const listItem = highcalfruits.map((highcalfruits) => <li key={highcalfruits.id}>{highcalfruits.name}: &nbsp; <b>{highcalfruits.calories}</b></li>)

    const itemList=items;
    // const category=props.category;
    const listItem = itemList.map((item) => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    return (
        <>
        <h3 className='list-category'>{category}</h3>
        <ol className='list-item'>{listItem}</ol>
        </>
    )


    
}

List.propTypes={
    category:PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        calories:PropTypes.number,
    }))
}

export default List
