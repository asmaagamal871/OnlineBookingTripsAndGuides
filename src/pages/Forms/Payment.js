import styles from "./FormStyling/SignUpStyle.module.css";
import FormModal from "./FormModal";
import InputHook from "./InputHook";
import { useState } from 'react';

function Payment(props) {

    const [exp_date, setExp_date] = useState("")

    //cardnumber
    const {
        value: enteredCardNumber,
        isValid: cardNumberisValid,
        hasErrors: cardNumberHasErrors,
        valueChangeHandler: cardChangeHandler,
        inputBlurHandler: cardBlurHandler,
        reser: resetCard,


    } = InputHook((value) => value.length == 11 && value > 0)


    //cardholder
    const {
        value: enteredCardHolder,
        isValid: cardHolderIsValid,
        hasErrors: cardHolderHasErrors,
        valueChangeHandler: cardHolderChangeHandler,
        inputBlurHandler: cardHolderBlurHandler,
        reset: resetCardHolder
    }
        = InputHook((value) => value.trim() != 0);

    //cvv
    const {

        value: enteredCvv,
        isValid: ccvvIsValid,
        hasErrors: cvvHasErrors,
        valueChangeHandler: cvvChangeHandler,
        inputBlurHandler: cvvBlurHandler,
        reset: resetCvv
    } = InputHook((value) => value.trim() != 0 && value.length == 4)



    function DateChangeHandler(event) {
        setExp_date(event.target.value);

    }



    let formIsValid = false;

    if (cardNumberisValid && cardHolderIsValid && ccvvIsValid) {
        formIsValid = true;
    }

    function submitFormHandler(event) {
        event.preventDefault();

        if (!formIsValid) {
            return
        }
        let data = {
            cardNumber: enteredCardNumber,
            cardHolder: enteredCardHolder,
            cvv: enteredCvv,
            expDate: exp_date
        }
        props.onAddCard(data);

        resetCard();
        resetCardHolder();
        resetCvv();

    }

    return (


        <FormModal>


            <h1>Payment Method</h1>
            <form onSubmit={submitFormHandler} className={styles.formCard}>
                <div>

                </div>
                <div>

                    <input
                        type="number"
                        min="1"
                        value={enteredCardNumber}
                        onChange={cardChangeHandler}
                        onBlur={cardBlurHandler}
                        placeholder="Card Number"
                        required />
                    {cardNumberHasErrors && <p className={styles.error_text}> *incorrect card number</p>}

                    <div className={styles.inlineRadio}>
                        <div>

                            <input type="text"
                                name="exp_date"
                                onChange={(e) => console.log(e.target.value)}
                                onFocus={(e) => (e.target.type = "date")}
                                onBlur={(e) => (e.target.type = "text")}
                                placeholder="Expiration"
                                required className={styles.inputf}
                            // onChange={DateChangeHandler}
                            />
                        </div>
                        <div>
                            <input type="number"
                                name="cvv"
                                value={enteredCvv}
                                onChange={cvvChangeHandler}
                                onBlur={cvvBlurHandler}
                                placeholder="CVV"
                                className={styles.inputf}
                                required />
                            {cvvHasErrors && <p className={styles.error_text}>
                                *required</p>}


                        </div>


                    </div>




                    <input type="text"
                        name="cardHolder"
                        placeholder="Card Holder"
                        value={enteredCardHolder}
                        onChange={cardHolderChangeHandler}
                        onBlur={cardHolderBlurHandler}
                        required />
                    {cardHolderHasErrors && <p className={styles.error_text}>
                        *required</p>}
                </div>
                <div className={styles.btns}>
                    <button type="submit" disabled={!formIsValid} className={styles.button} >Add Card</button>

                    <button className={styles.button}>Cancel</button>
                </div>
            </form>

        </FormModal>

    )



}

export default Payment;