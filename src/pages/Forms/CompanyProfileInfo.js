import InputHook from "./InputHook";
import FormModal from "./FormModal";
import styles from "./FormStyling/SignUpStyle.module.css";

function CompanyprofileInfo(props) {

    const {
        value: enteredAddress,
        isValid: enteredAddressIsValid,
        hasErrors: enteredAddressHasErrors,
        valueChangeHandler: AddressChangeHandler,
        inputBlurHandler: AddressBlurHandler,
        reset: resetAddress
    } = InputHook((value) => value.trim() !== "");


    const {
        value: enteredAboutUs,
        isValid: AboutUsIsValid,
        hasErrors: AboutUsHasErrors,
        valueChangeHandler: AboutUsChangeHandler,
        inputBlurHandler: AboutUsBlurHandler,
        reset: resetAboutUs,


    } = InputHook((value) => value.trim() !== "")

    const {
        value: UploadedImage,
        isValid: UploadedImageIsValid,
        hasErrors: UploadedImageHasErrors,
        valueChangeHandler: ImageChangeHandler,
        inputBlurHandler: ImageBlurHandler,
        reset: resetImage,

    } = InputHook((value) => value.length != 0);

    let formIsValid = false;

    if (AboutUsIsValid && enteredAddressIsValid && UploadedImageIsValid) {
        formIsValid = true;
    }


    function submitFormHandler(event) {
        event.preventDefault();
        let companyProfile = {
            image: UploadedImage,
            address: enteredAddress,
            about: enteredAboutUs,
        }

        props.onAddCompany(companyProfile);
        resetAboutUs();
        resetAddress();
        resetImage();
    }


    return (
        <FormModal>

            <h1>company profile</h1>

            <form onSubmit={submitFormHandler} className={styles.formCard}>
                <div >

                    <label className={styles.leftp}>profile image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/png, image/gif, image/jpeg"
                        value={UploadedImage}
                        onChange={ImageChangeHandler}
                        onBlur={ImageBlurHandler}
                        required />
                </div>

                {UploadedImageHasErrors && <p className={styles.error_text}>*please, upload an image </p>}
                <input
                    type="text"
                    placeholder="Address"
                    name="address"
                    value={enteredAddress}
                    onChange={AddressChangeHandler}
                    onBlur={AddressBlurHandler}
                    required />
                {enteredAddressHasErrors && <p className={styles.error_text}>*please, add your address</p>}
                <textarea
                    rows="10"
                    cols="50"
                    placeholder="About Us"
                    name="About"
                    value={enteredAboutUs}
                    onChange={AboutUsChangeHandler}
                    onBlur={AboutUsBlurHandler}
                    required />
                {AboutUsHasErrors && <p className={styles.error_text}>* please, write a short note about your company</p>}
                <div className={styles.btns}>
                    <button type="submit" disabled={!formIsValid} className={styles.button} >submit</button>

                    <button className={styles.button}>Cancel</button>
                </div>



            </form>

        </FormModal>
    )



}
export default CompanyprofileInfo;