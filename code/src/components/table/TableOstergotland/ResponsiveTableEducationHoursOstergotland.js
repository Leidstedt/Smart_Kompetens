import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableEducationHoursOstergotland = () => {
    return (
        <table> 
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Utbildning</th>
              <th scope="col">Timmar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Kategori">1</td>
              <td data-label="Utbildning">Svets</td>
              <td data-label="Timmar">200</td>
            </tr>
          </tbody>
        </table>
      ); 
  }
