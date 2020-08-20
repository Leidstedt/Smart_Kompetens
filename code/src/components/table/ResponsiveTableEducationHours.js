import React from 'react';
import 'components/table/ResponsiveTable.css';



export const ResponsiveTableEducationHours = () => {
    return (
        <table> 
          <thead>
            <tr>
              <th scope="col">Kategori</th>
              <th scope="col">Utbildning</th>
              <th scope="col">Utbildningstimmar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Kategori">1</td>
              <td data-label="Utbildning">Kvinnor</td>
              <td data-label="Utbildningstimmar">200</td>
            </tr>
          </tbody>
        </table>
      ); 
  }
