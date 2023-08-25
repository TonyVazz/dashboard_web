import Link from "next/link";

const menuRoutes = [
    {
        ruta: '/',
        nombre: 'Inicio'
    },
    {
        ruta: '/about',
        nombre: 'Acerca de'
    }
]


function Menu(){
    return (
      <div className="w-[20%] bg-[#4EAC51] h-screen">
        <h1>Menu</h1>
        <ol>
          {
            menuRoutes.map((menu, index) =>(
            <li key={index}>
             <Link href={menu.ruta}>{menu.nombre}</Link>   
            </li>
          ))
          }
        </ol>
      </div>
    );
  }
  
  export default Menu;