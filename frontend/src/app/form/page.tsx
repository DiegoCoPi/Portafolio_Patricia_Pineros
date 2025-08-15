import DecForm from "@/components/form_indicator/form_indicators";

const UserForm = () => {
  return (
    <div className="bg-gray-300/70 p-8 border-4 border-blue-800 rounded-xl shadow-md max-w-4xl mx-auto">
      <h2 className="text-center text-blue-800 text-4xl font-bold mb-6">
        Formulario
      </h2>
      <DecForm />
    </div>
  );
};

export default UserForm;
