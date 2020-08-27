import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableGenderOrebro = () => {
  
    return (
<table>
 
  <thead>
    <tr>
      <th scope="col">Kön</th>
      <th scope="col">Antal</th>
      <th scope="col">%</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Kön">Kvinnor</td>
      <td data-label="Antal">551</td>
      <td data-label="%">23,7%</td>
    </tr>
    <tr>
      <td data-label="Kön">Män</td>
      <td data-label="Antal">1770</td>
      <td data-label="%">76,3%</td>
    </tr>
  </tbody>
</table>
      );
    
  }
