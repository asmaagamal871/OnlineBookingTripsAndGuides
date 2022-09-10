
import FormModal from "./FormModal";
import classes from "./FormStyling/SignUpStyle.module.css";

import styles from "./FormStyling/GeneralFormStyle.module.css";
function AddTrip() {


    let formIsValid = false;
    function submitFormHandler(event) {
        event.preventDefault();
    }

    return (
        <FormModal>

            <h1>Add Trip</h1>
            <div >
                <form onSubmit={submitFormHandler} className={classes.formCard}  >

                    <div className={`${styles.row} ${styles.scroll}`}>
                        <div className={styles.col}>

                            <input type="text" placeholder="title" name="title" className={classes.inputf} required />
                            <textarea placeholder="description" name="description" required />
                            <textarea placeholder="guidelines" name="guidelines" required />

                            <input type="text" placeholder="duration" name="duration" required className={classes.inputf} />


                            <input type="number" placeholder="price" name="price" required className={classes.inputf} />

                            <div>
                                <input type="number" min="0" id="noOfSeats" name="number of seats" placeholder="number of seats" className={classes.inputf} />
                            </div>


                            <div className={classes.check} >
                                <input type="checkbox" id="terms" required />

                                <label htmlFor="terms">I agree to <a href="#">terms and conditions</a></label>

                            </div>


                        </div>







                        <div className={styles.col}>






                            <div className={styles.row}>
                                <div>

                                    <input
                                        type="text" id="from_Date" name="from"
                                        onChange={(e) => console.log(e.target.value)}
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        placeholder="From" required
                                        className={classes.inputf}
                                    />


                                </div>
                                <div>

                                    <input type="text" id="To_Date" name="To"
                                        onChange={(e) => console.log(e.target.value)}
                                        onFocus={(e) => (e.target.type = "date")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        placeholder="To"
                                        required className={classes.inputf} />


                                </div>


                            </div>

                            <div className={styles.row}>
                                <div>
                                    <input type="text" id="departure_time" name="departure_time"
                                        onChange={(e) => console.log(e.target.value)}
                                        onFocus={(e) => (e.target.type = "time")}
                                        onBlur={(e) => (e.target.type = "text")}
                                        placeholder="Dep. Time"
                                        required className={classes.inputf} />
                                </div>
                                <div>
                                    <input type="text" name="departure_place" id="departure_place" placeholder="departure_place" className={classes.inputf} />

                                </div>
                            </div>

                            <div>
                                <label>Upload cover image</label>
                                <input
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    name="Cover_image"

                                    required
                                />

                            </div>

                            <div>
                                <label>Upload trip images</label>
                                <input
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg"
                                    name="images"
                                    multiple
                                    required

                                />

                            </div>









                        </div>

                    </div>

                    <div className={styles.btns}>
                        <button type="submit" disabled={!formIsValid} className={styles.button} >Add Trip</button>

                        <button className={styles.button}>Cancel</button>
                    </div>






                </form>
            </div>

        </FormModal>
    )
}

export default AddTrip;