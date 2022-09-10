import FormModal from "./FormModal";
import styles from "./FormStyling/SignUpStyle.module.css";
import InputHook from './InputHook';
import { useState } from 'react';

function BookGuide(props) {
    const [fromDate, setFromDate] =useState("");
    const [toDate, setToDate] =useState("");

    function fromDateHandler(event) {
        setFromDate(event.target.value);
    }

    function toDateHandler(event) {
        setToDate(event.target.value);
    }

    const {
        value: enteredphone1,
        isValid: enteredPhone1IsValid,
        hasErrors: enteredPhone1HasErrors,
        valueChangeHandler: phone1ChangeHandler,
        inputBlurHandler: phone1BlurHandler,
        reset: resetphone1,
    } = InputHook((value) => value.trim() != 0);
    const {
        value: enteredphone2,
        isValid: enteredPhone2IsValid,
        hasErrors: enteredPhone2HasErrors,
        valueChangeHandler: phone2ChangeHandler,
        inputBlurHandler: phone2BlurHandler,
        reset: resetphone2,
    } = InputHook((value) => value.trim() != 0);

    const {
        value: enteredId,
        isValid: enteredIdIsValid,
        hasErrors: enteredIdHasErrors,
        valueChangeHandler: IdChangeHandler,
        inputBlurHandler: IdBlurHandler,
        reset: resetId,
    } = InputHook((value) => value.length === 14)

    const {
        value: enteredDays,
        isValid: enteredDaysIsValid,
        hasErrors: enteredDaysHasErrors,
        valueChangeHandler: DaysChangeHandler,
        inputBlurHandler: DaysBlurHandler,
        reset: resetDays,
    } = InputHook((value) => value.trim() != 0 && value>0);

    const {
        value: enteredMsg,
        isValid: enteredMsgIsValid,
        hasErrors: enteredMsgHasErrors,
        valueChangeHandler: MsgChangeHandler,
        inputBlurHandler: MsgBlurHandler,
        reset: resetMsg,
    } = InputHook((value) => value.trim() != 0);



    let formIsValid = false;

    if (enteredIdIsValid && enteredMsgIsValid && enteredDaysIsValid) {
        formIsValid = true;
    }
    function submitFormHandler(event) {
        event.preventDefault();


        if (!formIsValid) {
            return

        }
        let bookData = {
            from: fromDate,
            to: toDate,
            message: enteredMsg,
            duration: enteredDays,
            phone1: enteredphone1,
            phone2: enteredphone2,

        }
        props.onBookGuide(bookData);

            resetId();
            resetDays();
            resetMsg();
            resetphone1();
            resetphone2();

        props.onHide();
    }

    return (
        <FormModal>


            <div className={styles.hieght}>
                <h1>Guide Booking</h1>
                <form onSubmit={submitFormHandler} className={styles.formCard}>

                    <input
                        type="number"

                        placeholder="National Id"
                        name=""
                        value={enteredId}
                        onChange={IdChangeHandler}
                        onBlur={IdBlurHandler}
                    />
                    <input type="number"
                        placeholder="Phone Number"
                        value={enteredphone1}
                        onChange={phone1ChangeHandler}
                        onBlur={phone1BlurHandler}
                    />
                    <input type="number" placeholder="Phone Number2"
                        value={enteredphone2}
                        onChange={phone2ChangeHandler}
                        onBlur={phone2BlurHandler} />





                    <div className={styles.inlineRadio}>
                        <div className={styles.radio}>
                            <input type="text" id="from_date" name="from_date"
                                onChange={fromDateHandler}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                                placeholder="From" required
                                className={styles.inputf}
                            />
                        </div>
                        <div className={styles.radio}>
                            <input type="text" name="to" onChange={toDateHandler}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                                placeholder="To" required
                                className={styles.inputf} />
                        </div>



                    </div>

                    <div className={styles.inlineRadio}>

                        <input type="number" min="1" name="" placeholder="number of days"
                            value={enteredDays}
                            onChange={DaysChangeHandler}
                            onBlur={DaysBlurHandler}

                        />



                        <p>{props.price}200 EGP</p>
                    </div>


                    <textarea placeholder="Message" rows="10" cols="10" className={styles.hArea}
                        value={enteredMsg}
                        onChange={MsgChangeHandler}
                        onBlur={MsgBlurHandler}
                    ></textarea>

                    <div className={styles.check}>
                        <input type="checkbox" id="terms" required />

                        <label htmlFor="terms">I agree to <a href="#">terms and conditions</a></label>
                    </div>
                    <div className={styles.check}>
                        <input type="checkbox" id="confirmation" />
                        <label htmlFor="confirmation">confirmation email</label>
                    </div>

                    <div className={styles.btns}>
                        <button type="submit"
                            //  disabled={!formIsValid}
                             >Book</button>

                        <button  onClick={() => props.onHide()}>Cancel</button>
                    </div>


                </form>
            </div>
        </FormModal>
    )
}
export default BookGuide;