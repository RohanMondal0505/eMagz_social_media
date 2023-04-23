import Button from "../../../../components/Button/Button";
import Modal from "../../../../components/Modal/Modal";
import classes from "./Verification.module.css";

const Verification = (props) => {
	return (
		<Modal onClose={props.onClose}>
			<div className={classes.overlay}>
				<form className={classes.form}>
					<div className={classes.text}>
						<h2>Verification</h2>
						<p>Please enter your new mobile number which you want to update and use </p>
					</div>
					<label htmlFor="otp">OTP</label>
					<div className={classes.input}>
						<input type="text" className={classes["input-box"]} />
						<input type="text" className={classes["input-box"]} />
						<input type="text" className={classes["input-box"]} />
						<input type="text" className={classes["input-box"]} />
					</div>
					<div className={classes.actions}>
						<Button type="submit" className={classes.btn}>
							Submit
						</Button>
						<Button className={classes.link} onClick={props.onClose}>
							Back
						</Button>
						<p className={classes.text2}>
							Resend OTP:<span>3s</span>
						</p>
					</div>
				</form>
			</div>
		</Modal>
	);
};

export default Verification;
