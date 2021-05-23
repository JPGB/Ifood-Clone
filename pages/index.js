import { Home, Search, Clipboard, User } from 'react-feather';

import Filtros from '../components/HomePage/Filtros'
import Categorias from '../components/HomePage/Categorias'

export default function HomePage() {
  return (

    <div className="flex flex-col h-screen">

      <div className="flex-1 h-screen p-5 mb-auto overflow-y-auto bg-white">

        <div className="flex justify-between w-full px-1">
          <div className="cursor-pointer hover:bg-gray-50">R. Francisca Miquelina, 177 </div>
          <div className="cursor-pointer hover:bg-gray-50">Icone</div>
        </div>

        <div className="flex pt-4 space-x-4">
          <div className="font-semibold text-red-600 border-b border-red-600 border-solid">Restaurantes</div>
          <div className="font-semibold text-red-600 border-b border-white cursor-pointer hover:border-red-500">Mercados</div>
        </div>

        <Filtros
          campos={
            [
              "Ordernar",
              "Pra retirar",
              "Entrega grátis",
              "vale-refeição",
              "Distância",
              "Entrega Parceira",
              "Super Restaurante",
              "Filtros"
            ]
          }
        />

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

        {/* <div className="flex pt-3 space-x-2 overflow-x-scroll no-scrollbar">

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>

          <div className="p-1 cursor-pointer hover:bg-gray-50">

            <div className="h-16 p-1 border border-solid rounded border-black-100">

            </div>

            <div className="p-1 cursor-pointer hover:bg-gray-50">
              TesteTeste
            </div>

          </div>
        </div> */}

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

      </div>

      <div className="fixed bottom-0 flex items-center justify-between w-full h-10 px-5 border-t border-gray-50">
        <Home className="text-red-600 stroke-current " />
        <Search className="" />
        <Clipboard className="" />
        <User className="" />
      </div>

    </div>

  )
}
