import RouterApp from "./router";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App(){
  return(
    <div className="app">
      <ToastContainer autoClose={3000} />
      <RouterApp/>
    </div>
  )
}

export default App;

//senha api f9261560796a63450d2e55fa40ded231
// demontração de requisicao https://api.themoviedb.org/3/movie/550?api_key=f9261560796a63450d2e55fa40ded231
//token leitura API eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTI2MTU2MDc5NmE2MzQ1MGQyZTU1ZmE0MGRlZDIzMSIsInN1YiI6IjYzZWUzODMyODEzY2I2MDA3OTQzN2QxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.58vvXx_HxIm6KQfeD3P9tz9qhtVwzjmxM344vpds17g
// now playing https://api.themoviedb.org/3/movie/now_playing?api_key=f9261560796a63450d2e55fa40ded231