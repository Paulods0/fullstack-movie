import React from "react"
import { GiFilmProjector } from "react-icons/gi"

const Header = () => {
  return (
    <header className="w-full h-[85px] shadow-xl flex items-center">
      <section className="w-[1200px] mx-auto justify-between flex justify-between">
        <div className="flex gap-2 text-red-700 font-bold items-center">
          <GiFilmProjector className="text-[24px]" />
          <span className="text-[24px]">CineFilms</span>
        </div>
        <div className="gap-6 flex">
          <button className="p-2 bg-red-700 rounded-md text-white hover:scale-95 transition-scale duration-300">Login</button>
          <button className="p-2 bg-red-700 rounded-md text-white hover:scale-95 transition-scale duration-300">Register</button>
        </div>
      </section>
    </header>
  )
}

export default Header
