import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl  text-white mb-4">Panel Principal</h1>
        <nav>
          <ul className="space-y-4">
            <li>
              <Link
                to="/person"
                className="block py-2 px-4 bg-[#238636] hover:bg-[#2ea043] text-white  rounded transition duration-200"
                autoFocus
              >
                Entrada de Datos para Personas
              </Link>
            </li>
            <li>
              <Link
                to="/vehicle"
                className="block py-2 px-4 bg-[#238636] hover:bg-[#2ea043] text-white  rounded transition duration-200"
              >
                Entrada de Datos para Vehículos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;
