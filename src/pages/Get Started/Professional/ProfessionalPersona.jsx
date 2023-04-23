import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import classes from './ProfessionalPersona.module.css'
import Bg from "../../../components/BG/Bg";
import Card from '../../../components/Card/Card'
import Button from '../../../components/Button/Button'


const ProfessionalPersona = () => {
    
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('/get-started/congratulation')
    }

    const [name, setName] = useState('')
    const [profession, setProfession] = useState('')
    const nameSubmitHandler = (e) => {
        setName(e.target.value)
    }
    const professionSubmitHandler = (e) => {
        setProfession(e.target.value)
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();

        setName('');
        setProfession('');
    }


    return <div className={classes['main-container']}>
        <Bg />
        <Card className={classes.container}>
            <form onSubmit={formSubmitHandler}>
                <h1 className={classes.heading}>Set up your Professional persona</h1>
                <p className={classes.text1}>Customize your Persona</p>
                <section className={classes['logo-section']}>
                    <div className={classes['logo-container']}>
                        Upload Logo
                        <img className={classes.logo} alt="" />
                    </div>
                </section>
                <div className={classes.input}>
                    <div className={classes['input-field']}>
                        <label className={classes.text2} htmlFor='display-namel'>Professional Name</label>
                        <input type='text' className={classes['input-box']} value={name} onChange={nameSubmitHandler} />
                    </div>
                    <div className={classes['input-field']}>
                        <label className={classes.text2} htmlFor='display-namel'>Profession Type</label>
                        <input type='text' className={classes['input-box']} value={profession} onChange={professionSubmitHandler} />
                    </div>
                </div>
                <div className={classes.actions} >
                    <Button type='submit'>Choose Template</Button>
                    <Button type='submit' onClick={navigateHandler}>Skip For Now</Button>
                </div>
            </form>
        </Card>
    </div>
}

export default ProfessionalPersona;