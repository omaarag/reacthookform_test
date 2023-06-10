import { Toaster } from 'react-hot-toast'
import Formulario from './components/Formulario'

function App () {
  return (
    <div className='min-h-screen grid place-items-center bg-zinc-800 text-white'>
      <Toaster />
      <main className='w-11/12 max-w-5xl mx-auto'>
        <h1 className='text-3xl text-center mb-10'>Sign up</h1>
        <Formulario />
      </main>
    </div>
  )
}

export default App
