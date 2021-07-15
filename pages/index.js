import { FiHome, FiSearch, FiClipboard, FiUser, FiGrid } from 'react-icons/fi';
import { HiOutlineQrcode } from 'react-icons/hi';

import Filtros from '../components/HomePage/Filtros'
import Categorias from '../components/HomePage/Categorias'
import Lojas from '../components/HomePage/Lojas'
import Banners from '../components/HomePage/Banners'

export default function HomePage() {
  return (

    <div className="flex flex-col h-screen pb-2">

      <div className="flex-1 h-screen p-5 mb-auto overflow-y-auto bg-white">

        <div className="flex items-center justify-between w-full px-1">
          <div className="cursor-pointer hover:bg-gray-50">R. Francisca Miquelina, 177 </div>
          <HiOutlineQrcode className="text-red-400 cursor-pointer stroke-current " />
        </div>

        <div className="flex pt-4 space-x-4">
          <div className="font-semibold text-red-600 border-b border-red-600 border-solid">Restaurantes</div>
          <div className="font-semibold text-red-600 border-b border-white cursor-pointer hover:border-red-500">Mercados</div>
        </div>

        <Filtros />

        <Categorias
          campos={
            [
              {
                nome: "Mercado",
                img: "/dev/1-1.png"
              },
              {
                nome: "Promoções",
                img: "/dev/1-2.png"
              },
              {
                nome: "Pizza",
                img: "/dev/1-4.png"
              },
              {
                nome: "Árabe",
                img: "/dev/1-5.png"
              },
              {
                nome: "Lanches",
                img: "/dev/1-6.png"
              },
              {
                nome: "Vegetariana",
                img: "/dev/1-3.png"
              },
              {
                nome: "Vale-refeição",
                img: "/dev/1-7.png"
              },
              {
                nome: "Japonesa",
                img: "/dev/1-9.png"
              },
              {
                nome: "Brasileira",
                img: "/dev/1-13.png"
              },
              {
                nome: "Bebidas",
                img: "/dev/1-15.png"
              },
              {
                nome: "Açai",
                img: "/dev/1-8.png"
              },
              {
                nome: "Doces & Bolos",
                img: "/dev/1-12.png"
              },
              {
                nome: "Gourmet",
                img: "/dev/1-16.png"
              },
            ]
          }
        />

        {/* 
              {
                nome: "Italiana",
                img: "/dev/1-13.png"
              },
              {
                nome: "Chinesa",
                img: "/dev/1-14.png"
              },
        */}

        <Banners
          campos={
            [
              "/dev/2-1.png",
              "/dev/2-2.png",
              "/dev/2-3.png",
              "/dev/2-4.png",
              "/dev/2-5.png",
              "/dev/2-6.png",
              "/dev/2-7.png",
              "/dev/2-8.png",
              "/dev/2-9.png",
              "/dev/2-10.png",
              "/dev/2-11.png"
            ]
          }
        />

        <Lojas />

      </div>

      <div className="fixed bottom-0 flex items-center justify-between w-full h-8 px-5 bg-gray-50">
        <FiHome className="text-red-600 stroke-current " />
        <FiSearch className="" />
        <FiClipboard className="" />
        <FiUser className="" />
      </div>

    </div>

  )
}


/**
 * PurgeCSS:
 * w-12
 * h-12
 * w-8/12
 *
 */