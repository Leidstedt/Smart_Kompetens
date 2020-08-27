import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableGenderUppsala = () => {
  
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
      <td data-label="Antal">55</td>
      <td data-label="%">13,3%</td>
    </tr>
    <tr>
      <td data-label="Kön">Män</td>
      <td data-label="Antal">360</td>
      <td data-label="%">86,7%</td>
    </tr>
  </tbody>
</table>
      );
    
  }
