import { styled } from 'shared'

export const SButton = styled(({ danger, ...props }) => <button {...props} />)<{ danger?: boolean }>`
  font-size: 3rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 2rem;
  border: ${({ theme }) => theme.border.wsc};
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme, danger }) => theme.colors().fixed[danger ? 'danger' : 'success']};
  opacity: 0.7;
  box-shadow: 0 0 14px ${({ theme, danger }) => theme.colors(0.8).fixed[danger ? 'danger' : 'success']};

  transition: opacity 0.2s ease, transform 0.2s ${({ theme }) => theme.transition}, box-shadow 0.5s 0.1s ease;
  will-change: opacity transform box-shadow;

  &:hover {
    opacity: 1;
    transform: translateY(-22px);
    box-shadow: 0 6rem 52px rgba(0, 0, 0, 0.8);
  }

  > span {
    -webkit-text-stroke: 1px #fff;
    -webkit-text-fill-color: ${({ theme }) => theme.colors().fixed.success};
    text-transform: uppercase;
    letter-spacing: 4px;
  }

  &:disabled {
    opacity: 0.2;
    background-color: ${({ theme }) => theme.colors(0.8).fixed.warning};
  }
`
