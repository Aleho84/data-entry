import React, { useState } from 'react';
import { savePersonData } from '../services/dataService';

function PersonData() {
  const [formData, setFormData] = useState({
    nombreApellido: '',
    numeroDocumento: '',
    fechaNacimiento: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await savePersonData(formData);
      setMessage('Datos guardados exitosamente');
      setFormData({
        nombreApellido: '',
        numeroDocumento: '',
        fechaNacimiento: '',
      });
    } catch (error) {
      setMessage('Error al guardar los datos');
    }
  };

  return (
    <div className="person-data-container bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl  text-white mb-4">
          Entrada de Datos para Personas
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
            <label
              htmlFor="nombreApellido"
              className="block text-white text-sm  mb-2"
            >
              Nombre y Apellido:
            </label>
            <input
              type="text"
              id="nombreApellido"
              name="nombreApellido"
              value={formData.nombreApellido}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              autoFocus
            />
          </div>
          <div>
            <label
              htmlFor="numeroDocumento"
              className="block text-white text-sm  mb-2"
            >
              Número de Documento:
            </label>
            <input
              type="text"
              id="numeroDocumento"
              name="numeroDocumento"
              value={formData.numeroDocumento}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div>
            <label
              htmlFor="fechaNacimiento"
              className="block text-white text-sm  mb-2"
            >
              Fecha de Nacimiento:
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
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

export default PersonData;
