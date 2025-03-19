import React from 'react'
import "./stylosprincipal.css"

export default function ContenidoPrincipal() {
  return (
    <main>
      <section className='img-fondo'>
        <article className='slogan'>
          <h2>
            Tu aventura comienza aquí. 
          </h2>
          <p>
            Cada viaje en bicicleta es una nueva aventura. 
            Desde la ciudad hasta la montaña, encuentra tu camino y
            vive momentos inolvidables con tu Bici Ya.
          </p>
          <button>Ver</button>
        </article>
      </section>
      <section className='marcas'>
        <img src="/main/marcas/Colnago_logo.jpg" alt="" />
        <img src="/main/marcas/Scott_Logo.png" alt="" />
        <img src="/main/marcas/Trek_logo.png" alt="" />
        <img src="/main/marcas/Giant_logo.png" alt="" />
      </section>
      <section class="proceso-bicicleta">
        <h2>¡Tu bici está a solo 3 pasos!</h2>
        <div class="pasos">
          <div class="paso">
            <div class="icono">🚴‍♂️</div>
            <h3>Pide tu bici</h3>
            <p>Elige la bicicleta de tus sueños y haz tu pedido en minutos.</p>
          </div>
          
          <div class="paso">
            <div class="icono">📦</div>
            <h3>Te la llevamos</h3>
            <p>Nos encargamos de que llegue a tu puerta de forma rápida y segura.</p>
          </div>

          <div class="paso">
            <div class="icono">😊</div>
            <h3>¡Sé feliz!</h3>
            <p>Disfruta de tu nueva bici y vive aventuras increíbles.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
