import react from 'react'

import * as RemixIcon from 'react-icons/ri'

export default function index(Icons) {
    return <div className={`${Icons.class}`}>{react.createElement(RemixIcon[Icons.nome])}</div>
}
