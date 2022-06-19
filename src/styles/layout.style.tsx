import { styled } from 'shared'

export const SLayout = styled.div`
  height: 100vh;

  > div:first-child {
  }

  > button:last-child {
    position: fixed;
    bottom: 2rem;
    right: 2rem;

    width: 3rem;
    height: 3rem;

    cursor: pointer;

    background-color: ${({ theme }) => theme.layout.colors.text};
    border-radius: 50%;
  }
`
