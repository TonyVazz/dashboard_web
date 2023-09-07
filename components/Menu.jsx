import Link from "next/link";
import { Noto_Serif, Outfit } from 'next/font/google'

const Noto = Noto_Serif({ subsets: ['latin'], weight: "400" })
const outfit = Outfit({ subsets: ['latin'], weight: "300" });
//make the routes
const menuRoutes = [
    {
        ruta: '/',
        nombre: '🏠 Home'
    },
     {
        ruta: '/corporal',
        nombre: '💪 Body composition'
     },
     {
      ruta: '/about',
      nombre: '📙 About me'
  },
    
]

//use the routes
function Menu(){
    return (
      <div className="w-[20%] bg-primary  border-r-2 border-tertiary">
        <h1 className={`pb-2 text-center text-2xl text-tertiary ${Noto.className}`}>Menu</h1>
        <ol>
          {
            menuRoutes.map((menu, index) =>(
            <li className={`pt-2 pb-2  border-t-2 text-center text-tertiary border-tertiary hover:bg-secondary ${outfit.className}`} key={index}>
             <Link href={menu.ruta}>{menu.nombre}</Link>   
            </li>
          ))
          }
        </ol>
      </div>
    );
  }
  
  export default Menu;