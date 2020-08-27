import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableGenderVastmanland = () => {
  
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
      <td data-label="Antal">495</td>
      <td data-label="%">28,5%</td>
    </tr>
    <tr>
      <td data-label="Kön">Män</td>
      <td data-label="Antal">844</td>
      <td data-label="%">71,5%</td>
    </tr>
  </tbody>
</table>
      );
    
  }
