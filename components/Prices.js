import { useState } from 'react';
const Prices = props => {
  const [currency, setCurrency] = useState('USD');
  const { bpi } = props;
  return (
    <div>
      <ul className='list-group'>
        <li className='list-group-item bg-primary text-light d-flex align-items-center justify-content-between p-3'>
          <div className='left'>
            Bitcoin rate for {bpi[currency].description}:{' '}
            <strong>{bpi[currency].rate}</strong>
          </div>
          <div className='right'>
            <span className='badge badge-dark'>{bpi[currency].code}</span>
          </div>
        </li>
      </ul>
      <br />
      <select
        onChange={e => setCurrency(e.target.value)}
        className='form-control'
      >
        <option value='USD'>USD</option>
        <option value='GBP'>GBP</option>
        <option value='EUR'>EUR</option>
      </select>
    </div>
  );
};

export default Prices;
