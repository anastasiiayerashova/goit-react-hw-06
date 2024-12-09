import s from './Contact.module.css';
import { FaUser } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { LuMinus } from "react-icons/lu";
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';

const variants = {
        hidden: { opacity: 0, x: -100 }, // Исходное состояние
        visible: { opacity: 1, x: 0 },  // Конечное состояние
        exit: { opacity: 0, x: 100 }    // Анимация исчезновения
    };

export default function Contact({...item}) {
    const dispatch = useDispatch()

    const handleDeleteContact = () => {
    dispatch(deleteContact(item.id))
    }
    
    return (
        <AnimatePresence> 
            <motion.div className={s.item}
             initial="hidden"      
                animate="visible"     
                exit="exit"           
                variants={variants}
                layout
            >
            <div className={s.itemDiv}>  
                <div className={s.iconsDiv}>  
                    <FaUser />
                    <p className={s.name}>{item.name}</p>
                </div>
                <div className={s.iconsDiv}>  
                    <MdLocalPhone />
                    <p className={s.phone}>{item.number}</p>
                </div>
                </div>
            <button className={s.btn} type='button' onClick={handleDeleteContact}>Delete<LuMinus /></button>
            </motion.div>
            </AnimatePresence>
    )
}