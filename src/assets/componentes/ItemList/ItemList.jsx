import Item from "../item/item"
import classes from "../ItemList/itemList.module.css"
const ItemList =({productos})=>{
    return(
        <div className={classes.container}>
            {
            productos.map(producto=>{
               return(
                <Item key={producto.id} {...producto}/>
               )
            })
            }
        </div>
    )
     
}

export default ItemList