import Home from '../pages/Home.jsx';
import {createHashRouter} from 'react-router-dom';
import App from '../App.jsx'

const routes = [
    {
        path: '/',
        element: <App />,        
        children: [
            {
                index: true,
                element: <Home/>
            }
        ]
    }   
    ];

const router = createHashRouter(routes)

export default router;