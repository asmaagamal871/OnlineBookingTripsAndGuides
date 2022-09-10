import Cover from "../SubComponents/Cover";
import ChoosePart from "../SubComponents/ChoosePart";
import PopularCities from "../SubComponents/PopularCities";
import WhyChooseUs from "../SubComponents/WhyChooseUs";
import Partners from "../AboutUs/Partners";
import cl from "../SubComponents/ButtonDes.module.css";

const Home = () => {
  return (
    <div>
      <Cover />
      <ChoosePart />
      <PopularCities />
      <WhyChooseUs />
      <Partners />
      {/* <Icon image='Path.png'/> */}


    </div>
  );
};
export default Home;
