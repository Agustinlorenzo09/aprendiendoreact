const sillones = [
    {
        id:"1",
        nombre:`bohemia recto`,
        img:`https://www.poltron.com.ar/uploads/productos/1_Sofa1.jpg`,
        price: 200.000,

    },
    {
        id:"2",
        nombre:`bohemia cubo`,
        img:`https://www.poltron.com.ar/uploads/productos/2_Sofa.jpg`,
        price: 200.000,
    },
    {
        id:"3",
        nombre:`bohemia recto`,
        img:`https://www.poltron.com.ar/uploads/productos/1_Sofa1.jpg`,
        price: 200.000,

    },
    {
        id:"4",
        nombre:`bohemia cubo`,
        img:`https://www.poltron.com.ar/uploads/productos/2_Sofa.jpg`,
        price: 200.000,
    },
]
export const catalogo =()=>{
    return new Promise((resolve)=>{
       setTimeout(() => {
        resolve(sillones)
       }, 1000);
    })
}