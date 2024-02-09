import { Scroll, Timer } from 'phosphor-react'

import * as S from './styles'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <S.HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink title="Timer" to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink title="Histórico" to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  )
}
