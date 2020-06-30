export interface Provider {
  id: string;
  name: string;
  avatar_url: string;
}

interface Availability {
  hour: number;
  available: boolean;
}
