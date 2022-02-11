import { Routes, Route } from "react-router-dom";

import Tool1 from "@/RoutePage/Tool1";
import Tool2 from "@/RoutePage/Tool2";

import styles from "./index.module.less";

export default () => {
  return (
    <div className={styles.right}>
      <Routes>
        <Route path="tool1" element={<Tool1 />} />
        <Route path="tool2" element={<Tool2 />} />
      </Routes>
    </div>
  );
};
