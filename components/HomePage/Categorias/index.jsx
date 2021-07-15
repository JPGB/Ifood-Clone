import Image from 'next/image'

export default function index(Categorias) {
    return (
        <div key="mainDivCategorias" className="flex pt-3 space-x-2 overflow-x-scroll no-scrollbar">

            {

                Categorias.campos.map((categorias) => (
                    <div key={categorias.nome} className="p-1 cursor-pointer hover:bg-gray-50">
                        {console.log(categorias.img)}

                        <div className="h-16 w-28">
                            <Image src={categorias.img} alt={categorias.nome} width="112" height="64" />
                        </div>

                        <div className="p-1 cursor-pointer hover:bg-gray-50 flex justify-center">
                            {categorias.nome}
                        </div>

                    </div>
                ))

            }


        </div>

    )
}


