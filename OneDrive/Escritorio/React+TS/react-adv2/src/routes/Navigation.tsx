import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from 'react-router-dom';
import LazyPage1 from '../01-lazyload/pages/LazyPage1 copy 2';
import LazyPage2 from '../01-lazyload/pages/LazyPage2';
import LazyPage3 from '../01-lazyload/pages/LazyPage3';


export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={'/vite.svg'} alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/lazy1" className={({isActive}) =>  isActive ? "nav-active" : ""}>Lazy1</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) =>  isActive ? "nav-active" : ""} to="/lazy2" >Lazy2</NavLink>
                        </li>
                        <li>
                            <NavLink className={({isActive}) =>  isActive ? "nav-active" : ""}to="/lazy3" >Lazy3</NavLink>
                        </li>
                    </ul>
                </nav>

                <Routes>

                    <Route path='lazy1' element={<LazyPage1></LazyPage1>}></Route>
                    <Route path='lazy2' element={<LazyPage2></LazyPage2>}></Route>

                    <Route path='lazy3' element={<LazyPage3></LazyPage3>}></Route>

                    <Route path='/*' element={<Navigate to={'/lazy1'}></Navigate>}></Route>





                </Routes>

            </div>
        </BrowserRouter>
    );
}