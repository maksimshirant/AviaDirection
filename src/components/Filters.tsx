import React from 'react';
import { FiltersProps } from '../types/types';
import styles from '../style/Filters.module.scss';


const Filters: React.FC<FiltersProps> = ({ selectedStops, onFilterStopsChange, currency, onCurrencyChange }) => {
   const stopsOptions = [0, 1, 2, 3];

   return (
      <div className={styles.filters}>
         <h3>Кол-во пересадок</h3>
         {stopsOptions.map(stop => (
            <label key={stop}>
               <input
                  type="checkbox"
                  checked={selectedStops.includes(stop)}
                  onChange={() => onFilterStopsChange(stop)}
               />
               {stop === 0 ? 'Без пересадок' : `${stop} пересадк${stop > 1 ? 'и' : 'а'}`}
            </label>
         ))}

         <h3>Валюта</h3>
         <select value={currency} onChange={e => onCurrencyChange(e.target.value as FiltersProps['currency'])}>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="RUB">RUB</option>
         </select>
      </div>
   );
};

export default Filters;