import Header from "@/Layout/Header";
import Left from "@/Layout/Left";
import Right from "@/Layout/Right";

import styles from "./App.module.less";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.container}>
        <Left />
        <Right />
      </div>
    </div>
  );
}

export default App;
