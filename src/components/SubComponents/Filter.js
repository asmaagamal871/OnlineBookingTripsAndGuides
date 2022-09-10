import style from "./FilterDropdown.module.css";
import cl from "./ButtonDes.module.css";
// import { filterData, SearchType } from 'filter-data';
import {useState} from 'react';

// search firstName contains 'dan'





const Filter = (props) => {
//     const  [filterPrice,setFilterPrice]=useState();

//     const searchConditions = [
//         {
//           key: 'price',
//           value: filterPrice,
//           type: SearchType.LT,
//         },
//       ];
 
//     console.log(filterPrice);
//     console.log(props.AllTrips);

//     const result = filterData(props.AllTrips, searchConditions);
//     props.onFilter(result);
//     console.log(result);

    return (
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
                    <input type="number" placeholder="Price" className={style.inputFilter}
                    // onChange={(e)=>setFilterPrice(e.target.value)}
                     ></input>

                    {/* <input
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        placeholder="From" className={style.inputFilter}
                    />
                    <input
                        type="text"
                        onChange={(e) => console.log(e.target.value)}
                        onFocus={(e) => (e.target.type = "date")}
                        onBlur={(e) => (e.target.type = "text")}
                        placeholder="To" className={style.inputFilter} */}
                    {/* /> */}
                    
                    
                    <button className={cl.buttonDes} >Filter</button>
                </form>
            </div>
        </div>
    )
}
export default Filter;