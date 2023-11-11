// SelectInput.js

const SelectInput = ({ id, name, value, onChange, options, placeholder }) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      ></label>
      <select
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className="border-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#227e63] focus:border-[#227e63] block w-full p-2.5 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-green-700 dark:focus:border-green-700"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
