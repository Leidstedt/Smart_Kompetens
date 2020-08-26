import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableAgeSormland = () => {
  
    return (
<table>
    <thead>
      <tr>
        <th scope="col">Ålder</th>
        <th scope="col">Antal</th>
        <th scope="col">%</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Ålderskategori">18-28</td>
        <td data-label="Antal">200</td>
        <td data-label="%">100%</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">29-39</td>
        <td data-label="Antal">200</td>
        <td data-label="%">100%</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">40-50</td>
        <td data-label="Antal">200</td>
        <td data-label="%">100%</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">51-61</td>
        <td data-label="Antal">200</td>
        <td data-label="%">100%</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">62+</td>
        <td data-label="Antal">200</td>
        <td data-label="%">100%</td>
      </tr>
    </tbody>
  </table>
      );
    
  }
