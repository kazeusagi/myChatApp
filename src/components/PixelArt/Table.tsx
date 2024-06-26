export function Table() {
  return (
    <table>
      <tbody>
        <tr>
          <td className='size-20 bg-gray-200'></td>
          <td className='size-20 bg-gray-400'></td>
          <td className='size-20 bg-gray-600'></td>
        </tr>
        <tr>
          <td className='size-20 bg-gray-600'></td>
          <td className='size-20 bg-gray-400'></td>
          <td className='size-20 bg-gray-200'></td>
          <td className='size-20 bg-gray-700 '></td>
        </tr>
        <tr>
          <td className='size-20 bg-gray-600'></td>
          <td className='size-20 bg-gray-400'></td>
          <td className='size-20 bg-gray-200'></td>
          <td className='size-20 bg-gray-800 '></td>
        </tr>
      </tbody>
    </table>
  );

  function getColor() {
    return 'bg-gray-200';
  }
}
