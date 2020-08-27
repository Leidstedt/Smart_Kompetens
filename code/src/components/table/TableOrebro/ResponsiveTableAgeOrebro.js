import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableAgeOrebro = () => {
  
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
        <td data-label="Kvinnor">54</td>
        <td data-label="Män">229</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">29-39</td>
        <td data-label="Kvinnor">124</td>
        <td data-label="Män">352</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">40-50</td>
        <td data-label="Kvinnor">167</td>
        <td data-label="Män">449</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">51-61</td>
        <td data-label="Kvinnor">179</td>
        <td data-label="Män">645</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">62+</td>
        <td data-label="Kvinnor">27</td>
        <td data-label="Män">95</td>      
        </tr>
    </tbody>
  </table>
      );
    
  }
