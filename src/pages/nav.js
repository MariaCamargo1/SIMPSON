import { Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About from './About';
import Character from './Character';
import Default  from './Default';


import './nav.css'

export function Navbar (){
    return (
        
        <div>
            <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Character" element={<Character/>}/>
                <Route path="*" element={<Default/>}/>
            </Route>
            </Routes>
            </div>
            );
    }




