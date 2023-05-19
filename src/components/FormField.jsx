import React from 'react';

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-white">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold hover:bg-slate-700 text-xs bg-green-800 py-1 px-2 rounded-[5px] text-white/80"
          >
            Surprise Me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        className="text-sm text-black border border-gray-300 rounded-lg bg-gray-200 focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default FormField;
