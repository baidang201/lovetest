interface InputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
}

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  error
}: InputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full px-4 py-2 rounded-lg border bg-white dark:bg-gray-800
          focus:outline-none focus:ring-2 focus:ring-primary/50
          placeholder:text-gray-400 dark:placeholder:text-gray-500
          ${error ? 'border-red-500' : 'border-gray-200 dark:border-gray-700'}
        `}
      />
      
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
} 