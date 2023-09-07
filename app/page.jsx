import { Noto_Serif } from 'next/font/google'

const Noto = Noto_Serif({ subsets: ['latin'], weight: "400" })

function Home(){
  return (
    <div className="bg-secondary h-screen w-full">
      <h1 className={`text-black text-center text-3xl ${Noto.className}`}>Inicio</h1>
    </div>
  );
}

export default Home;