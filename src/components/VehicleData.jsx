import React, { useState } from 'react';
import { saveVehicleData } from '../services/dataService';

function VehicleData() {
  const [formData, setFormData] = useState({
    dominio: '',
    numeroTarjeta: '',
    fechaVigencia: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await saveVehicleData(formData);
      setMessage('Datos guardados exitosamente');
      setFormData({ dominio: '', numeroTarjeta: '', fechaVigencia: '' });
    } catch (error) {
      setMessage('Error al guardar los datos');
    }
  };

  return (
    <div className="vehicle-data-container bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl  text-white mb-4">
          Entrada de Datos para Vehículos
        </h2>
        {message && (
          <p
            className={`message ${
              message.includes('Error') ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="dominio" className="block text-white text-sm  mb-2">
              Dominio del Vehículo:
            </label>
            <input
              type="text"
              id="dominio"
              name="dominio"
              value={formData.dominio}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoFocus
            />
          </div>
          <div>
            <label
              htmlFor="numeroTarjeta"
              className="block text-white text-sm  mb-2"
            >
              Número de Tarjeta:
            </label>
            <input
              type="text"
              id="numeroTarjeta"
              name="numeroTarjeta"
              value={formData.numeroTarjeta}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="fechaVigencia"
              className="block text-white text-sm  mb-2"
            >
              Fecha de Vigencia:
            </label>
            <input
              type="date"
              id="fechaVigencia"
              name="fechaVigencia"
              value={formData.fechaVigencia}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-[#238636] hover:bg-[#2ea043] text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Guardar Datos
          </button>
        </form>
      </div>
    </div>
  );
}

export default VehicleData;
