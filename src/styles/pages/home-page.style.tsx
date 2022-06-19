import { styled } from 'shared'

export const SHomePage = styled.div`
  height: 100vh;
  padding: 4rem 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  opacity: 0.8;
  transition: all 0.4s ease;
  will-change: opacity;

  &:hover {
    opacity: 1;

    > div:nth-child(2) {
      transform: scale(1);
    }
  }

  > div:first-child {
    > h1 {
      -webkit-text-stroke: 1px ${({ theme }) => theme.layout.colors.text};
      -webkit-text-fill-color: ${({ theme }) => theme.layout.colors.body};
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  > div:last-child {
    margin: 0 auto;
  }
`
