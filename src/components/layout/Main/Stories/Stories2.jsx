import Styles from './Stories2.module.css'

function Stories2(props) {
    return(
        <div className={Styles.container}>
            <img className={Styles.imagem} src={props.profile} alt="" />
            <p>{props.name}</p>
        </div>
    )
}

export default Stories2;