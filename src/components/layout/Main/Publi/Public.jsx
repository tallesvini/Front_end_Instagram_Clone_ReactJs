import Styles from './Public.module.css'

import { IoHeartOutline, IoChatbubbleOutline, IoPaperPlaneOutline } from 'react-icons/io5'
import { IoHappyOutline } from 'react-icons/io5'
import { GoVerified } from 'react-icons/go'
import { useState } from 'react'

function Public(props) {

    const [color, setColor] = useState();

    function Active() {
        setColor((color) => (color === 'red' ? 'green' : 'red'))
    }

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
                <img onDoubleClick={Active} src={props.art} alt="" />
            </div>


            <style>{`.red {color: #ff0000}`}</style>

            <div className={Styles.react}>
                <button      
                    onClick={Active}
                ><IoHeartOutline className={color} size={23} /></button>
                <button><IoChatbubbleOutline size={23} /></button>
                <button><IoPaperPlaneOutline size={23} /></button>
            </div>


            <div className={Styles.footer}>
                <h5>
                    <div className={Styles.totalLikes}>
                        <h6>{props.likes} likes</h6>
                    </div>
                    {props.name}
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    Duis aute irure dolor in reprehenderit in. Excepteur sint occaecat cupidatat non proident. </p>
                    <div className={Styles.viewComment}>
                        <p>View all 258 comments</p>
                    </div>    
                </h5>
            </div>

            <div className={Styles.hour}>
                <p>{props.minutes} minutes ago</p>
            </div>

            <div className={Styles.comments}>
                <a href="/"><IoHappyOutline size={23} /></a>
                <input type="text" placeholder='Add a comment...' />
                <p>Post</p>
            </div>

        </div>
    )
}

export default Public;