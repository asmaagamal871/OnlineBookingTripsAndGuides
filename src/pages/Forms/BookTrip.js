
import FormModal from "./FormModal";
import styles from "./FormStyling/SignUpStyle.module.css";
import InputHook from './InputHook';
function BookTrip(props) {

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
        value: enteredSeats,
        isValid: enteredSeatsIsValid,
        hasErrors: enteredSeatsHasErrors,
        valueChangeHandler: SeatssChangeHandler,
        inputBlurHandler: SeatsBlurHandler,
        reset: resetSeats,
    } = InputHook((value) => value.trim() != 0 && value>0) ;


    let formIsValid = false;

    if (enteredIdIsValid && enteredSeatsIsValid) {
        formIsValid = true;
    }
    function submitFormHandler(event) {
        event.preventDefault();
        if (!formIsValid) {
            return

        }
        let bookData = {
           
            seats: enteredSeats,
            phone1: enteredphone1,
            phone2: enteredphone2,

        }
        props.onBookTrip(bookData);

        props.onHide();
    }
    return (
        <FormModal>
            <div>
                <h1>trip booking</h1>
                <form onSubmit={submitFormHandler} className={styles.formCard}>

                    <input type="number" placeholder="National Id" name="" 
                    value={enteredId}
                    onChange={IdChangeHandler}
                    onBlur={IdBlurHandler}


                     />
                    <input type="number" placeholder="Phone Number"
                    value={enteredphone1}
                    onChange={phone1ChangeHandler} 
                    onBlur={phone1BlurHandler}
                     />
                    <input type="number" placeholder="Phone Number2" 
                       value={enteredphone2}
                       onChange={phone2ChangeHandler} 
                       onBlur={phone2BlurHandler}/>

                    <div>

                        <input type="number" min="1" name="" placeholder="number of seats" 
                        value={enteredSeats}
                        onChange={SeatssChangeHandler}
                        onBlur={SeatsBlurHandler}
                        
                        
                        />


                        <p>{props.price} EGP</p>
                    </div>


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

                        <button  onClick={()=>props.onHide()}>Cancel</button>
                    </div>


                </form>
            </div>
        </FormModal>
    )
}

export default BookTrip;