export enum Sender {
  User = 'user',
  Bot = 'bot'
}

export interface Source {
  title: string;
  url: string;
}

export interface Message {
  id: string;
  text: string;
  sender: Sender;
  timestamp: Date;
  isStreaming?: boolean;
  sources?: Source[];
  suggestions?: string[];
}

export interface Property {
  id: string;
  title: string;
  price: string;
  address: string;
  beds: number;
  baths: number;
  sqft: number;
  imageUrl: string;
}