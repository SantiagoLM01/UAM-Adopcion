import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import LazyPage1 from "../pages/LazyPage1"
import LazyPage2 from "../pages/LazyPage2"
import LazyPage3 from "../pages/LazyPage3"

const LazyLayout = () => {
    return (
        <>

            <h1>LazyLayout Page</h1>

            <ul>

                <li>

                    <NavLink to='lazy1'>Lazy 1</NavLink>
                </li>
                <li>

                    <NavLink to='lazy2'>Lazy 2</NavLink>
                </li>
                <li>

                    <NavLink to='lazy3'>Lazy 3</NavLink>
                </li>
            </ul>

            <Routes>

                <Route path="lazy1" element={<LazyPage1></LazyPage1>}></Route>
                <Route path="lazy2" element={<LazyPage2></LazyPage2>}></Route>
                <Route path="lazy3" element={<LazyPage3></LazyPage3>}></Route>


                <Route path="/*" element={<Navigate to='lazy1'></Navigate>}></Route>



            </Routes>
        </>
    )
}

export default LazyLayout