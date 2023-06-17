import React from 'react'
import { HashRouter,BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina from '../components/Pagina'
import BarraNavegacion from '../components/BarraNavegacion'
export default function AppRouter() {
  return (
    <>
    <HashRouter basename='/'>
        <BarraNavegacion/>
        <Routes>
            <Route path='/' element={<Pagina msg={"Página Raiz"}/>}/>
            <Route path='/pagina1' element={<Pagina msg={"Página 1"} />}></Route>
            <Route path='/pagina2' element={<Pagina msg={"Página 2"} />}></Route>
            <Route path='/pagina3' element={<Pagina msg={"Página 3"} />}></Route>
            <Route path='/pagina4' element={<Pagina msg={"Página 4"} />}></Route>
            <Route path='/pagina5' element={<Pagina msg={"Página 5"} />}></Route>
            {/* <Route path='/hola'/> */}
        </Routes>
    </HashRouter>
    </>
  )
}
