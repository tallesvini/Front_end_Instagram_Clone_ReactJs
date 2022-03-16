import Styles from './Public.module.css'

import { IoHeartOutline, IoChatbubbleOutline, IoPaperPlaneOutline } from 'react-icons/io5'
import { IoHappyOutline } from 'react-icons/io5'
import { GoVerified } from 'react-icons/go'

function Public(props) {
    return(
        <div className={Styles.container}>

            <div className={Styles.perfil}>
                <img src={props.perfil} alt="" />
                <div>
                    <h4>
                        {props.name}
                        <GoVerified color='#0476D9' size={12} />
                    </h4>
                    <p>{props.loc}</p>
                </div>
            </div>

            <div className={Styles.public}>
                <img src={props.art} alt="" />
            </div>

            <div className={Styles.react}>
                <a href="/"><IoHeartOutline size={23} /></a>
                <a href="/"><IoChatbubbleOutline size={23} /></a>
                <a href="/"><IoPaperPlaneOutline size={23} /></a>
            </div>

            <div className={Styles.footer}>
                <h5>
                    {props.name}
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    Duis aute irure dolor in reprehenderit in. Excepteur sint occaecat cupidatat non proident. </p>
                    <div className={Styles.viewComment}>
                        <p>View all 258 comments</p>
                    </div>    
                </h5>
            </div>

            <div className={Styles.comments}>
                <a href="/"><IoHappyOutline size={23} /></a>
                <input type="text" placeholder='Add a comment...' />
            </div>
        </div>
    )
}

export default Public;