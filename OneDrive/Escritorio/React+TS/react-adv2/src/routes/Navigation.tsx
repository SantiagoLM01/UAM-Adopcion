import { Suspense } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    NavLink,
    Navigate
} from 'react-router-dom';
import { routes } from './routes';


export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={'/vite.svg'} alt="React Logo" />
                        <ul>
                            {routes.map(route => (
                                <li key={route.to}>
                                    <NavLink to={route.to} className={({ isActive }) => isActive ? "nav-active" : ""}>{route.name}</NavLink>
                                </li>
                            ))}

                        </ul>
                    </nav>

                    <Routes>
                        {routes.map(route => (
                            <Route key={route.path} path={route.path} element={<route.Component></route.Component>}></Route>

                        ))}


                        <Route path='/*' element={<Navigate to={routes[0].to}></Navigate>}></Route>





                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    );
}