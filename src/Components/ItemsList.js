import React from 'react'
import Item from './Item'

const ItemsList = ({Productlist,handel}) => {
    
    return (
       <div>
        {
                Productlist.map(
                    (el,i)=>(
                        <Item Product={el} key={i} handouda={handel}/>
                    )
                )
            }
          </div> 
    )
}

export default ItemsList
