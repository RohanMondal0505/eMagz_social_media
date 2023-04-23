import Modal from "../../../../components/Modal/Modal";
import classes from './TwoWayVerification.module.css'
import Button from "../../../../components/Button/Button";
import {useState} from 'react'



const TwoWayVerification = (props) => {
    const [isSelected, setIsSelected] = useState(false)
    const selectHandler = () => {
        setIsSelected(true)
    }

    return (
        <Modal onClose={props.onClose}>
            <div className={classes.overlay}>
                <div className={classes.container}>
                    <h2>Two Way Verification</h2>
                    <p>Enabling Two Way Verification after every log in we will send a verification code to verify and secure your account </p>
                </div>
                <form className={classes.form}>
                    <div className={classes.text}>
                        <p className={classes.heading}>Verification</p>
                        <p className={classes['sub-text']}>Please verify your updated email id by enter OTP sent to your new email id</p>
                    </div>
                    <label htmlFor="otp">OTP</label>
                    <div className={classes.input}>
                        <input type='text' className={!isSelected ? classes['input-box'] : classes['input-active']} onClick={selectHandler}/>
                        <input type='text' className={classes['input-box']} />
                        <input type='text' className={classes['input-box']} />
                        <input type='text' className={classes['input-box']} />
                    </div>
                    <div className={classes.actions}>
                        <Button type='submit' className={classes.btn}>Submit</Button>
                        <p className={classes.text2}>Resend  OTP:<span>3s</span></p>
                    </div>
                </form>
            </div >
        </Modal >
    )
}

export default TwoWayVerification;
