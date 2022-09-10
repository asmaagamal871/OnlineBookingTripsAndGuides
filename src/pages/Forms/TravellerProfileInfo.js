import { useState } from 'react';

import styles from "./FormStyling/SignUpStyle.module.css";

import InputHook from './InputHook';
import FormModal from './FormModal';


function TravellerProfileInfo(props) {


    const [ageIsValid, setAgeIsValid] = useState(false);
    const [travellerBirthDate, setBirthDate] = useState("");
    const [travellerGender, setTravellerGender] = useState("");




    //id validation
    const {
        value: enteredId,
        isValid: enteredIdIsValid,
        hasErrors: enteredIdHasErrors,
        valueChangeHandler: IdChangeHandler,
        inputBlurHandler: IdBlurHandler,
        reset: resetId,
    } = InputHook((value) => value.length === 14)


    //input Image validation
    const {
        value: uploadedImage,
        isValid: uploadedImageIsValid,
        HasErrors: uploadedImageHasErrors,
        valueChangeHandler: ImageChangeHandler,
        inputBlurHandler: ImageBlurHandler,
        reset: resetImage,
    } = InputHook((value) => value.length !== 0)






    function GenderChangeHandler(event) {
        setTravellerGender(event.target.value);


    };

    function DateChangeHandler(event) {
        let date = new Date(event.target.value);
        let year = date.getFullYear();
        if (year > 2005) {
            setAgeIsValid(false);

        } else {
            setAgeIsValid(true);
            setBirthDate(event.target.value);
        }


    };

    let formIsValid = false;

    if (enteredIdIsValid && uploadedImageIsValid && ageIsValid) {

        formIsValid = true;
    }











    function submitFormHandler(event) {
        event.preventDefault();
        if (!formIsValid) {
            return;
        }
        let Info = {
            id: enteredId,
            birthdate: travellerBirthDate,
            image: uploadedImage,
            gender: travellerGender

        }

        props.onAddTraveller(Info);

        resetId();
        resetImage();

    }


    return (
        <FormModal>
            <h1>profile Information</h1>

            <form onSubmit={submitFormHandler} className={styles.formCard}>

                <input
                    type="number"

                    placeholder="National ID number"
                    name="ask mariam"
                    value={enteredId}
                    onChange={IdChangeHandler}
                    onBlur={IdBlurHandler}
                />
                {enteredIdHasErrors && <p className={styles.error_text}>*please, enter valid Id Number</p>}


                <input
                    type="text"
                    placeholder="birthday"
                    onChange={(e) => console.log(e.target.value)}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => (e.target.type = "text")}
                    // onChange={DateChangeHandler}
                    required
                />


                <label className={styles.leftp}> profile image</label>


                <input
                    className={styles.center}
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    name="image"
                    value={uploadedImage}
                    onChange={ImageChangeHandler}
                    onBlur={ImageBlurHandler}
                    required
                />


                <div className={`${styles.inlineRadio} ${styles.leftflex}`}>

                    <div className={styles.radio}>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            id="male"
                            onChange={GenderChangeHandler}
                            required
                        />

                        <label htmlFor="male">
                            male

                        </label>


                    </div>
                    <div className={styles.radio}>



                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            id="female"
                            onChange={GenderChangeHandler}

                            required />

                        <label htmlFor="female">  female</label>
                    </div>



                </div>
                <div className={styles.btns}>
                    <button type="submit" disabled={!formIsValid} className={styles.button} >Submit</button>

                    <button className={styles.button}>Cancel</button>
                </div>

            </form>

        </FormModal>
    )

}

export default TravellerProfileInfo;