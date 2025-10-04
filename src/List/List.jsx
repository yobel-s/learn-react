import PropTypes from 'prop-types'
import './List.css';

function List(props){

    // const fruits =  [{id: 1, name: "apple", calories: 95}, 
    //                  {id: 2, name: "orange", calories: 45}, 
    //                  {id: 3, name: "banana", calories: 105}, 
    //                  {id: 4, name: "coconut", calories: 159}, 
    //                  {id: 5, name: "pineapple", calories: 37}];

    const category = props.category;
    const itemList = props.items;
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETHICAL 
    // fruits.sort((a, b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETHICAL
    // fruits.sort((a, b) => a.calories - b.calories); // NUMERIC ORDER
    // fruits.sort((a, b) => b.calories - a.calories); // REVERSE NUMERIC ORDER

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100); // lowcalories food filter
    //const highCalFruits = fruits.filter(fruit => fruit.calories >= 100); // highcalories food filter

    // const listItems = fruits.map(fruit =>   <li key={fruit.id}>
    //                                         {fruit.name}: &nbsp;
    //                                         <b>{fruit.calories}</b></li>
    // );

    // const listItems = lowCalFruits.map(lowCalFruits => {
    //     return <li key={lowCalFruits.id}>
    //                {lowCalFruits.name}: &nbsp;
    //                <b>{lowCalFruits.calories}</b></li>
    // });

    // const listItems = highCalFruits.map(highCalFruits =>    <li key={highCalFruits.id}>
    //                                                         {highCalFruits.name}: &nbsp;
    //                                                         <b>{highCalFruits.calories}</b></li>
    // );

    const listItems = itemList.map(item =>  <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b></li>
    );

    // return(<ul>{listItems}</ul>); // unordered list
    // return(<ol>{listItems}</ol>); // ordered list

    return( <>
                <h3 className="list-category">{category}</h3>
                <ol className="list-items">{listItems}</ol>
            </>);    // ordered list
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, 
                                              name: PropTypes.string,
                                              calories: PropTypes.number
    }))
}
List.defaultProps = {
    category: "Category",
    items: [],
}
export default List;