import { useState } from 'react'

import { Heart } from 'react-feather';

export default function index(propsCurtido) {

    const [curtido, setCurtido] = useState(propsCurtido.curtido)

    function handleLike() {
        setCurtido(!curtido)
    }

    return (
        <div className="justify-end" onClick={() => handleLike()}>
            <Heart className={`w-4 h-4 ${curtido ? "fill-current text-red-600" : ""}`} />
        </div>
    )
}
