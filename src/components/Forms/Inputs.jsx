export function InputHolder({ label, id, type, required, value, ...props }) {

    let placeholder;

    switch (type) {
        case "email":
            placeholder = "someone@example.com"
            break;
        case "tel":
            placeholder = "+234 567 890 1234"
            break;
        default:
            placeholder = "John Doe"
            break;
    }

    return (
        <div className="relative mb-2">
            <label htmlFor={id} className="block mb-1 text-sm text-gray-800">{label}</label>
            <input type={type} id={id} name={id} required={required} placeholder={placeholder} className="w-full rounded-full border border-blue-100 px-5 py-3 text-sm text-gray-600 outline-none placeholder:text-gray-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-200"
                {...props} value={value}
            />
        </div>
    )
}

export function SelectHolder({ array, id, label, required, placeholder }) {
    return (
        array && (
            <div>
                <label htmlFor={id} className="mb-1 block text-sm">{label}</label>
                <select id={id} name={id} defaultValue="" required={required}
                    className="w-full appearance-none rounded-full border border-blue-100 bg-white px-5 py-3 text-sm text-gray-600 outline-none focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-200">
                    {placeholder && (
                        <option value="" disabled>{placeholder}</option>
                    )}
                    {array.map(arr => (
                        <option key={arr.value} value={arr.value}>{arr.text ?? arr.title}</option>
                    ))}
                </select>
            </div>
        )
    )
}

export function TextArea({ id, label, placeholder }) {
    return (
        <div>
            <label htmlFor={id} className="mb-1 block text-sm">{label}</label>
            <textarea placeholder={placeholder} id={id} name={id} className="w-full rounded-lg border border-blue-100 px-5 py-3 text-sm text-gray-600 outline-none placeholder:text-gray-400 focus:border-[#1D4ED8] focus:ring-2 focus:ring-blue-200"></textarea>
        </div>
    )
}

export function Checkbox({ id, note, required }) {
    return (
        <label htmlFor={id} className="mt-1 flex cursor-pointer items-center text-gray-800 gap-2 text-sm">
            <input type="checkbox" id={id} name={id} required={required}
                className="h-4 w-4 rounded border-blue-200 accent-[#1D4ED8]"
            />
            <span>{note}</span>
        </label>
    )
}