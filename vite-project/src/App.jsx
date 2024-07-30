import './App.css'
import Mensagem from './componentes/Mensagem'
import Frase from './componentes/Frase'
import Calculadora from './componentes/Calculadora'

function HelloWorld(){
  return <p>Hello World</p>
}

function App() {
  return (
    <>
      <HelloWorld></HelloWorld>
      <Mensagem texto="Hello Wolrd" ></Mensagem>
      <Frase></Frase>
      <Calculadora/>
    </>
  )
}

export default App
