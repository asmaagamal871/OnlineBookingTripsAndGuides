import React from 'react';
import styles from "./FormStyling/SignUpStyle.module.css";
import InputHook from './InputHook';
import FormModal from './FormModal';
import cl from "../../components/SubComponents/ButtonDes.module.css";

function LoginForm(props) {

    function cancelLoginHandler() {
        props.onHide();


    }


    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasErrors: enteredEmailHasErrors,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = InputHook((value) => value.includes('@') && value.includes('.com'));


    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasErrors: enteredPasswordHasErrors,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,
    } = InputHook((value) => value.length >= 8)


    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    function formSubmitHandler(event) {
        event.preventDefault();

        if (!formIsValid) {
            return

        }

        let user = {
            email: enteredEmail,
            password: enteredPassword,
        }
        props.onUserLogin(user);

        resetEmail();
        resetPassword();
        props.onHide();




    }






    return (

        <FormModal>





            <h1> login</h1>
            <form onSubmit={formSubmitHandler} className={styles.formCard}>
                <input type="email" placeholder="Email"
                    name="email"
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    className={styles.inputf}
                />
                {enteredEmailHasErrors && <p className={styles.error_text} >*please enter a valid email</p>}


                <input type="password" placeholder="password" name="password"
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    onBlur={passwordBlurHandler}
                    className={styles.inputf}
                />
                {enteredPasswordHasErrors && <p className={styles.error_text} >*please enter a valid password</p>}


                <div className={styles.check}>
                    <input type="checkbox" id="Rm" />
                    <label htmlFor="Rm">remember me</label>

                </div>
                <a href="#" className={styles.info} >forget password</a>
                <div className={styles.btns}>
                    <button type="submit" disabled={!formIsValid} className={cl.buttonDes} >Log in</button>

                    <button onClick={cancelLoginHandler} className={cl.buttonDes}>Cancel</button>
                </div>

            </form>

            <p className={styles.info}>Don't have an account? <a href="#">sign up</a></p>

        </FormModal>

    )
}

export default LoginForm;