import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableAgeUppsala = () => {
  
    return (
<table>
    <thead>
      <tr>
        <th scope="col">Ålder</th>
        <th scope="col">Kvinnor</th>
        <th scope="col">Män</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Ålderskategori">18-28</td>
        <td data-label="Kvinnor">128</td>
        <td data-label="Män">511</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">29-39</td>
        <td data-label="Kvinnor">298</td>
        <td data-label="Män">962</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">40-50</td>
        <td data-label="Kvinnor">425</td>
        <td data-label="Män">1164</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">51-61</td>
        <td data-label="Kvinnor">448</td>
        <td data-label="Män">1399</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">62+</td>
        <td data-label="Kvinnor">63</td>
        <td data-label="Män">250</td>      
        </tr>
    </tbody>
  </table>
      );
    
  }
