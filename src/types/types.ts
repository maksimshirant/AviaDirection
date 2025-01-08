export interface Ticket {
   id: string;
   price: number;
   stops: number;
   destination: string;
   origin: string;
   duration: string;
}

export type Currency = 'USD' | 'EUR' | 'RUB';

export interface TicketListProps {
   tickets: Ticket[];
   currency: Currency;
   convertPrice: (price: number, currency: Currency) => string;
}

export interface FiltersProps {
   selectedStops: number[];
   onFilterStopsChange: (stop: number) => void;
   currency: Currency;
   onCurrencyChange: (currency: Currency) => void;
}