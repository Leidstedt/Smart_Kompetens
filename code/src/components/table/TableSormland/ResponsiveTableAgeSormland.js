import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableAgeSormland = () => {
  
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
        <td data-label="Män">32</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">29-39</td>
        <td data-label="Kvinnor">13</td>
        <td data-label="Män">33</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">40-50</td>
        <td data-label="Kvinnor">18</td>
        <td data-label="Män">38</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">51-61</td>
        <td data-label="Kvinnor">20</td>
        <td data-label="Män">44</td>
      </tr>
      <tr>
        <td data-label="Ålderskategori">62+</td>
        <td data-label="Kvinnor">3</td>
        <td data-label="Män">12</td>      
        </tr>
    </tbody>
  </table>
      );
    
  }
