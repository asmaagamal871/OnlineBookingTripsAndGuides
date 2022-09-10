import React from 'react';
import InputHook from './InputHook';
import FormModal from './FormModal';
import styles from "./FormStyling/SignUpStyle.module.css";
import {useState} from 'react';
function AddReviewForm(props){
    const[formIsValid,setFormIsValid]=useState(false);
    
    const {
        value: enteredMsg,
        isValid: MsgIsValid,
        hasErrors: MsgHasErrors,
        valueChangeHandler: MsgChangeHandler,
        inputBlurHandler: MsgBlurHandler,
        reset: resetMsg,


    } = InputHook((value) => value.trim() !== "")


    if(MsgIsValid){
        setFormIsValid(true);
    }
function submitFormHandler(event){
    event.preventDefault();

    if(!formIsValid){
        return;
    }

let rev={
    body:enteredMsg,
}

props.onAddRev(rev);
    resetMsg();

    props.onHide();

}

    return(


        <FormModal>
            <h1>Add Review</h1>
            <form onSubmit={submitFormHandler} className={`${styles.formCard} ${styles.scroll}`}>
            <textarea
                        rows="10"
                        cols="50"
                        placeholder=" review"
                        name="rev"
                        value={enteredMsg}
                        onChange={MsgChangeHandler}
                        onBlur={MsgBlurHandler}
                       className={styles.areatext} />


       <div className={styles.btns}>
                    <button type="submit" disabled={!formIsValid}  >Submit </button>

                  
                    <button  onClick={() => props.onHide()}>Cancel</button>
                </div>
            </form>
        </FormModal>

    )

}
export default AddReviewForm;