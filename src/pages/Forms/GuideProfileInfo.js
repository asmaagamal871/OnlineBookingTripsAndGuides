import { useState } from 'react';

import styles from "./FormStyling/SignUpStyle.module.css";
import InputHook from './InputHook';
import FormModal from './FormModal';


function GuideProfileInfo(props) {
    const [ageIsValid, setAgeIsValid] = useState(false);
    const [guideGender, setGuideGender] = useState("");
    const [guideBirthDate, setBirthDate] = useState("");
    const [enteredCity, setCity] = useState("");

    //price validation
    const {
        value: enteredPrice,
        isValid: enteredpriceIsValid,
        hasErrors: enteredPriceHasErrors,
        valueChangeHandler: priceChangeHandler,
        inputBlurHandler: priceBlurHandler,
        reset: resetPrice
    } = InputHook((value) => value > 100);

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

    //birthday Validation
    // const{

    // }=InputHook((value)=>value);


    function GenderChangeHandler(event) {

        setGuideGender(event.target.value);
    };

    function DateChangeHandler(event) {
        let date = new Date(event.target.value);
        let year = date.getFullYear();
        if (1975 < year && year < 2001) {
            setAgeIsValid(true);
            setBirthDate(event.target.value)

        }


    };


    function CityChangeHandler(event) {

        setCity(event.target.value);
    }


    const {
        value: enteredAboutUs,
        isValid: AboutUsIsValid,
        hasErrors: AboutUsHasErrors,
        valueChangeHandler: AboutUsChangeHandler,
        inputBlurHandler: AboutUsBlurHandler,
        reset: resetAboutUs,


    } = InputHook((value) => value.trim() !== "")



    let formIsValid = false;

    if (enteredpriceIsValid && enteredIdIsValid && uploadedImageIsValid && ageIsValid && AboutUsIsValid) {

        formIsValid = true;
    }





    function submitFormHandler(event) {
        event.preventDefault();
        if (!formIsValid) {
            return
        }
        let guideInfo = {
            id: enteredId,
            birthDate: guideBirthDate,
            price: enteredPrice,
            city: enteredCity,
            image: uploadedImage,
            gender: guideGender,
            about: enteredAboutUs
        }
        console.log(guideInfo)
        props.onAddGuide(guideInfo);

        resetImage();
        resetPrice();
        resetId();
        resetAboutUs();
    }









    return (
        <FormModal>

            <h1> Profile Information</h1>
            <form onSubmit={submitFormHandler} className={`${styles.formCard} ${styles.scroll}`}>





                <input
                    type="number"
                    min="0"

                    placeholder="National ID number"
                    name="id"
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

                    required className={styles.inputf}
                // onChange={DateChangeHandler}

                />





                <input type="number"
                    placeholder='price per day'
                    name="price"
                    value={enteredPrice}
                    onChange={priceChangeHandler}
                    onBlur={priceBlurHandler} required />
                {enteredPriceHasErrors && <p className={styles.error_text}>*price should not be less than 100</p>}


                <textarea
                        rows="10"
                        cols="50"
                        placeholder="About Us"
                        name="About"
                        value={enteredAboutUs}
                        onChange={AboutUsChangeHandler}
                        onBlur={AboutUsBlurHandler}
                        required />

                <select name="city" id="city" onChange={CityChangeHandler} required>
                    <option disabled value="" >city</option>

                    <option value="Alexandria">Alexandria</option>
                    <option value="Cairo">Cairo</option>
                    <option value="Giza">Giza</option>
                    <option value="Aswaan">Aswaan</option>
                    <option value="Luxur">Luxur</option>
                    <option value="Hurghada">Hurghada</option>
                    <option value="Port Said">Port Said</option>



                </select>







                <label>profile Image</label>

                <input type="file"
                    accept="image/png, image/gif, image/jpeg"
                    name="image"
                    value={uploadedImage}
                    onChange={ImageChangeHandler}
                    onBlur={ImageBlurHandler}
                    required />









                <div className={styles.inlineRadio}>



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
                 

                    <div>

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

                </div>
                <div className={styles.btns}>
                    <button type="submit" disabled={!formIsValid} className={styles.button} >Submit </button>

                    <button className={styles.button}>Cancel</button>
                </div>

            </form>






        </FormModal>
    )




}



export default GuideProfileInfo;