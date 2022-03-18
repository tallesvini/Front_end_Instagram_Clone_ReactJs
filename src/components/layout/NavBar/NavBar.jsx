import Styles from './NavBar.module.css'
import Icons from './icons/Icons';
import Icons2 from './icons/Icons2';

function NavBar() {
    return(
        <div className={Styles.container}>
            <Icons2 />
            <input type="text" placeholder="Search" /> 
            <Icons className={Styles.icones} />
        </div>
    )
}

export default NavBar;