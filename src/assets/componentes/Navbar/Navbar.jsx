import classes from'./navbar.module.css'
const Navbar= ()=>{
    return(
        <div>
            <div className= {classes.container}>
             <img src="https://scontent.cdninstagram.com/v/t51.2885-19/350860415_804549984624090_9113172392647762730_n.jpg?stp=dst-jpg_s80x80&_nc_cat=108&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=PQL63Tf2r9sAX9AtTtd&_nc_ht=scontent.cdninstagram.com&oh=00_AfD382QcNKliBsUwbm657eL0qMELzvpNRLWvWiIr2SV-Lw&oe=656C10E2" alt=""  className={classes.logo}/>
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


