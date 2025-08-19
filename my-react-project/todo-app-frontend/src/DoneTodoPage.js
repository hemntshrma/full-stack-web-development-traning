function DoneTodoPage(props) {
  let todoArr = props.todo;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-gray-900 to-black flex items-center justify-center p-6">
      <div className="bg-gray-950 shadow-2xl rounded-3xl w-full max-w-3xl overflow-hidden border border-gray-800">
        {/* Header */}
        <div className="bg-gray-800 p-6 border-b border-gray-700">
          <h2 className="text-white text-4xl font-bold text-center">Completed Todos</h2>
        </div>

        {/* Table */}
        <div className="p-8 bg-gray-950">
          <table className="table-auto w-full border-collapse text-white">
            <thead>
              <tr className="bg-gradient-to-r from-purple-700 to-indigo-700">
                <th className="border border-gray-800 px-4 py-3 text-left text-sm">Todo Title</th>
                <th className="border border-gray-800 px-4 py-3 text-left text-sm">Completed On</th>
              </tr>
            </thead>
            <tbody>
              {todoArr.map((todo) =>
                todo.status === "completed" ? (
                  <tr
                    key={todo.id}
                    className="bg-gray-900 even:bg-gray-800 hover:bg-indigo-800 transition-colors duration-300"
                  >
                    <td className="border border-gray-800 px-4 py-2 text-sm">{todo.todoTitle}</td>
                    <td className="border border-gray-800 px-4 py-2 text-sm">
                      {todo.completedDate
                        ? new Date(todo.completedDate).toLocaleDateString()
                        : "N/A"}
                    </td>
                  </tr>
                ) : null
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-center py-3 text-gray-400 text-xs">
         
        </footer>
      </div>
    </div>
  );
}

export default DoneTodoPage;
