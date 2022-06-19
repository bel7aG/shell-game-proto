import { styled } from 'shared'

export const SShellGame = styled.div`
  display: flex;
  width: 100%;
  max-width: 130rem;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  height: 30rem;
  transition: all 0.8s ${({ theme }) => theme.transition};
  will-change: transform;
  > button {
    position: fixed;
    top: 0;
  }

  > h1 {
    position: fixed;
    top: 0;
    right: 0;
  }
  > div:not(:last-child) {
    > div {
      transform: translateX(-100%);
      > div:last-child:not(:first-child) {
        // selected ball
        display: block;
        z-index: -1;
        margin: 0 auto;
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(10%, 0);
      }
    }
  }
  &:hover {
    > div:last-child {
      > div {
        transform: rotateX(-25deg) rotateY(-1deg) rotateX(88deg) translate3d(0, 0, 0);
      }
    }
  }
`
