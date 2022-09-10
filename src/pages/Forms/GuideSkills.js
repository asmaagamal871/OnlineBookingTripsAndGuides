
import styles from "./FormStyling/SignUpStyle.module.css";


import FormModal from './FormModal';
import React from 'react';
function GuideSkills() {

    let formIsValid = false;


    function submitFormHandler(event) {
        event.preventDefault();
    }
    return (
        <FormModal>
            <form onSubmit={submitFormHandler} className={styles.formCard}>




                <label>Uplaod Certificates</label>
                <input type="file" name="" multiple />


                <label for="languages"> spoken languages:</label>

                <select name="languages" id="languages" multiple>
                    <option value="English">English</option>
                    <option value="Italian">Italian</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                    <option value="Russian">Russian</option>
                </select>




                <button type="submit" disabled={!formIsValid}>Submit</button>
            </form>

        </FormModal>
    )
}

export default GuideSkills;