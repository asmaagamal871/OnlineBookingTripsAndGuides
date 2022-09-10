import style from "./FilterDropdown.module.css";
const FilterGuide =()=>{
return(
    <div className={style.filter}>
            <div className={style.allFilter} >
                <form className={style.allFilterForm}>
                    <select name="cities" id="city" className={style.selectFilter}>
                        <option value="City">City</option>
                        <option value="Alexandria">Alexandria</option>
                        <option value="Cairo">Cairo</option>
                        <option value="Aswan">Aswan</option>
                        <option value="Matrouh">Matrouh</option>
                        <option value="luxor">luxor</option>
                        <option value="Siwa">Siwa</option>
                        <option value="Qina">Qina</option>
                    </select>
                    <select name="cities" id="city" className={style.selectFilter}>
                        <option value="">Gender</option>
                        <option value="Arabic">Male </option>
                        <option value="English">Female</option>
                       
                       
                    </select>
                    <input type="number" placeholder="Price" className={style.inputFilter} ></input>

                    <button >Filter</button>
                </form>
            </div>
        </div>
)

}
export default FilterGuide