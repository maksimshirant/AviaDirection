import React from 'react';
import { TicketListProps } from '../types/types';
import styles from '../style/TicketList.module.scss';

const TicketList: React.FC<TicketListProps> = ({ tickets, currency, convertPrice }) => (
   <div className={styles['ticket-list']}>
      {tickets.map(ticket => (
         <div key={ticket.id} className={styles.ticket}>
            <h3>{`${ticket.origin} → ${ticket.destination}`}</h3>
            <p>Цена: {convertPrice(ticket.price, currency)} {currency}</p>
            <p>Пересадки: {ticket.stops}</p>
            <p>Время в полете: {ticket.duration}</p>
            <button onClick={() => alert(`Вы приобрели билет за ${convertPrice(ticket.price, currency)} ${currency}`)}>
               Купить
            </button>
         </div>
      ))}
   </div>
);
export default TicketList;