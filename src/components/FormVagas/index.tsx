import { FormEvent, useState } from 'react'

// import styles from './FormVagas.module.css'
import { Formulario, InputForm, BtnForm } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <Formulario onSubmit={aoEnviarForm}>
      <InputForm
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BtnForm type="submit">Pesquisar</BtnForm>
    </Formulario>
  )
}
export default FormVagas
