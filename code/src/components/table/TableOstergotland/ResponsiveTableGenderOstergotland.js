import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableGenderOstergotland = () => {
  
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
      <td data-label="Antal">200</td>
      <td data-label="%">100%</td>
    </tr>
    <tr>
      <td data-label="Kön">Män</td>
      <td data-label="Antal">200</td>
      <td data-label="%">100%</td>
    </tr>
  </tbody>
</table>
      );
    
  }
