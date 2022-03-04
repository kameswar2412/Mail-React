import React,{useState} from 'react';
import Styles from '../Index/index.module.css'
import {spam} from '../assets/spam'
const Spam = () => {
    const [Data, setData] = useState([]);
    const [Show, setShow] = useState(false);
    localStorage.setItem("Unread",JSON.stringify(spam))

    const handleClick=(e)=>()=>{
        setData(e)
        setShow(true)
    }
    return ( 
        <>
        <div className={Styles.container}>
            <div className={Styles.emailView}>
                 {spam.map((e,i)=>(
                     <div  onClick={handleClick({...e})} className={ `${Styles.item} ${e.unread ? "active" : "null" } } `} key={i}>
                         <p>Subject:-{e.subject}</p>
                          <p> content:-{e.content}</p>
                     </div>
                 ))}
            </div>
            <div className={Styles.viewLook}>
            {!Show&&
                <div className={Styles.beforeView}>

                </div>}
                {Show&&
                <>
                 <p>{Data.subject}</p>
                 <p> {Data.content}</p>
                </>}
            </div>
        </div>
        </>
     );
}
 
export default Spam;