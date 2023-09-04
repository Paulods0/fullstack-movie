import React, { useEffect, useState } from "react"
import api from "../api/axiosConfig"

import Carousel from "react-material-ui-carousel"
import { Paper, Button } from "@mui/material"

const Home = () => {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies")
      setMovies(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <section className="w-full mt-6">
      <section className="w-[1200px] mx-auto">
        <Carousel className="rounded-xl">
          {movies.map((movie, index) => (
            <Item key={index} data={movie} />
          ))}
        </Carousel>
      </section>
    </section>
  )
}
function Item({ data }) {
  return (
    <Paper className="relative w-full flex flex-col items-center justify-center h-[500px]">
      <img
        className="absolute top-0 left-0 object-cover bg-center w-full h-full"
        src={data.backdrops[0]}
        alt=""
      />
      <h2 className="text-white">{data.title}</h2>
      <Button className="text-white">Check it out!</Button>
    </Paper>
  )
}
export default Home
