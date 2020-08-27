import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableGenderSormland = () => {
  
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
      <td data-label="Antal">57</td>
      <td data-label="%">26,4%</td>
    </tr>
    <tr>
      <td data-label="Kön">Män</td>
      <td data-label="Antal">159</td>
      <td data-label="%">73,6%</td>
    </tr>
  </tbody>
</table>
      );
    
  }
