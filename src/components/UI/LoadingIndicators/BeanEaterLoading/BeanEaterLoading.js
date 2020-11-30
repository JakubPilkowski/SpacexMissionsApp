import classes from "./BeanEaterLoading.module.css";

const BeanEaterLoading = () => (
  <div className={classes.LoadingWrapper}>
    <div className={classes.LoadingContent}>
      <div className={classes.LoadingBeanContent}>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
    <h2>Loading...</h2>
  </div>
);

export default BeanEaterLoading;
