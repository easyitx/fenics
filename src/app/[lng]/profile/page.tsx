import { ProfileCard } from "@/widgets/profile/ProfileCard";
import { SkinsTable } from "@/widgets/profile/SkinsTable";
import styles from "./page.module.scss";

export default function ProfilePage() {
  return (
    <div className={styles.profilePage}>
      <div className={styles.profileContainer}>
        <ProfileCard className={styles.profileCard} />
        <SkinsTable className={styles.skinsTable} />
      </div>
    </div>
  );
}
