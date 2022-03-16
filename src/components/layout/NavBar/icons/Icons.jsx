import { HiHome } from 'react-icons/hi';
import { RiMessengerLine } from 'react-icons/ri'
import { CgAddR } from 'react-icons/cg'
import { MdShareLocation } from 'react-icons/md'
import { IoHeartOutline } from 'react-icons/io5'
import { FaUserCircle } from 'react-icons/fa'

import Styles from './Icons.module.css'

function Icons() {
    return(
        <div className={Styles.icons}>
            <button><HiHome size={22} /></button> 
            <button><RiMessengerLine size={22} /></button> 
            <button><CgAddR size={22} /></button> 
            <button><MdShareLocation size={22} /></button> 
            <button><IoHeartOutline size={22} /></button> 
            <button><FaUserCircle size={22} /></button> 
        </div>
    )
}

export default Icons;