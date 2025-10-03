import { Button } from "@/shared/ui";
import { AppPopover } from "@/shared/ui/Popover/Popover";
import { Typography } from "@/shared/ui/Typography";

export default function Upgrades() {
  return (
    <div className="min-h-screen">
      <Typography as="h1" color="primary">
        Upgrades
      </Typography>
      <AppPopover trigger={<Button>Открыть</Button>}>
        <div>Открыто</div>
      </AppPopover>
    </div>
  );
}
