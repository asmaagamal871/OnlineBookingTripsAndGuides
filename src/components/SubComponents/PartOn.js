import style from "../Styles/AboutUs.module.css";
import Icon from "./Icon";
const PartOne = () => {
  return (
    <div className={style.col} >
                    <ul className={style.list}>
                        <li> 
                            <img src="/Images/air.png" alt="icon" className={style.icon} />Act with purpose</li>
                        <li>
                        <img src="/Images/air.png" alt="icon" className={style.icon}/> do what is right</li>
                        <li> 
                        <img src="/Images/air.png" alt="icon" className={style.icon}/>
                        we operate openly and foster transparency</li>

                        <li>
                        <img src="/Images/air.png" alt="icon" className={style.icon}/>
                            seek solutions and achieve results</li>
                        <li>
                        <img src="/Images/air.png" alt="icon" className={style.icon}/>
                        embrace change and fast innovation</li>



                    </ul>
                </div>
  );
};
export default PartOne;
