import { FC, useMemo, useState } from 'react'
import { useTransition, animated } from 'react-spring'

import { Ball, Button, Cup, Plane } from 'components'
import { ShellStatusEnum, useShellGame } from 'hooks'
import { SShellGame } from 'styles'

const WIDTH = 300

const ShellGame: FC = () => {
  const { shells, handleShuffle, handleGuess, handleStartGame, status, firstGuessIndex } = useShellGame()
  const [shuffleCount, setShuffleCount] = useState(0)
  const [complexity, setComplexity] = useState(5)

  const handleRest = () => {
    if (status !== ShellStatusEnum.SHUFFLING) {
      return
    }

    handleShuffle()
    setShuffleCount((prevState) => prevState + 1)

    if (shuffleCount >= complexity) {
      setShuffleCount(0)
      handleStartGame()
    }
  }

  const transitions = useTransition(
    shells.map((shell, i) => ({ ...shell, width: `${WIDTH}px`, x: `${i * WIDTH}px` })),
    (shell) => shell.index,
    {
      from: { position: 'absolute', width: `${WIDTH}px` },
      leave: { width: 0 },
      enter: ({ x, width }) => ({ x, width }),
      update: ({ x, width }) => ({ x, width }),

      onRest: handleRest,
      config: { duration: 370 },
    }
  )

  const canInteract = useMemo(
    () => [ShellStatusEnum.SHUFFLING, ShellStatusEnum.GUESSING].includes(status) === false,
    [status]
  )
  return (
    <>
      <SShellGame>
        {transitions.map(({ item, props: { x, ...rest }, key }, index) => {
          const { hasBall } = item

          return (
            <animated.div
              key={key}
              style={{
                zIndex: 1,
                transform: x.interpolate((xAxis) => `translate3d(${xAxis}, 0, 0)`),
                ...rest,
              }}
            >
              <div>
                <Cup
                  onClick={() => {
                    if (status === ShellStatusEnum.GUESSING) handleGuess(item.index)
                  }}
                  style={{
                    transform: `translateY(${
                      (hasBall && canInteract) ||
                      (firstGuessIndex === item.index && status === ShellStatusEnum.GUESSING)
                        ? -60
                        : 0
                    }%)`,
                  }}
                />
                {hasBall && <Ball />}
              </div>
            </animated.div>
          )
        })}

        <Button
          title={`${canInteract ? 'Play' : '...'}`}
          danger={status === ShellStatusEnum.INCORRECT}
          onClick={handleShuffle}
          disabled={canInteract === false}
        />
        <h1>{status}</h1>
        <Plane />
      </SShellGame>
    </>
  )
}

export default ShellGame
