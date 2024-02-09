import { Play } from 'phosphor-react'
import * as S from './styles'

export default function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
          />
          <label htmlFor="minutesAmount">Durante</label>
          <datalist id="task-suggestions">
            <option value="teste" />
          </datalist>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
          />
          <span>minutos.</span>
        </S.FormContainer>

        <S.CountDownContainer>
          <span>0</span>
          <span>0</span>
          <S.Separator>:</S.Separator>
          <span>0</span>
          <span>0</span>
        </S.CountDownContainer>

        <S.StartCountDownButton type="submit">
          <Play size={24} />
          Começar
        </S.StartCountDownButton>
      </form>
    </S.HomeContainer>
  )
}
