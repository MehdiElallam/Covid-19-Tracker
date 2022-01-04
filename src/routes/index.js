import React, { lazy, Suspense } from 'react'
import { Routes , Route } from 'react-router-dom'
import PageNotFound from '../pages/PageNotFound'

const Home = lazy(() => import('../pages/Home'));
const Cases = lazy(() => import('../pages/Cases'));
const Vaccinations = lazy(() => import('../pages/Vaccinations'));
const Deaths = lazy(() => import('../pages/Deaths'));

export default function RoutesList() {
    
    return (
        <Suspense fallback={<div>Loading Data  by another server... </div>} >
            <Routes>
                <Route exact={true} path="/" element={<Home />} />
                <Route path="/cases" element={<Cases />} />
                <Route path="/vaccinations" element={<Vaccinations/>} />
                <Route path="/deaths" element={<Deaths/>} />
                <Route path='*' exact={true} element={<PageNotFound />} />
            </Routes>
        </Suspense>
    )
}
