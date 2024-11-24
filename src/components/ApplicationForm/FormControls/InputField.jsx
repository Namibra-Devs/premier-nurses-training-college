const InputField = ({ label, value, onChange, type = "text", required = false }) => (
    <div className="flex flex-col mb-4">
      <label className="font-medium mb-1">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="border rounded px-3 py-2"
      />
    </div>
  );
  
  export default InputField;
  