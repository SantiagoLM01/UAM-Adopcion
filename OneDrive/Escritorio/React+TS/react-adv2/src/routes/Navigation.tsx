import { Suspense } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from 'react-router-dom';
import ShoppingPage from '../02-component-patterns/pages/ShoppingPage';


export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={'/vite.svg'} alt="React Logo" />
                        <ul>
                          
                                <li >
                                    <NavLink to='/shopping' className={({ isActive }) => isActive ? "nav-active" : ""}>Shopping</NavLink>
                                </li>
                                <li >
                                    <NavLink to='about' className={({ isActive }) => isActive ? "nav-active" : ""}>about</NavLink>
                                </li>
                                <li >
                                    <NavLink to='users' className={({ isActive }) => isActive ? "nav-active" : ""}>users</NavLink>
                                </li>
                        

                        </ul>
                    </nav>

                    <Routes>
                     
                            <Route path='/shopping' element={<ShoppingPage/>}></Route>

                            <Route path='/about' element={<h1>about</h1>}></Route>

                            <Route path='/users' element={<h1>Users</h1>}></Route>


                


                        <Route path='/*' element={<Navigate to='/shopping'></Navigate>}></Route>





                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    );
}