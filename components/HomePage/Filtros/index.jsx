export default function index(Filtros) {
    return (
        <div key="mainDivFiltros" className="flex pt-3 space-x-2 overflow-x-scroll no-scrollbar">
            {

                Filtros.campos.map((filtro) => (
                    <div key={filtro} className="flex-none flex-grow px-4 py-1 m-1 font-light border border-solid rounded-full cursor-pointer border-black-100 hover:bg-gray-50">{filtro}</div>
                ))
            }
        </div>
    )
}