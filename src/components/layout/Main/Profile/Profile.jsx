import Styles from './Profile.module.css'

import NoneUser from '../../../../assets/img/users/none-user.png'
import Picture from '../../../../assets/img/users/pic1.png'

import Suggestions from './Suggestions/Suggestions';

function Profile() {
    return(
        <div className={Styles.container}>

            <div className={Styles.user}>
                <img src={NoneUser} alt="" />
                    <div className={Styles.text}>
                        <h5>UserName</h5>
                        <p>Your Name</p>
                    </div>
                <a href="/">Switch</a>
            </div>

            <div>
                <h4>Suggestions For You</h4>    
                    <Suggestions user="renne_carter" perfil={NoneUser} />
                    <Suggestions user="sierrabaker_" perfil={NoneUser} />
                    <Suggestions user="_zoey_blake" perfil={Picture} />
                    <Suggestions user="josh__carrey" perfil={NoneUser} />
            </div>
            
            <div className={Styles.links}>
                <a href="/">About • </a>
                <a href="/">Help • </a>
                <a href="/">Press • </a>
                <a href="/">API • </a>
                <a href="/">Jobs • </a>
                <a href="/">Privacy • </a>
                <a href="/">Terms</a> <br/>
                <a href="/">Locations • </a>
                <a href="/">Top Accounts • </a>
                <a href="/">Hashtags • </a>
                <a href="/">Language</a>
                <p>© 2022 INSTAGRAM FROM META</p>

                <h5>This is not the official Instagram website!</h5>
            </div>
                
        </div>
    )
}

export default Profile;