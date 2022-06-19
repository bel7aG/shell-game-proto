import { FC } from 'react'

import { ShellGame } from 'containers'
import { SHomePage } from 'styles'

const HomePage: FC = () => {
  return (
    <SHomePage>
      <div>
        <h1>Shell game</h1>
      </div>
      <ShellGame />
      <div />
    </SHomePage>
  )
}

export default HomePage
