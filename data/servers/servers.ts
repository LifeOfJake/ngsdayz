export interface Server {
  id: string;
  name: string;
  subtitle: string;
  status: "Online" | "Restarting" | "Offline" | "Coming Soon";
  players: number;
  maxPlayers: number;
  queue: number;
  restart: string;
  map: string;
  version: string;
  platform: "PC";
  ip: string;
  port: number;
}

export const SERVER_STATUS_VARIANTS = {
  Online: "lime",
  Restarting: "warning",
  Offline: "danger",
  "Coming Soon": "white",
} as const;

export const servers: Server[] = [
  {
    id: "chernarus-eu1",

    name: "NGS Chernarus #EU1",

    subtitle: "Under Development",

    status: "Coming Soon",

    players: 68,

    maxPlayers: 100,

    queue: 3,

    restart: "00:42:18",

    map: "Chernarus",

    version: "1.28",

    platform: "PC",

    ip: "185.216.144.21",

    port: 2302,
  },

  {
    id: "livonia-eu1",

    name: "NGS Livonia #EU1",

    subtitle: "Coming Soon",

    status: "Coming Soon",

    players: 0,

    maxPlayers: 100,

    queue: 0,

    restart: "--:--:--",

    map: "Livonia",

    version: "1.28",

    platform: "PC",

    ip: "TBA",

    port: 0,
  },
];