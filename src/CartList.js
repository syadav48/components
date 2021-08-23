import React,{useState} from 'react'

function CartList() {
    const [cart, setCart] = useState(['corn', 'potato']);
    const saveInput = (e) => {
        return setCart(e.target.value);
    }
    const addNewItem = (e) => {
        return cart.push(e.target.value);
    }
    return (
        <div>
            <input type='text'
                   onChange={saveInput} 
            />
            <button onClick={addNewItem}>Add Item</button>
            <ol>
            {cart.map((subItem, subIndex) => {
                return <li key={subIndex}>{subItem}</li>
            })}
            </ol>
        </div>
    )
}

export default CartList;
