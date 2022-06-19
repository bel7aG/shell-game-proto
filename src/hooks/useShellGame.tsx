import { useCallback, useEffect, useState } from 'react'
import { shuffleShellIndexes } from 'utils'

const CUPS_COUNT = 3

export type ShellType = { index: number; hasBall: boolean }

export enum ShellStatusEnum {
  INITIAL = 'PLAY',

  SHUFFLING = 'SHUFFLING',

  GUESSING = 'GUESSING',

  CORRECT = 'CORRECT',

  INCORRECT = 'INCORRECT',
}

export const useShellGame = (count: number = 3) => {
  // it's better to make it more dynamic and send the count as an optional prop
  const selectedBallIndex = Math.floor(Math.random() * (count || CUPS_COUNT - 1))

  const [shells, setShells] = useState<ShellType[]>(
    new Array(CUPS_COUNT).fill({}).map((_, index) => ({ index: index, hasBall: index === selectedBallIndex }))
  )

  const [status, setStatus] = useState<ShellStatusEnum>(ShellStatusEnum.INITIAL)
  const [firstGuessIndex, setFirstGuessIndex] = useState<number>(-1)

  const handleGuess = useCallback(
    (chosenIndex) => {
      const shell = shells.find((shell) => shell.index === chosenIndex)
      setFirstGuessIndex(chosenIndex)

      setTimeout(() => {
        setStatus(ShellStatusEnum[shell.hasBall ? 'CORRECT' : 'INCORRECT'])
      }, 400)
    },
    [shells]
  )

  const handleStartGame = useCallback(() => {
    setStatus(ShellStatusEnum.GUESSING)
  }, [setStatus])

  const handleShuffle = useCallback(() => {
    setStatus(ShellStatusEnum.SHUFFLING)
    setShells(shuffleShellIndexes(shells))
    setFirstGuessIndex(-1)
  }, [shells, setStatus, shuffleShellIndexes])

  return { shells, status, handleGuess, handleShuffle, handleStartGame, firstGuessIndex }
}
