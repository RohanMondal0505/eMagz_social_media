import classes from './Bg.module.css';
import logo from '../../assets/svg/Component 2.svg'
import polygon from "../../assets/Images/Rectangle 347.png";



const Bg = () => {
    return (
        <div className={classes.bg}>
            <div className={classes.logo} >
                <img src={logo} alt="" />
            </div>
            <div className={classes.white}>
            <img src={polygon} alt="" />
            </div>

        </div>
    );
};

export default Bg;
