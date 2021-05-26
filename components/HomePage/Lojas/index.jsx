import { useState } from 'react'

import Curtido from '../../HomePage/like'

const lojasIncial = {
    "Pop Vegan": {
        img: "",
        nota: "4,8",
        verificado: true,
        categoria: "Lanches",
        distancia: "2,8",
        tempoMedio: "23-33",
        precoFrete: "5,99",
        curtido: true
    },
    "tollocos": {
        img: "",
        nota: "",
        verificado: true,
        categoria: "",
        distancia: "",
        tempoMedio: "",
        precoFrete: "",
        curtido: false
    },
    "Loving hut": {
        img: "",
        nota: "",
        verificado: true,
        categoria: "",
        distancia: "",
        tempoMedio: "",
        precoFrete: "",
        curtido: false
    },
    "Novos Veganos": {
        img: "",
        nota: "",
        verificado: true,
        categoria: "",
        distancia: "",
        tempoMedio: "",
        precoFrete: "",
        curtido: false
    }
}

export default function index() {

    const [lojas, setlojas] = useState(lojasIncial);

    return (
        <div className="p-1 pt-4">

            <div className="">
                <span className="">Lojas</span>
            </div>
            {
                Object.entries(lojas).map((loja, key) => (
                    <div key={`loja-${loja[0]}`} className="flex justify-between py-2 items-center">
                        <div className="w-12 h-12 border border-gray-600 rounded-full">
                            {loja[1].img}
                        </div>
                        <div className="flex-col justify-start w-8/12">
                            <div className="w-full">
                                <span className="">
                                    {loja[0]}
                                </span>
                                <span className="">
                                    {loja[1].verificado}
                                </span>
                            </div>
                            <div className="w-full text-xs">
                                <span className="text-yellow-600">
                                    &#8902; {loja[1].nota}
                                </span>
                                    &nbsp;&#183;&nbsp;
                                    <span className="text-gray-600">
                                    {loja[1].categoria}
                                </span>
                                    &nbsp;&#183;&nbsp;
                                    <span className="text-gray-600">
                                    {loja[1].distancia} km
                                    </span>
                            </div>
                            <div className="w-full pt-1 text-xs">
                                <span className="text-gray-600">
                                    {loja[1].tempoMedio} min
                                    </span>
                                    &nbsp;&#183;&nbsp;
                                    <span className="text-gray-600">
                                    R$ {loja[1].precoFrete}
                                </span>
                            </div>
                        </div>
                        <Curtido curtido={loja[1].curtido} />
                    </div>
                ))
            }

        </div>
    )
}
