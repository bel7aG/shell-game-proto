import { styled } from 'shared'

export const SPlane = styled.div`
  position: absolute;
  perspective: 120rem;
  top: -8%;
  transform-style: preserve-3d;
  height: 100vh;
  width: 160%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -11;

  > div {
    border: 40px solid ${({ theme }) => theme.colors().fixed.warning};
    border-radius: 40px;
    opacity: 0.9;
    height: 100%;
    width: 80%;
    transform-style: preserve-3d;
    transform: rotateX(-25deg) rotateY(-6deg) rotateX(88deg) translate3d(0, 0, 0);
    background-image: repeating-linear-gradient(#0000 0% 50%, #0000 50% 100%),
      repeating-radial-gradient(circle, #0000 0% 50%, ${({ theme }) => theme.layout.colors.text} 50% 100%);
    background-size: 100%, 2vw 2vw, 2vw 2vw;
    transition: transform 1.4s ease;
    will-change: transform;
  }
`
