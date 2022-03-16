import Styles from './NavMob.module.css'
import Icons from '../icons/Icons';
import Icons2 from '../icons/Icons2';

function NavMob() {
    return (
        <div className={Styles.container}>
            
            <div className={Styles.top}>
                <a href="/"><Icons2 /></a>
            </div>

            <div className={Styles.bottom}>
                <a href="/"><Icons /></a>
            </div>

        </div>
    )
}

export default NavMob;