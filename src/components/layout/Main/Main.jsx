import Stories from "./Stories/Stories";
import Public from "./Public/Public";

import Styles from './Main.module.css'
import Profile from './Profile/Profile';

import Post1 from '../../../assets/img/posts/post1.jpg'
import Post2 from '../../../assets/img/posts/post2.jpg'
import Post3 from '../../../assets/img/posts/post3.jpg'
import Post4 from '../../../assets/img/posts/post4.jpg'
import Post5 from '../../../assets/img/posts/post5.jpg'

import Pic1 from '../../../assets/img/users/perfil1.png'
import Pic2 from '../../../assets/img/users/perfil2.png'
import Pic3 from '../../../assets/img/users/perfil3.png'
import Pic4 from '../../../assets/img/users/perfil4.png'

function Main() {
    return(
        <div>

            <div className={Styles.container}>
                <Stories />
                <Profile />
                <Public name="hanna_williams_" perfil={Pic1} art={Post1} loc="Vancouver, Canada" />
                <Public name="_emmaclark_" perfil={Pic2} art={Post2} />
                <Public name="christopher_walker_" perfil={Pic4} art={Post3} loc="Los Angeles, California" />
                <Public name="hanna_williams_" perfil={Pic1} art={Post4} />
                <Public name="hillary_" perfil={Pic3} art={Post5} loc="Miami Beach, Florida" />
            </div>
            
        </div>
    )
}

export default Main;