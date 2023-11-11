import React from 'react'

function Asist () {
  return (
    <div
      id='asist'
      className='section-padding bg-img bg-fixed'
    >
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            
            <h2 className='boda-title text-center'>ASISTENCIA</h2>
            <br />
            <form method='post' className='row'>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Nombre y Apellido'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='Correo' />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Escribir listado de participantes'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='ENVIAR' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Asist
