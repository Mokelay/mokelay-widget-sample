import React from "react";
import styles from "./index.module.less";

export default function (props) {
  const clickHandle = React.useCallback(() => {
    alert("点击了...");
  }, []);

  return (
    <button className={styles["button-123"]} onClick={clickHandle}>
      按钮123-{props?.name}
    </button>
  );
}
