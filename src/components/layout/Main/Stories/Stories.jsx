import Styles from './Stories.module.css'

import Stories2 from './Stories2';

import Status1 from '../../../../assets/img/users/status1.png'
import Status2 from '../../../../assets/img/users/status2.png'
import Status3 from '../../../../assets/img/users/status3.png'
import Status4 from '../../../../assets/img/users/status4.png'
import Status5 from '../../../../assets/img/users/status5.png'
import Status6 from '../../../../assets/img/users/status6.png'
import Status7 from '../../../../assets/img/users/status7.png'

function Stories() {
    return(
        <div className={Styles.container}> 
            <Stories2 profile={Status1} name='melody_87' />
            <Stories2 profile={Status2} name='katie_USA' />
            <Stories2 profile={Status3} name='drake_ov' />
            <Stories2 profile={Status4} name='blair_hill' />
            <Stories2 profile={Status5} name='lorenevans' />
            <Stories2 profile={Status6} name='john__42' />
            <Stories2 profile={Status7} name='_emmaclark_' />
        </div>
    )
}

export default Stories;