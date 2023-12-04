import classes from'./navbar.module.css'
import { catalogo } from "../../../prodcutosMock";
const Navbar= ()=>{
    return(
        <div>
            <div className= {classes.container}>
             <img src="./../imagenes/lamartinalogo.jpg" alt="" srcset="" />
            <div>
            <nav className={classes.navContainer}>
            <a href="http://"className={classes.navItem}>living</a>
            <a href="http://"className={classes.navItem}>cocina</a>
            <a href="http://"className={classes.navItem}>categoria</a>
            <h4 className={classes.navItem}>usuario</h4>
            </nav>
            </div>
            </div>
            </div>
    )
}
export  default Navbar


