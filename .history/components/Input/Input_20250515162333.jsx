export default function Input({label, htmlFor, }) {

    return (
        <label className="text-sm text-black mb-1" htmlFor={htmlFor}>
      {label}
    </label>
    <input
      id={}
      type={type}
      placeholder={label}
      className="w-full px-4 py-2 border border-gray-400 rounded-md mb-4"
    />


    )

}