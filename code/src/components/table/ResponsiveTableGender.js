import React from 'react';



export const ResponsiveTableGender = () => {
  
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
      <td data-label="Antal">1362</td>
      <td data-label="%">24,1%</td>
    </tr>
    <tr>
      <td data-label="Kön">Män</td>
      <td data-label="Antal">4286</td>
      <td data-label="%">75,9%</td>
    </tr>
  </tbody>
</table>
      );
    
  }
