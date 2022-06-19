import { memo, FC } from 'react'
import { SBall } from './SBall'

interface BallProps {}

const Ball: FC<BallProps> = () => {
  return (
    <SBall className="ball">
      <div />
    </SBall>
  )
}

export default memo(Ball)
