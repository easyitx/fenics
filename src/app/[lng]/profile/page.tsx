import { Typography } from "@/shared/ui/Typography";

export default function ProfilePage() {
  return (
    <div className="p-6">
      <Typography as="h1" size="h1" weight="bold" className="mb-6">
        Профиль пользователя
      </Typography>

      <div className="space-y-4">
        <Typography as="h2" size="h3" weight="semibold">
          Информация о пользователе
        </Typography>

        <Typography size="body" lineHeight="relaxed">
          Добро пожаловать в ваш профиль! Здесь вы можете управлять своими
          настройками и просматривать статистику.
        </Typography>

        <div className="mt-8">
          <Typography as="h3" size="h4" weight="medium" className="mb-4">
            Статистика
          </Typography>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-surface p-4 rounded-lg">
              <Typography size="small" color="secondary" className="mb-2">
                Игр сыграно
              </Typography>
              <Typography size="2xl" weight="bold">
                1,234
              </Typography>
            </div>

            <div className="bg-surface p-4 rounded-lg">
              <Typography size="small" color="secondary" className="mb-2">
                Побед
              </Typography>
              <Typography size="2xl" weight="bold">
                856
              </Typography>
            </div>

            <div className="bg-surface p-4 rounded-lg">
              <Typography size="small" color="secondary" className="mb-2">
                Процент побед
              </Typography>
              <Typography size="2xl" weight="bold">
                69.4%
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Typography as="h3" size="h4" weight="medium" className="mb-4">
            Настройки
          </Typography>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Typography size="body">Уведомления</Typography>
              <div className="w-12 h-6 bg-accent-primary rounded-full"></div>
            </div>

            <div className="flex items-center justify-between">
              <Typography size="body">Темная тема</Typography>
              <div className="w-12 h-6 bg-accent-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
