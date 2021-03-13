import LinkWrapper from 'components/LinkWrapper'
import * as S from './style'

import { CloseOutline } from '@styled-icons/evaicons-outline'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>
    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum,
        asperiores tempore! Illo, voluptatum doloribus, at est sapiente
        reiciendis iste aliquam obcaecati, omnis fugit accusantium! Iusto
        corrupti nesciunt aliquid a! Excepturi.
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
