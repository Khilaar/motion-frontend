import { BrowserRouter, Routes, Route } from 'react-router-dom';

/*Routes import*/
import Login from './LoginRoute/LoginRoute';
import NotFound from './NotFoundRoute/NotFound';
import Layout from './LayoutRoute/LayoutRoute';
import Posts from './PostsRoute/PostsRoute';

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />} >
                        <Route path="/" element={<Login/>} />
                        <Route path="*" element={<NotFound/>}/>
                        <Route path="/posts" element={<Posts/>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Router;