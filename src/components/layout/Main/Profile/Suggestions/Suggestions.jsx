import Styles from './Suggestions.module.css'

function Suggestions(props) {
    return(
        <div className={Styles.suggestions}>
            <img src={props.perfil} alt="" />

                <div className={Styles.dados}>
                    <h5>{props.user}</h5>
                    <p>New to instagram</p>
                </div>
                
            <a href="/">Follow</a>
        </div>
    )
}

export default Suggestions;