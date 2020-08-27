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
        <td data-label="Kvinnor">3</td>
        <td data-label="Män">41</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">29-39</td>
        <td data-label="Kvinnor">16</td>
        <td data-label="Män">90</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">40-50</td>
        <td data-label="Kvinnor">15</td>
        <td data-label="Män">79</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">51-61</td>
        <td data-label="Kvinnor">17</td>
        <td data-label="Män">115</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">62+</td>
        <td data-label="Kvinnor">4</td>
        <td data-label="Män">35</td>      
        </tr>
    </tbody>
  </table>
      );
    
  }
