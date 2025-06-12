"use client";

import { Icon } from "../Icon";
import styles from "./StardustGlow.module.scss";

const StardustGlow = () => {
  return (
    <div className={styles["stardust-glow"]}>
      <Icon.StardustGlow
        style={{ boxShadow: "0 0 10px 0px white", borderRadius: "50%" }}
        className=" w-[60px] h-[60px]"
      />
    </div>
  );
};

export default StardustGlow;
