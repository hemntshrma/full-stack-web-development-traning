import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <nav className="flex bg-gray-900 p-5 justify-between">
                <div>
                    {/* left section */}
                    <Link to="/add">
                              <button class="text-white font-bold">Add</button>
                              
                              </Link>
                   
                </div>
                <div className="space-x-110">
                    {/* right section */}

                    <Link to="/show">
                        <button class="text-white font-bold">Show</button>
                        </Link>
                        </div>

                        <div>
                   

                   <Link to="/done">
                        <button class="text-white font-bold">Done</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header;