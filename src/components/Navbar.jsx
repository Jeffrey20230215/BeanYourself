import './Navbar.css';
import Logo from '.mainLogo';

const menuItem = [
    {
        id:1,
        title:'品牌故事',
    },{
        id:2,
        title:'商品列表',
    },{
        id:3,
        title:'咖啡文章',
    },{
        id:4,
        title:'人格測驗',
    }
];

const Navbar = () => {
    return (
        <nav className="navbar">
            {/*要匯入logo */}
            <MainLogo />
            {/*選單按鈕區塊*/}
            <ul className="navbar-menu">
                {menuItem.map(({id,title}) =>(
                    <li key={id} className="nav-item">
                        {title}
                    </li>
                ))}
            </ul>
            {/*icon的區塊 */}
            <div className="navbar-icons">
                <span>search</span>
                <span>carts</span>
                <span>person</span>
            </div>
        </nav>
    );
};


export default Navbar;

