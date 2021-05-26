import Icone from '../Icon'

export default function index() {

    const Filtros = {
        "Ordernar" : {
            className: "pl-2",
            icone: "RiArrowDownSLine",
            posicaoIcone: "fim"
        },
        "Pra retirar" : {
            className: "pr-2",
            icone: "RiWalkFill",
            posicaoIcone: "inicio"
        },
        "Entrega grátis" : {
            className: "",
            icone: "",
            posicaoIcone: ""
        },
        "vale-refeição" : {
            className: "pl-2",
            icone: "RiArrowDownSLine",
            posicaoIcone: "fim"
        },
        "Distância" : {
            className: "ml-2 border-l border-solid border-gray-300",
            icone: "RiArrowDownSLine",
            posicaoIcone: "fim"
        },
        "Entrega Parceira" : {
            className: "",
            icone: "",
            posicaoIcone: ""
        },
        "Super Restaurante" : {
            className: "",
            icone: "",
            posicaoIcone: ""
        },
        "Filtros" : {
            className: "ml-1",
            icone: "RiFilter3Line",
            posicaoIcone: "fim"
        },
        
      }

    return (
        <div key="mainDivFiltros" className="flex pt-3 space-x-2 overflow-x-scroll no-scrollbar">
            {

                Object.entries(Filtros).map((filtro, key) => (
                    <div key={filtro[0]} className={`flex items-center flex-none flex-grow px-3 py-1 m-1 font-light border border-solid rounded-full cursor-pointer border-black-100 hover:bg-gray-50`}>{filtro[1].posicaoIcone === "inicio" ? <Icone nome={filtro[1].icone} class={filtro[1].className} /> : "" } {filtro[0]} {filtro[1].posicaoIcone === "fim" ? <Icone nome={filtro[1].icone} class={filtro[1].className} /> : "" }</div>
                ))
            }
        </div>
    )
}