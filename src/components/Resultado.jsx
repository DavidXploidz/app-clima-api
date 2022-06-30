import React from 'react'
import {TiWeatherPartlySunny, TiWeatherWindyCloudy, TiWeatherCloudy, TiWeatherSunny} from 'react-icons/ti'

const Resultado = ({temperatura, name, nubes, sys}) => {

    const {temp, temp_max, temp_min, humidity} = temperatura
    const {all} = nubes
    const {country}= sys

    const convertirTemp = (grados) => {
        const kelvin = 273.15
        return Math.round(grados - kelvin)
    }
    const nublado = (nubocidad) => {
        let mensaje = ''
        if(nubocidad >= 70){
            return mensaje = 'nublado'
        }else if(nubocidad >= 50){
            return mensaje = 'mayormente nublado'
        }else if(nubocidad >= 30){
            return mensaje = 'parcialmente nublado'
        }else{
            return mensaje = 'soleado'
        }
    }

  return (
    <div className='contenedor p-5 text-white '>
        <div className='mt-10 flex justify-start items-center gap-x-5 '>
            <p className='text-4xl md:text-6xl'>{name}</p>
            <p className='text-2xl md:text-4xl'>{country}</p>
        </div>
        <div>
            <p className='text-8xl font-medium my-2 md:text-9xl'>{convertirTemp(temp)}&#8451;</p> 
        </div>
        <div className='flex justify-between items-center mt-5'>
            <p className='text-3xl font-medium md:text-5xl'>Max: <span className='font-normal'>{convertirTemp(temp_max)}&#8451;</span></p>
            <p className='text-3xl font-medium md:text-5xl'>Min: <span className='font-normal'>{convertirTemp(temp_min)}&#8451;</span></p>
        </div>
        <div>
            <p className='text-3xl font-medium mt-2 md:text-5xl'>Humedad: <span className='font-normal'>{humidity}%</span></p>
            <div className='flex items-center gap-x-5 mt-5'>
                {all >= 70 ? <TiWeatherCloudy size={90} /> //if
                    : all >= 50 ? <TiWeatherWindyCloudy size={90} /> //else if
                    : all >= 30 ? <TiWeatherPartlySunny size={90} />  //else if
                    : <TiWeatherSunny size={90} /> //else
                }
                <p className='text-4xl capitalize font-semibold md:text-6xl'>{nublado(all)}</p>
            </div>
        </div>
        
    </div>
  )
}

export default Resultado