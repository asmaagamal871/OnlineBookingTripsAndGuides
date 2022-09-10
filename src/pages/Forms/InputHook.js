import { useState } from "react";

function InputHook(validateValue){

    const[enteredValue,setEnteredValue]=useState("");
    const[isTouched,setIsTouched]=useState(false);

    const valueIsValid =validateValue(enteredValue);
    const hasErrors=!valueIsValid;



    function valueChangeHandler (event){
        setEnteredValue(event.target.value);
    }
    function inputBlurHandler (event){
        setIsTouched(true);
    }
    function reset(){
        setEnteredValue("");
        setIsTouched(false);

    }

    return{
        value:enteredValue,
        isValid:valueIsValid,
        hasErrors,
        valueChangeHandler,
        inputBlurHandler,
        reset

    }



}
export default InputHook;