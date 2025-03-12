import { useState } from "react";
import "./header.css"

export default function Header() { 
  const [menuAbierto, setMenuAbierto] = useState(false);
  
  function toggleMenu() {
    setMenuAbierto(!menuAbierto);
  }

return (
      <header>
        {/* Menú de navegación */}
          <section className="contenedor-logo">
            <button className="menu-hamburguesa" onClick={toggleMenu}>
              ☰
            </button>
          {/* Botón Hamburguesa */}
            <section className="logo">
              <img src="/header/logo-bicicleta-blanco.png" alt="" />
              <h2>BiciTa</h2>
            </section>
          </section>

        <nav className={menuAbierto ? "menu abierto" : "menu"}>
            <ul>
                <li><button>Inicio</button></li>
                <li><button>Clubes</button></li>
                <li><button>Selección</button></li>
                <li><button>Selección</button></li>
            </ul>
        </nav>

        <section className="carrito">
          <button>
            <img src="/header/carrito-de-compras.png" alt="" />
          </button>
        </section>
      </header>
  )
}
