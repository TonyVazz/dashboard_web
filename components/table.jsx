import React from 'react';

function Table(props) {
const {grasaCorp, grasaCkg, masaOpor, masaOsea, masaRpor 
    , masaRes,masaMus, masaMusKg } = props;
  return (
    <table className="text-sm text-left text-tercero">
      <thead className="text-xs text-gray-700 uppercase">
        <tr className='border-b'>
          <th scope="col" className="px-6">
            Componente
          </th>
          <th scope="col" className="px-6">
            %
          </th>
          <th scope="col" className="px-6">
            Kg
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b">
          <th scope="row" className="px-6 font-medium">
            Masa Grasa
          </th>
          <td className="px-6">
            {grasaCorp}
          </td>
          <td className="px-6">
            {grasaCkg}
          </td>
        </tr>
        <tr className="bg-white border-b">
          <th scope="row" className="px-6 font-medium">
            Masa Osea
          </th>
          <td className="px-6">
            {masaOpor}
          </td>
          <td className="px-6">
            {masaOsea}
          </td>
        </tr>
        <tr className="bg-white border-b">
          <th scope="row" className="px-6 font-medium">
            Masa Residual
          </th>
          <td className="px-6">
            {masaRpor}
          </td>
          <td className="px-6">
            {masaRes}
          </td>
        </tr>
        <tr className="bg-white border-b">
          <th scope="row" className="px-6 font-medium">
            Masa Muscular
          </th>
          <td className="px-6">
            {masaMus}
          </td>
          <td className="px-6">
            {masaMusKg}
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;