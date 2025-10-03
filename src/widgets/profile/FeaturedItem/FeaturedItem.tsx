import { SkinCard } from "@/entities/skin";
import { Typography } from "@/shared/ui/Typography";
import styles from "./FeaturedItem.module.scss";
const FeaturedItem = () => {
  return (
    <div className={styles.featuredItem}>
      <div className="flex flex-col gap-2">
        <Typography color="white" weight="semibold">
          M4A4 | Howl
        </Typography>
        <Typography color="secondary">
          Самый дорогой предмет из кейса за последнее время
        </Typography>
      </div>
      <div className="flex justify-end">
        <SkinCard />
      </div>
    </div>
  );
};

export default FeaturedItem;
