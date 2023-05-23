import styled from "styled-components"
import { Column, Row } from "../../styles/layout/Flex"

const TimerContentContainer = styled(Column)`
height: 100%;
`

const Title = styled.p`
color: white;
font-size: 2rem;
padding-top: 3.5rem;
padding-bottom: 3.5rem;
`

const OptionsMenu = styled(Row)`
width: 23.3125rem;
height: 3.9375rem;
border-radius: 3.125rem;
`

export {TimerContentContainer,Title, OptionsMenu}