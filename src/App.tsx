
import React, { useEffect, useState } from 'react';
import ticketsData from './data/tickets.json';
import Filters from './components/Filters';
import TicketList from './components/TicketList';
import { Currency, Ticket } from './types/types';
import styles from '../src/style/App.module.scss';



const currencyRates: Record<Currency, number> = {
  USD: 1,
  EUR: 0.97,
  RUB: 105,
};

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Ticket[]>([]);
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [currency, setCurrency] = useState<Currency>('USD');

  useEffect(() => {
    const sortedTickets = [...ticketsData].sort((a, b) => a.price - b.price);
    setTickets(sortedTickets);
    setFilteredTickets(sortedTickets);
  }, []);

  useEffect(() => {
    if (selectedStops.length === 0) {
      setFilteredTickets(tickets);
    } else {
      setFilteredTickets(tickets.filter(ticket => selectedStops.includes(ticket.stops)));
    }
  }, [selectedStops, tickets]);

  const handleFilterStopsChange = (stop: number) => {
    setSelectedStops(prev =>
      prev.includes(stop) ? prev.filter(s => s !== stop) : [...prev, stop]
    );
  };

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
  };

  const convertPrice = (price: number, currency: Currency) =>
    (price * currencyRates[currency]).toFixed(2);

  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <Filters
          selectedStops={selectedStops}
          onFilterStopsChange={handleFilterStopsChange}
          currency={currency}
          onCurrencyChange={handleCurrencyChange}
        />
        <TicketList tickets={filteredTickets} currency={currency} convertPrice={convertPrice} />
      </div>
    </div>
  );
};


export default App;
