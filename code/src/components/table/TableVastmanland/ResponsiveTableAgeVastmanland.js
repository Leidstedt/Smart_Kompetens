import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableAgeVastmanland = () => {
  
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
        <td data-label="Kvinnor">29</td>
        <td data-label="Män">95</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">29-39</td>
        <td data-label="Kvinnor">102</td>
        <td data-label="Män">307</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">40-50</td>
        <td data-label="Kvinnor">177</td>
        <td data-label="Män">361</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">51-61</td>
        <td data-label="Kvinnor">141</td>
        <td data-label="Män">332</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">62+</td>
        <td data-label="Kvinnor">10</td>
        <td data-label="Män">58</td>      
        </tr>
    </tbody>
  </table>
      );
    
  }
