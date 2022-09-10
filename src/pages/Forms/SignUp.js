
import styles from "./FormStyling/SignUpStyle.module.css";
import InputHook from './InputHook';
import FormModal from "./FormModal";
import { useState } from 'react';
import cl from "../../components/SubComponents/ButtonDes.module.css";


function SignUp(props) {
    function cancelSignUpHandler() {
        props.onHide();


    }


    const [userType, SetUserType] = useState('');

    // name validation

    const { value: enteredName,
        isValid: enteredNameIsValid,
        hasErrors: enteredNamehasErrors,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput,
    } = InputHook((value) => value.trim() !== '');

    //email validation
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasErrors: enteredEmailHasErrors,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = InputHook((value) => value.includes('@') && value.includes('.com'));

    //password validaiton
    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        hasErrors: enteredPasswordHasErrors,
        valueChangeHandler: passwordChangehandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword,

    } = InputHook((value) => value.length >= 8);

    // confirm password validation
    const {
        value: enteredPassword_Confirmation,
        isValid: enteredPassword_ConfirmationIsValid,
        hasErrors: enteredPassword_ConfirmationHasErrors,
        valueChangeHandler: password_ConfirmationChangehandler,
        inputBlurHandler: password_ConfirmationBlurHandler,
        reset: resetPassword_Confirmation,

    } = InputHook((value) => value === enteredPassword);


    //  phone number validation
    const {
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasErrors: enteredPhoneHasErrors,
        valueChangeHandler: phoneChangleHandler,
        inputBlurHandler: phoneBlurHandler,
        reset: resetPhone,

    } = InputHook((value) => value.length == 11);



    function TypeChangeHandler(event) {
        SetUserType(event.target.value);


    }




    let formIsValid = false;

    if (enteredEmailIsValid && enteredPasswordIsValid && enteredPassword_ConfirmationIsValid && enteredNameIsValid && enteredPhoneIsValid) {
        formIsValid = true;
    }

    function formSubmitHandler(event) {
        event.preventDefault();

        if (!formIsValid) {
            return
        }
        let user = {
            name: enteredName,
            phone: enteredPhone,
            email: enteredEmail,
            password: enteredPassword,
            password_confirmation: enteredPassword_Confirmation,
            type: userType,
        }

        props.onAddUser(user);

        resetEmail();
        resetPassword();
        resetPassword_Confirmation();
        resetNameInput();
        resetPhone();
        

        props.onHide();


    }



    return (
        <FormModal>







            <div>

                <h1> Sign up</h1>
                <form onSubmit={formSubmitHandler} className={styles.formCard}>
                    <input
                        type="text"
                        placeholder="username"
                        name="name"
                        value={enteredName}
                        onChange={nameChangeHandler}
                        onBlur={nameBlurHandler}
                        required
                    />{enteredNamehasErrors && <p className={styles.error_text}>*name must not be empty</p>}

                    <input type="email" placeholder="Email"
                        name="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                    {enteredEmailHasErrors && <p className={styles.error_text}>*please enter a valid email</p>}

                    <input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={enteredPassword}
                        onBlur={passwordBlurHandler}
                        onChange={passwordChangehandler}
                        required />
                    {enteredPasswordHasErrors && <p className={styles.error_text}>*please enter a valid password</p>}

                    <input
                        type="password"
                        placeholder="confirm password"
                        name="password_confirmation"
                        value={enteredPassword_Confirmation}
                        onChange={password_ConfirmationChangehandler}
                        onBlur={password_ConfirmationBlurHandler}

                        required />
                    {enteredPassword_ConfirmationHasErrors && <p className={styles.error_text}>*password miss match</p>}



                    <input
                        type="number"
                        min="0"

                        placeholder="phone number"
                        name="phone"
                        value={enteredPhone}
                        onChange={phoneChangleHandler}
                        onBlur={phoneBlurHandler} />
                    {enteredPhoneHasErrors && <p className={styles.error_text}>please enter valid phone number</p>}

                    {/* <div className={styles.inlineRadio}>
                        <div className={styles.radio}>
                            <input type="radio" name="type" value="traveller" id="traveller" onChange={TypeChangeHandler} required />
                            <label htmlFor="traveller"> Traveller</label>
                        </div>

                        <div className={styles.radio}>
                            <input type="radio" name="type" value="guide" id="guide" onChange={TypeChangeHandler} />
                            <label htmlFor="guide"> Guide  </label>
                        </div>

                        <div className={styles.radio}>
                            <input type="radio" name="type" value="company" id="company" onChange={TypeChangeHandler} />
                            <label htmlFor="company"> Company</label>
                        </div>

                    </div> */}
                    <div className={styles.check}>
                        <input type="checkbox" id="Rm" />
                        <label htmlFor="Rm">remember me    </label>

                    </div>
                    <a href="#" className={styles.info} >forget password?</a>


                    <div className={styles.btns}>
                    <button type="submit" disabled={!formIsValid}   >Sign Up</button>

                    <button  onClick={cancelSignUpHandler}>Cancel</button>
                </div>


                </form>
                <p className={styles.info}> Have an account? <a href="#">Login</a></p>

            </div>


        </FormModal>




    )
}

export default SignUp;