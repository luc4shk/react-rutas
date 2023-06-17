import React from 'react'
import { Link } from 'react-router-dom'
export default function BarraNavegacion() {
  return (
    <div style={{
        width:"100%"
    }}>
        <Link to={"/"}>| Raiz </Link>
        <Link to={"/pagina1"}>| Página 1 </Link>
        <Link to={"/pagina2"}>| Página 2 </Link>
        <Link to={"/pagina3"}>| Página 3 </Link>
        <Link to={"/pagina4"}>| Página 4 </Link>
        <Link to={"/pagina5"}>| Página 5 </Link>
    </div>
  )
}
