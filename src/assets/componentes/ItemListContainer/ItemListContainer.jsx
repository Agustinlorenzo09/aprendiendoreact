import { useEffect,useState } from "react";
import { catalogo } from "../../../prodcutosMock";
import ItemList from "../ItemList/ItemList";
import classes from "./ItemListContainer.module.css"

const ItemListContainer =()=>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        catalogo().then((resolve)=>{
            setProducts(resolve)
        })
    })
    
    return(
        <div className={classes.container}>
            <ItemList productos={products} />
        </div>
    )
}
export default ItemListContainer