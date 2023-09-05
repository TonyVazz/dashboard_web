import { Noto_Serif, Outfit } from 'next/font/google'

const Noto = Noto_Serif({ subsets: ['latin'], weight: "400" });
const outfit = Outfit({ subsets: ['latin'], weight: "300" });

export default (About) => {
    return (
    <div className="bg-secundario h-screen w-full">
        <div className='h-screen max-w-md ml-[317px] bg-[#fff2d1] rounded-2xl shadow-black shadow-2xl'>
        <img className="h-[23%] ml-[38%]" src="https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png" alt="" />
        <h1 className={`mt-3 text-center text-2xl ${Noto.className}`}>Instituto tecnolgico de ensenada</h1>
        <h2 className={`text-center text-xl ${outfit.className} mt-16`}>Antonio Vazquez Saucedo</h2>
        <h3 className={`text-center text-lg ${outfit.className}`}>Ingeniero En Sistemas Computacionales</h3>
        <img className="h-[18%] ml-[166px] p-0" src="https://png.pngtree.com/png-clipart/20221003/original/pngtree-black-line-border-png-image_8653828.png" alt="" />
        <h3 className={`text-center text-lg ${outfit.className} text-justify pl-2 pr-2`}>Forjo un camino en sistemas computacionales por la demanda tecnologica. 
        mis objetivos son destacar como programador para asi asegurar un futuro sereno para mi familia.</h3>
        <h3 className={`text-center text-xl ${outfit.className} pt-3 text-secundario`}>Email: al19760723@ite.edu.mx</h3>
        
        </div>
        
    </div>
    );
};