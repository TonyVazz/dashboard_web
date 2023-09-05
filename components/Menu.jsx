import Link from "next/link";
import { Noto_Serif, Outfit } from 'next/font/google'

const Noto = Noto_Serif({ subsets: ['latin'], weight: "400" })
const outfit = Outfit({ subsets: ['latin'], weight: "300" });

const menuRoutes = [
    {
        ruta: '/',
        nombre: '🏠 Inicio'
    },
     {
        ruta: '/corporal',
        nombre: '💪 Composicion corporal'
     },
     {
      ruta: '/about',
      nombre: '📙 Acerca de'
  },
    
]


function Menu(){
    return (
      <div className="w-[20%] bg-primario  border-r-2 border-tercero">
        <h1 className={`pb-2 text-center text-2xl text-tercero ${Noto.className}`}>Menu</h1>
        <ol>
          {
            menuRoutes.map((menu, index) =>(
            <li className={`pt-2 pb-2  border-t-2 text-center text-tercero border-tercero hover:bg-secundario ${outfit.className}`} key={index}>
             <Link href={menu.ruta}>{menu.nombre}</Link>   
            </li>
          ))
          }
        </ol>
      </div>
    );
  }
  
  export default Menu;