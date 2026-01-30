import { NavLink } from 'react-router-dom';



export default function Navbar() {
    return (<nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <span className="navbar-brand" >豆自己 BEANYOURSELF</span>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">          
                    <NavLink className="nav-link" to="/">
                    品牌故事
                    </NavLink>
                </li>
                <li className="nav-item">          
                    <NavLink className="nav-link" to="/about">
                    商品列表
                    </NavLink>
                </li>
                <li className="nav-item">          
                    <NavLink className="nav-link" to="/album">
                    咖啡文章
                    </NavLink>
                </li>
                <li className="nav-item">          
                    <NavLink className="nav-link" to="/album">
                    人格測驗
                    </NavLink>
                </li>
                <li className="nav-item">          
                    <NavLink className="nav-link" to="/album">
                        <i className="bi bi-search"></i>
                    </NavLink>
                </li>
                <li className="nav-item">          
                    <NavLink className="nav-link" to="/album">
                        <i class="bi bi-cart"></i>
                    </NavLink>
                </li>
                <li className="nav-item">          
                    <NavLink className="nav-link" to="/album">
                        <i class="bi bi-person-circle"></i>
                    </NavLink>
                </li>
            </ul>      
        </div>
        </div>
</nav>)
    
}