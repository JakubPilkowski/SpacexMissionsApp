import classes from "./BeanEaterLoading.module.css";

const BeanEaterLoading = () => (
  <div>
    <div className={classes.LoadingWrapper}>
      <div className={classes.LoadingContent}>
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
    <h2
      style={{
        color: " #ff8c00",
        margin: 0,
        padding: "12px",
        textAlign: "center",
      }}
    >
      Loading...
    </h2>
  </div>
);

export default BeanEaterLoading;
