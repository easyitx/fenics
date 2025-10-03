import styles from "./page.module.scss";

export default function Upgrades() {
  return (
    <div className="min-h-screen">
      <div className={styles.container}>
        <div className={styles.usersItem}></div>
        <div className={styles.initial}></div>
        <div className={styles.upgradeItem}></div>
      </div>
      <div></div>
    </div>
  );
}
