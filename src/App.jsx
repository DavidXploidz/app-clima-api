import {useState} from 'react'
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

const [ciudad, setCiudad] = useState('')
const [pais, setPais] = useState('')
const [temperatura, setTemperatura] = useState('')
const [name, setName] = useState('')
const [nubes, setNubes] = useState('')
const [sys, setSys] = useState('')
const [cargando , setCargando] = useState(false)
const [mostrar , setMostrar] = useState(false)

const apiKEY = 'ffdbbecc99b6951ea47636831c2f71b0';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKEY}`

const consultarAPI = async (e) => {
    e.preventDefault()
    setMostrar(true)
    setCargando(true)
    const respuesta = await fetch(url)
    const resultado = await respuesta.json()
    setTemperatura(resultado.main)
    // console.log(resultado);
    setName(resultado.name)
    setNubes(resultado.clouds)
    setSys(resultado.sys)
    setCargando(false)
}

  return (
    <main className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className='contenedor text-center font-semibold text-white text-6xl p-10'>Buscador de clima <span className='block italic'>DevSpace</span></h1>
      <form className="contenedor" onSubmit={consultarAPI}>
          <input type="text" placeholder="Ingresa tu ciudad" className='p-5 rounded-xl mt-20 bg-gray-100 outline-none text-gray-700 w-full' onChange={e => setCiudad(e.target.value)} />
          <select className="mt-10 w-full p-5 rounded-xl text-gray-700 cursor-pointer" onChange={(e) => setPais(e.target.value)}>
            <option value="">-- Selecciona un pais --</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="CA">Canada</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="BR">Brasil</option>
          </select>
          <button className="p-5 w-full mt-10 rounded-xl bg-yellow-500 uppercase hover:bg-yellow-400 duration-200" type='submit'>Buscar</button>
      </form>
      
      {mostrar && (
         cargando ? <Spinner /> : <Resultado  temperatura={temperatura} name={name} nubes={nubes} sys={sys} />
      )}

    </main>
  )
}

export default App
