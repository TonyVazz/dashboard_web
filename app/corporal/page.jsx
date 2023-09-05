'use client'
import { Noto_Serif, Outfit } from 'next/font/google'
import React, {useState} from 'react'
import {ChartComp} from '../../components/ChartComp.jsx';
import Inputs from '../../components/inputs.jsx';
import Table from '../../components/table.jsx';


const Noto = Noto_Serif({ subsets: ['latin'], weight: "400" })
const outfit = Outfit({ subsets: ['latin'], weight: "300" });


export default (About) => {
        const [genero, setGenero] = useState('');
        const [peso, setPeso] = useState('');
        const [talla, setTalla] = useState('');
        const [edad, setEdad] = useState('');
        const [bicipital, setBicipital] = useState('');
        const [tricipital, setTricipital] = useState('');
        const [subescapular, setSubescapular] = useState('');
        const [supraileaco, setSupraileaco] = useState('');
        const [biestiloideo, setBiestiloideo] = useState('');
        const [femur, setFemur] = useState('');
        const [densidad, setDensidad] = useState('');
        const [grasaCorp, setGrasaC] = useState('');
        const [masaOsea, setMasaO] = useState('');
        const [masaRes, setMasaR] = useState('');
        const [grasaCkg, setGrasaCkg] = useState('');
        const [masaOpor, setMasaOpor] = useState('');
        const [masaRpor, setMasaRpor] = useState('');
        const [masaMus, setMasaMus] = useState('');
        const [masaMusKg, setMasaMusKg] = useState('');
    
    const handleGenero = (e) =>{
        setGenero(e.target.value);
    }
    const handlePeso = (e) =>{
        setPeso(e.target.value);
    }
    const handleTalla = (e) =>{
        setTalla(e.target.value);
    }
    const handleEdad = (e) =>{
        setEdad(e.target.value);
    }
    const handleBicipital = (e) =>{
        setBicipital(e.target.value);
    }
    const handleTricipital = (e) =>{
        setTricipital(e.target.value);
    }
    const handleSubescapular = (e) =>{
        setSubescapular(e.target.value);
    }
    const handleSupraileaco = (e) =>{
        setSupraileaco(e.target.value);
    }
    const handleBiestiloideo = (e) =>{
        setBiestiloideo(e.target.value);
    }
    const handleFemur = (e) =>{
        setFemur(e.target.value);
    }

    const calcularDensidad = () => {
        const sumapliegues = parseFloat(bicipital)+parseFloat(tricipital)+parseFloat(subescapular)+parseFloat(supraileaco)

        const densidadtemp = genero === 'Hombre' ? 1.1765 - 0.0744 * Math.log10(sumapliegues) : 1.1567 - 0.0717 * Math.log10(sumapliegues);
        setDensidad(densidadtemp.toFixed(3));

        const grasa = (495 / parseFloat(densidadtemp)) - 450;
        setGrasaC(grasa.toFixed(2));

        const grasaCorporalKg = (grasa * peso) / 100;
        setGrasaCkg(grasaCorporalKg.toFixed(1));

        const masaO = ((Math.pow((Math.pow(talla, 2) * (femur / 100) * (biestiloideo / 100) * 400), 0.712)) * 3.02);
        setMasaO(masaO.toFixed(2));

        const masaR = 0.21 * peso;
        setMasaR(masaR);

        const masaOp = (masaO * 100) / peso;
        setMasaOpor(masaOp.toFixed(2));

        const masaRp = (masaR * 100) / peso;
        setMasaRpor(masaRp.toFixed(2));

        const masaMp = 100 - (grasa + masaOp + masaRp);
        setMasaMus(masaMp.toFixed(2));

        const masaMkg = (masaMp * peso) / 100;
        setMasaMusKg(masaMkg.toFixed(2));
            
    }
    const hadleSubmit = (e) => {
    e.preventDefault();
    
}
    return (
     
    <div className="bg-gradient-to-r from-primario to-secundario to-100% w-full">
        
        <h1 className={`mt-3 text-center text-3xl ${Noto.className} text-tercero`}>Composicion corporal</h1>
        
        
    <form onSubmit={hadleSubmit} action="">
        
    <div className='flex items-center justify-center mx-auto gap-16 border-2 pb-4 mt-5 rounded-2xl max-w-prose border-tercero'>
        <div className='text-center '> 
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Genero</h3>
        {/*<Inputs value={genero} onChange={handleGenero}/>*/}
        <select className='rounded-xl pl-2 pr-2 w-full pt-1 pb-1' name="genero" title='genero' value={genero} onChange={handleGenero}>
            <option>Selecciona tu genero</option>
            <option value="Hombre">Hombre</option>
            <option value="Mujer">Mujer</option>
        </select>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Peso</h3>
        <Inputs value={peso} onChange={handlePeso}/>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Talla</h3>
        <Inputs value={talla} onChange={handleTalla}/>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Edad</h3>
        <Inputs value={edad} onChange={handleEdad}/>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Biestiloideo</h3>
        <Inputs value={biestiloideo} onChange={handleBiestiloideo}/>
        </div>

        <div className='text-center'>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Bicipital</h3>
        <Inputs value={bicipital} onChange={handleBicipital}/>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Tricipital</h3>
        <Inputs value={tricipital} onChange={handleTricipital}/>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Subescapular</h3>
        <Inputs value={subescapular} onChange={handleSubescapular}/>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero`}>Supraileaco</h3>
        <Inputs value={supraileaco} onChange={handleSupraileaco}/>
        <h3 className={`mt-3 text-center text-lg ${outfit.className} text-tercero `}>Femur</h3>
        <Inputs value={femur} onChange={handleFemur}/>
        </div>

    </div>
        <div className='flex justify-center'> {/*boton*/}
            <input className='mt-4 border-2 rounded-2xl text-tercero border-tercero p-4 font-bold hover:bg-primario' type="submit" value={'Calcular'} onClick={calcularDensidad}/>
        </div>
        
    <div className='flex flex-row justify-center gap-16'>{/*este div es para juntar la tabla y el cuadro de resultado */}
        
        <div className='bg-tercero w-72 mt-5 rounded-xl  h-auto'>
            <p>Densidad corporal: {densidad}</p>
            <p>Grasa corporal: {grasaCorp}</p>
            <p>Masa osea {masaOsea}</p>
            <p>Masa residual: {masaRes}</p>
        </div> 
        <div className="mt-5 border-2 rounded-xl border-tercero"> {/*tabla */}
            <Table grasaCorp={grasaCorp} grasaCkg={grasaCkg} masaOpor={masaOpor} masaOsea={masaOsea}
                masaRpor={masaRpor} masaRes={masaRes} masaMus={masaMus} masaMusKg={masaMusKg}
            />
        </div> {/*tabla */}
    </div>{/*este div es para juntar la tabla y el cuadro de resultado */}
        
    <div className='w-[300px] mx-auto mt-4 bg-tercero rounded-xl'>{/*grafica */}
        <ChartComp porcentajes={{ grasaCorp, masaOpor, masaRpor, masaMus }} />
    </div>{/*grafica */}
        
    </form>
    </div>
    );
};