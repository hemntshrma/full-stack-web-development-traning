import { useState } from 'react';

function AddTodoPage() {
  const [name, setName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Form submitted:\nTitle: ${name}\nDue Date: ${dueDate}\nStatus: ${status}`);
    setName('');
    setDueDate('');
    setStatus('');
  }

  return (
    <div className="max-w-lg mx-auto mt-12 p-8 bg-white text-gray-900 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-700">Add a New Todo</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Todo Title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            placeholder="Enter title"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
            required
          >
            <option value="">Select status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg shadow-md transition"
        >
          Submit Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodoPage;
