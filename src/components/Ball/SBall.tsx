import { styled } from 'shared'

export const SBall = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  background: radial-gradient(circle at 30px 10px, #fff, rgba(60, 60, 60, 0.6));

  backdrop-filter: invert(1);
  box-shadow: -1vw -1rem 1.3rem rgba(0, 0, 0, 0.5), inset 1rem 2rem 2rem rgba(0, 0, 0, 0.8);
  z-index: 11;
  transform: translate(-15%, -10%);
`
