import container from "./container.module.scss";

const Container = ({ children }) => {
  return <div className={container.container}>{children}</div>;
};

export default Container;
