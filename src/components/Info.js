import React from "react";

function Info() {
  return (
    <div id="info" className="info section-padding bg-pink">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30 text-center">
            <span className="boda-title-meta">Nuestra Boda</span>
            <h2 className="boda-title">Información</h2>
          </div>
        </div>
        <div className="row bord-box bg-img">
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">01</h2>
            <h6 className="title">Ceremonia</h6>
            <p>Iglesía Nuestra Sra de la Asunción</p>
            <p>Horario: 15:00Hs</p>
            <p>
              <li>
                <a href="https://maps.app.goo.gl/cwV9f6PBzbP38NbQ9" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                  Ubicación
                </a>
              </li>
            </p>
          </div>
          <div className="col-md-3 item-box">
            <h2 className="custom-font numb">02</h2>
            <h6 className="title">Recepción</h6>
            <p>
              Hotel La Candelaria de Aregua.
            </p>
            <p>Horario: 18:00Hs</p>
            <p>
              <li>
                <a href="https://maps.app.goo.gl/AbLXCdDPjt6pvD7H9" style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
                  Ubicación
                </a>
              </li>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
