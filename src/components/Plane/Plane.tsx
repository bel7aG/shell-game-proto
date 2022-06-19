import { memo, FC } from 'react'
import { SPlane } from './SPlane'

const Plane: FC = () => {
  return (
    <SPlane>
      <div />
    </SPlane>
  )
}

export default memo(Plane)
