export default function Input({ label, id, type }) {
  return (
    <>
      <label className="text-sm text-black mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        label={}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-400 rounded-md mb-4"
      />
    </>
  );
}
