export default function index(Categorias) {
    return (
        <div key="mainDivCategorias" className="flex pt-3 space-x-2 overflow-x-scroll no-scrollbar">

            {

                Categorias.campos.map((categorias) => (
                    <div key={categorias} className="p-1 cursor-pointer hover:bg-gray-50">

                        <div className="h-16 w-28 p-1 border border-solid rounded border-black-100">

                        </div>

                        <div className="p-1 cursor-pointer hover:bg-gray-50 flex justify-center">
                            {categorias}
                        </div>

                    </div>
                ))

            }


        </div>

    )
}


