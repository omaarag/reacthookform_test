import { useForm } from 'react-hook-form'
import { inputsInfo } from '../data.js'
import toast from 'react-hot-toast'

const Formulario = () => {
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm({
    mode: 'onChange'
  })

  const submit = (data) => {
    console.log(data)
    toast.success('Success')
    reset()
  }

  return (
    <form
      className='flex flex-col items-center gap-3' onSubmit={handleSubmit(submit)}
    >
      {
        inputsInfo.map(({ name, label, type, placeholder, validations, errorMessage }) =>
          <label
            key={name}
            htmlFor={name}
            className='flex flex-col gap-1 text-zinc-300 w-80'
          >
            {label}
            <input
              {...register(name, validations)}
              type={type}
              placeholder={placeholder}
              className='border border-gray-300 bg-zinc-300 rounded-md p-2 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-red-800 transition-all duration-300 caret-red-800 placeholder-zinc-500'
            />
            {
              errors[name] &&
                <span className='text-red-500 text-sm'>
                  {errorMessage}
                </span>
            }
          </label>
        )
      }
      <button
        type='submit'
        className={`text-white rounded-md w-80 p-2 mt-5 ${isValid ? 'bg-zinc-900 hover:bg-red-900' : 'bg-zinc-500 cursor-not-allowed'} transition-colors duration-300`}
        disabled={!isValid}
      >
        Register
      </button>
    </form>
  )
}
export default Formulario
