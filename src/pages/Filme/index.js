import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import api from '../../services/api'
import './filme.css';

// https://api.themoviedb.org/3/movie/505642?api_key=f9261560796a63450d2e55fa40ded231
function Filme(){
    const {id} = useParams();
    const navigation = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        async function loadFilm(){
            await api.get(`/movie/${id}`,{
                params:{
                    api_key: "f9261560796a63450d2e55fa40ded231",
                    language: "pt-BR",
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setLoading(false);
            })
            .catch(()=>{
                console.log("Filme não encontrado");
                navigation('/',{replace: true});
                return;
            })
        }
        loadFilm();

        return () => {
            console.log("Componente desmontado");
        }

        
    },[navigation, id])

    function salvarFilme(){
        const minhaLista = localStorage.getItem("@filmow");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo)=>filmesSalvo.id === filme.id)

        if(hasFilme){
            toast.error("Esse filme já está na sua lista!");
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@filmow", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso!");
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes do filme...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} /10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="_blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Filme;