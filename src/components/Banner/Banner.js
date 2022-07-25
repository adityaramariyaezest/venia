import Title from "../Headings/Title/Title";
import banner from "./banner.module.scss";

const Banner = ({ title, image, description }) => {
  return (
    <div className={banner.banner}>
      <div className={banner.banner__img}>
        <img src={image} alt={description} height="150" />
      </div>

      <div className={banner.banner__title}>
        <Title title={title} isSpecial />
      </div>
    </div>
  );
};

export default Banner;
