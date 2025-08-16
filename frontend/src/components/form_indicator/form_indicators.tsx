"use client";
import { useState } from "react";
import { formInterface } from "./interface_form";
import Send_Button from "../buttons/send_buton";
import { createUser } from "../api/user_api_service";

const DecForm = () => {
  const [formData, setFormData] = useState<formInterface>({
    _id: "",
    name: "",
    lastname: "",
    phone: "",
    email: "",
  });

  const [error, setError] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: Record<string, string> = {};

    if (!formData.name) newErrors.name = "Dato obligatorio";
    if (!formData.lastname) newErrors.lastname = "Dato obligatorio";
    if (!formData.phone) newErrors.phone = "Dato obligatorio";
    if (!formData.email) newErrors.email = "Dato necesario";
    if (!formData._id) newErrors._id = "Dato obligatorio";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    setError({});

    try {
      await createUser(formData);
      alert("¡Formulario enviado con éxito!");
      setFormData({
        _id: "",
        name: "",
        lastname: "",
        phone: "",
        email: "",
      });
    } catch {
      alert("Error al enviar el formulario. Verifique los datos.");
    }
  };

  const inputClass =
    "mr-32 py-2 rounded-lg border-2 bg-gray-400/70 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all";

  // Definición de campos
  const fields = [
    { label: "Nombre(s)", name: "name", type: "text", placeholder: "Ingrese nombre(s)" },
    { label: "Apellido(s)", name: "lastname", type: "text", placeholder: "Ingrese apellido(s)" },
    { label: "Teléfono", name: "phone", type: "text", placeholder: "Número telefóno" },
    { label: "Correo E", name: "email", type: "email", placeholder: "tu_correo@mail.com" },
    { label: "# C.C", name: "_id", type: "text", placeholder: "123456789" },
  ];

  return (
    <form className="space-y-4 p-6" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <label className="w-40 font-semibold text-white">{field.label}</label>
          <div className="flex-1">
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              value={formData[field.name as keyof formInterface]}
              onChange={handleChange}
              className={`${inputClass} ${error[field.name] ? "border-red-500" : "border-4 border-gray-300"}`}
            />
            {error[field.name] && (
              <p className="text-red-500 text-sm mt-1">{error[field.name]}</p>
            )}
          </div>
        </div>
      ))}
      <div className="flex justify-center mt-4">
        <Send_Button />
      </div>
    </form>
  );
};

export default DecForm;
