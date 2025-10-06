export interface StatItem {
  id: string;
  value: string;
  label: string;
  icon: string;
}

export const statsMock: StatItem[] = [
  {
    id: "1",
    value: "2 531",
    label: "Онлайн",
    icon: "wifi",
  },
  {
    id: "2",
    value: "250",
    label: "Игроков",
    icon: "users",
  },
  {
    id: "3",
    value: "50 123",
    label: "Открыто кейсов",
    icon: "unlock",
  },
  {
    id: "4",
    value: "23 425",
    label: "Апгрейдов",
    icon: "lightning",
  },
];
