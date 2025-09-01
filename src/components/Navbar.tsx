import Link from 'next/link'

export default function Navbar(){

    return ( 

        <nav className='sticky top-0 z-50  bg-LAzcul/80 backdrop-blur-lg border-b border-HMorado py-4 px-6 flex justify-between items-center shadow-md'>

            <div>

                <h1 className='text-3xl text-SRojo font-phantom tracking-wider'>
                    Phantom Full Stack
                </h1>
                <p className='text-xs text-HMorado italic'>
                    “El conocimiento es nuestra máscara.” 
                </p>

            </div>
            

            <div className='space-x-4 text-lg font-fuentes'>

                <Link 
                href='/'
                className='bg-gradient-to-r from-HMorado to-purple-800 text-white font-phantom px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(136,85,204,0.4)] hover:scale-105 transition'
                > 
                    Inicio 
                </Link>
                
                <Link 
                href='/technologies/'
                className='bg-gradient-to-r from-KRojo to-pink-500 text-white font-phantom px-5 py-2 rounded-full shadow-[0_4px_20px_rgba(216,81,169,0.4)] hover:scale-105 transition'
                > 
                    Technologies 
                </Link>

            </div>

        </nav>

    )

}