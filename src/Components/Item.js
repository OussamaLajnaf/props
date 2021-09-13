
import React from 'react'
import { TableContainer,Table, TableHead, TableRow, TableCell,Button } from '@material-ui/core'
import PropTypes from 'prop-types';

const Item = ({Product,handouda,title}) => {
    const{name,price,imgSrc}=Product
    return (
        <div>
          <h6>{title}</h6>
             <TableContainer >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> 
            <Button  onClick={()=>handouda(name,price)}>info</Button>
            </TableCell>
            <TableCell align="center"> <img src={imgSrc} width={"220px"} height={"220px"}/> </TableCell>
            <TableCell align="center">{name}</TableCell>
            <TableCell align="center">{price}</TableCell>
           
          </TableRow>
        </TableHead>
       
      </Table>
    </TableContainer>
            
        </div>
    )
}
Item.defaultProps = {
  title:"Welcome to shopping online"
}
 
Item.propTypes = {
  handouda: PropTypes.array,
  Product: PropTypes.func
}

export default Item
