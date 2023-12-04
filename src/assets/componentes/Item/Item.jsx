import classes from "./item.module.css"
const Item = ({img,nombre,price})=>{
    return(
        <div className={classes.container}>
            <img src={img} className={classes.img} />
            <h2 className={classes.info}>{nombre}</h2>
            <h2 className={classes.info}>{price}</h2>
        </div>
    )
}

export default Item