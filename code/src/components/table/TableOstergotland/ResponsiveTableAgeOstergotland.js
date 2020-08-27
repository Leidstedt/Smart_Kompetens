import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableAgeOstergotland = () => {
  
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
        <td data-label="Kvinnor">39</td>
        <td data-label="Män">114</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">29-39</td>
        <td data-label="Kvinnor">43</td>
        <td data-label="Män">180</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">40-50</td>
        <td data-label="Kvinnor">48</td>
        <td data-label="Män">237</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">51-61</td>
        <td data-label="Kvinnor">91</td>
        <td data-label="Män">236</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">62+</td>
        <td data-label="Kvinnor">19</td>
        <td data-label="Män">50</td>      
        </tr>
    </tbody>
  </table>
      );
    
  }
