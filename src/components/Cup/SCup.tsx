import { styled } from 'shared'

export const SCup = styled.div`
  cursor: pointer;
  transition: all 0.4s ease;
  > div {
    position: relative;
    display: flex;
    justify-content: center;
    transform: rotate(180deg);
    max-width: 18vw;
    z-index: 11110;

    > svg {
      width: 90%;
      filter: url(#shadow);

      > g > path {
        &:not(:last-child):not(:nth-child(5)) {
          fill: ${({ theme }) => theme.colors().primary};
        }

        &:last-child,
        &:nth-child(5) {
          fill: ${({ theme }) => theme.layout.colors.text};
        }
      }
    }
  }
`
