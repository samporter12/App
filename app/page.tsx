import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-red-500 min-h-screen flex flex-col items-center justify-center text-black">
    <h1 className="text-4xl font-bold mb-8">¿Qué vas a comer hoy?</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <Link href="https://www.facebook.com/cubanitosmifavorito/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="https://images.stockcake.com/public/f/4/c/f4cceda4-ede5-4ea3-bc2f-463908de693c_large/fast-food-feast-stockcake.jpg" 
            alt="Comida Rapida" 
            width={300} 
            height={300} 
            className="hover:opacity-80 transition-opacity rounded-lg"
          />
        </Link>
        <h2 className="text-xl font-semibold mt-4 text-center">Comida Rapida</h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <Link href="https://www.instagram.com/casacoreabogota/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="https://images.stockcake.com/public/3/5/0/3508f93a-05de-4bbe-b7ed-b7774f9803f6_large/korean-feast-gathering-stockcake.jpg" 
            alt="Comida coreana" 
            width={300} 
            height={300} 
            className="hover:opacity-80 transition-opacity rounded-lg"
          />
        </Link>
        <h2 className="text-xl font-semibold mt-4 text-center">Comida coreanat</h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <Link href="https://www.facebook.com/p/La-Piccola-Italia-100063544094817/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <Image 
            src="https://images.stockcake.com/public/e/0/8/e08a2a42-8645-4d03-bcff-de09679e521d_large/hearty-italian-pasta-stockcake.jpg" 
            alt="Comida Italiana" 
            width={300} 
            height={300} 
            className="hover:opacity-80 transition-opacity rounded-lg"
          />
        </Link>
        <h2 className="text-xl font-semibold mt-4 text-center">Comida Italiana</h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <Link href="https://www.facebook.com/TierraAztecaPasto/?locale=es_LA" target="_blank" rel="noopener noreferrer">
          <Image 
            src="https://images.stockcake.com/public/f/4/c/f4cceda4-ede5-4ea3-bc2f-463908de693c_large/fast-food-feast-stockcake.jpg" 
            alt="Comida Mexicana" 
            width={300} 
            height={300} 
            className="hover:opacity-80 transition-opacity rounded-lg"
          />
        </Link>
        <h2 className="text-xl font-semibold mt-4 text-center">Comida Mexicana</h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <Link href="https://www.instagram.com/bonsaipasto/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="https://images.stockcake.com/public/1/7/7/17701b40-55fb-477f-9802-cd68f807e381_large/sushi-preparation-art-stockcake.jpg" 
            alt="Comida Japonesa" 
            width={300} 
            height={300} 
            className="hover:opacity-80 transition-opacity rounded-lg"
          />
        </Link>
        <h2 className="text-xl font-semibold mt-4 text-center">Comida Japonesa</h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-4">
        <Link href="https://www.instagram.com/oishii.pasto/" target="_blank" rel="noopener noreferrer">
          <Image 
            src="https://images.stockcake.com/public/c/9/4/c94930a6-29c0-40d2-bd44-8dfdc85e6818_large/traditional-chinese-feast-stockcake.jpg" 
            alt="Comida China" 
            width={300} 
            height={300} 
            className="hover:opacity-80 transition-opacity rounded-lg"
          />
        </Link>
        <h2 className="text-xl font-semibold mt-4 text-center">Comida China</h2>
      </div>
    </div>
  </div>
);
}