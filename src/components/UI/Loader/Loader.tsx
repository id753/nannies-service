import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <span className={css.loader}></span>
      <p className={css.loaderText}>The list of nannies is loading</p>
    </div>
  );
};

export default Loader;
