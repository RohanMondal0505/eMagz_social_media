import { useState } from 'react'
import classes from './Verification.module.css';
import LoadingBg from '../Loading Bg/LoadingBg';
import ChangeLogo from '../../../assets/svg/Change password.svg';
import Card from '../../../components/Card/Card';
import Button from "../../../components/Button/Button";


const Verification = () => {
    const [password, setPassword] = useState('')

    const passwordHandler = (e) => {
        setPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setPassword('')
    }

    return (
        <div className={classes['main-container']}>
            <LoadingBg />
            <Card className={classes['sub-container']}>
                <div className={classes.header}>
                    <div className={classes['text-container']}>
                        <p className={classes.heading}>Verification Code</p>
                        <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus est tortor gravida nibh id at.</p>
                    </div>
                    <div className={classes.image}>
                        <img src={ChangeLogo} alt="" />
                    </div>
                </div>
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes.input}>
                        <input type='text' className={classes['input-box']} />
                        <input type='text' className={classes['input-box']} />
                        <input type='text' className={classes['input-box']} />
                        <input type='text' className={classes['input-box']} />
                    </div>
                    <div className={classes.actions}>
                        <Button type='submit' className={classes.btn}>Submit</Button>
                    </div>
                    <div className={classes.footer}>
                        <p className={classes.link}>Back to Sign In</p>
                        <section className={classes.time}>
                        <p className={classes.text2}>Resend Code In:</p>
                        <p className={classes.timer}>26s</p>
                        </section>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Verification;

