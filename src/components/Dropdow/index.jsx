import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle';

const Dropdow = () => {
  return (
    <>
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                Desenvolvedores
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li><a className="dropdown-item" href="https://github.com/Pontessxx">PonPon</a></li>
                <li><a className="dropdown-item" href="https://github.com/Viniyama23">Yaya</a></li>
                <li><a className="dropdown-item" href="https://github.com/Capriottiii">Caca</a></li>
                <li><a className="dropdown-item" href="https://github.com/rcm2005">Rara</a></li>
                <li><a className="dropdown-item" href="https://github.com/gukawamura">GK</a></li>
            </ul>
        </div>
    </>
  )
}

export default Dropdow