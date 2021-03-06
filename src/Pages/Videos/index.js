import { useState } from 'react'
import ReactPlayer from 'react-player'
import { useHeader } from '../../Providers/Header'
import { NavSelection } from './../../Components/Global/NavSelection'
import { StyledFooter, StyledMain } from './style'
const Videos=()=>{
  
  const [videos] = useState([{
    id:1,
    videoUrl:"https://www.youtube.com/watch?v=hwxIoW3cj4U",
    title:"Plástico",
    description:"Curiosidades e informações sobre o plástico e dicas importantes de reciclagem."
  },{
    id:2,
    videoUrl:"https://www.youtube.com/watch?v=R8OvQVV5BtM",
    title:"Vidro",
    description:"Vem conferir a história do vidro e de como ele é reciclado."
  },{
    id:3,
    videoUrl:"https://www.youtube.com/watch?v=xouKg3XwrxY",
    title:"Metal",
    description:"Venha conferir nesse vídeo, sobre a importância da reciclagem de metais."
  },{
    id:4,
    videoUrl:"https://www.youtube.com/watch?v=1VGjNjfF9yM",
    title:"Alumínio",
    description:"O Brasil é um exemplo de reciclagem de alumínio, venha conferir como é feito esse processo."
  },{
    id:5,
    videoUrl:"https://www.youtube.com/watch?v=rjUaQW0VG0k",
    title:"Papel",
    description: "A incrível história de um papel que muda de formas e retorna a sua forma original. Vem dar uma olhada!"
  },{
    id:6,
    videoUrl:"https://www.youtube.com/watch?v=1HccDJzA4fU",
    title:"Óleo de cozinha",
    description:"Óleo de cozinha, vamos ver o que o vídeo tem a dizer sobre esse resíduo"
  },{
    id:7,
    videoUrl:"https://www.youtube.com/watch?v=42rzbf_Txug",
    title:"E-lixo(Eletroeletrônicos)",
    description:"E-lixo, o que fazer com ele?Confere aqui!"
  },{
    id:8,
    videoUrl:"https://www.youtube.com/watch?v=tswmX6N8N-4",
    title:"Pilhas e Baterias",
    description:"Vamos ver como descartar corretamente pilhas e baterias? A Ecoleta ainda não ajuda com esse tipo, mas bora ver o que fazer?"
  }])
  const {changeHeader} = useHeader()
  changeHeader("video")
    return (
    <>
      <StyledMain>
          <h1>Saiba mais sobre reciclagem</h1>
          <ul className='videosList--container'>
          {
            videos?.map(({title,videoUrl,description,id})=>(
              <li key={id}>
                <section >
                  <div className="video">
                    <ReactPlayer url={videoUrl} width='100%'/>
                  </div>
                  <div className='text'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </section>
              </li>
            ))
          }
          </ul>              
      </StyledMain>
      <StyledFooter>                    
        <NavSelection location={"video"}/>         
      </StyledFooter>
    </>
  )
}

export default Videos