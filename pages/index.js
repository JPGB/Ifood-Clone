import { FiHome, FiSearch, FiClipboard, FiUser, FiGrid } from 'react-icons/fi';
import { HiOutlineQrcode } from 'react-icons/hi';

import Filtros from '../components/HomePage/Filtros'
import Categorias from '../components/HomePage/Categorias'
import Lojas from '../components/HomePage/Lojas'

export default function HomePage() {
  return (

    <div className="flex flex-col h-screen pb-2">

      <div className="flex-1 h-screen p-5 mb-auto overflow-y-auto bg-white">

        <div className="flex justify-between items-center w-full px-1">
          <div className="cursor-pointer hover:bg-gray-50">R. Francisca Miquelina, 177 </div>
          <HiOutlineQrcode className=" cursor-pointer stroke-current text-red-400"/>
        </div>

        <div className="flex pt-4 space-x-4">
          <div className="font-semibold text-red-600 border-b border-red-600 border-solid">Restaurantes</div>
          <div className="font-semibold text-red-600 border-b border-white cursor-pointer hover:border-red-500">Mercados</div>
        </div>

        <Filtros />

        <Categorias
          campos={
            [
              "Mercado",
              "Promoções",
              "Pizza",
              "Árabe",
              "Lanches",
              "Vegetariana",
              "Vale-refeição",
              "Japonesa",
              "Brasileira",
              "Bebidas",
              "Açai",
              "Doces & Bolos",
              "Italiana",
              "Chinesa",
              "Gourmet"
            ]
          }
        />

        <div className="flex w-full pt-3 space-x-2 overflow-x-scroll no-scrollbar flex-nowrap">
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
          <div className="flex-none h-32 p-1 m-1 border border-solid rounded cursor-pointer hover:bg-gray-50 w-72 border-black-100">TesteTeste</div>
        </div>



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
