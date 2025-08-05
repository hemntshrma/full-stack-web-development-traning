import React from 'react';

function DoneTodoPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 text-center">
      
         <table id="todo-table">
            
            <tbody>
                <tr>
                <th className="border px-4 py-2">Complete Todo Title</th>
                <th className="border px-4 py-2">Completed On</th>
                </tr>
                <tr>
                    <td className="border px-4 py-2">Meditate For 10 Mins</td>
                     <td className="border px-4 py-2">4/Aug/2025</td>
                </tr>
                 <tr>
                    <td className="border px-4 py-2">Watch React Tutorial</td>
                     <td className="border px-4 py-2">6/Aug/2025</td>
                </tr>
                 <tr>
                    <td className="border px-4 py-2">Buy Groceries</td>
                     <td className="border px-4 py-2">1/Aug/2025</td>
                </tr>
                 <tr>
                    <td className="border px-4 py-2">Review PR On GitHub</td>
                     <td className="border px-4 py-2">4/Aug/2025</td>
                </tr>
                 <tr>
                    <td className="border px-4 py-2">Drink 2L water</td>
                     <td className="border px-4 py-2">10/Sep/2025</td>
                </tr>
                 <tr>
                    <td className="border px-4 py-2">Streach after work</td>
                     <td className="border px-4 py-2">15/Dec/2025</td>
                </tr>
                </tbody>
            
         </table>

        
      
    </main>
  );

}

export default DoneTodoPage;