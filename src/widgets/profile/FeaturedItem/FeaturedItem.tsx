import { SkinCard } from "@/entities/skin";
import { Typography } from "@/shared/ui/Typography";
import styles from "./FeaturedItem.module.scss";
const FeaturedItem = () => {
  return (
    <div className={styles.featuredItem}>
      <div className="flex flex-col gap-2">
        <Typography color="white" weight="semibold" size="xl">
          M4A4 | Howl
        </Typography>
        <Typography color="secondary" lineHeight="tight">
          Самый дорогой предмет из кейса за последнее время
        </Typography>
      </div>
      <div className="flex justify-end">
        <SkinCard width={170} height={100} />
      </div>
    </div>
  );
};

export default FeaturedItem;
