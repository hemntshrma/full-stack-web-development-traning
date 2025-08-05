import Header from './Header';
import HomePage from './HomePage';
import AddTodoPage from './AddTodoPage';
import DoneTodoPage from './DoneTodoPage';
import ShowPage from './ShowTodoPage';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
     <div>
      <BrowserRouter>
            <Header />

            {/* Routes component used to group route */}
            <Routes>
                {/* Route component defines path with our page component */}
                <Route path="/home" element={<HomePage />} />
                <Route path="/add" element={<AddTodoPage />} />
                <Route path="/show" element={<ShowPage />} />
                <Route path="/done" element={<DoneTodoPage />} />
            </Routes>

            <Footer />
        </BrowserRouter>
           </div>
    );
}

export default App;