import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import Cases from '../pages/Cases'
import Vaccinations from '../pages/Vaccinations'
import Deaths from '../pages/Deaths'
import PageNotFound from '../pages/PageNotFound'

export default function RoutesList() {
    
    return (
        <Routes>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/vaccinations" element={<Vaccinations/>} />
            <Route path="/deaths" element={<Deaths/>} />
            <Route path='*' exact={true} element={<PageNotFound />} />
        </Routes>
    )
}
