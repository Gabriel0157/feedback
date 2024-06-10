import { CardContainer, IconContainer } from "../styles/Home.styles"

export default function Home() {
  return (
    <CardContainer>
      <IconContainer>
        <img src={iconStarImg} alt = "icone de estrela"/>
      </IconContainer>

      <h1>Como foi o atendimento?</h1>
      <p>Conte-nos como foi nossa ajuda com sua solicitação. Agradecemos muito seu feedback para podermos melhorar nosso atendimento!</p>

      <ButtonContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
      </ButtonContainer>
    </CardContainer>
  )
}
