import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Routes import*/
import Home from './LoginRoute/LoginRoute';
import NotFound from './NotFoundRoute/NotFound';
import Layout from './LayoutRoute/LayoutRoute';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} >
                        <Route path="/" element={<Home/>} />
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;