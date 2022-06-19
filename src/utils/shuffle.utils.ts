import { type ShellType } from 'hooks'

export type ShuffleShellIndexesFunction = (data: ShellType[]) => ShellType[]

export const shuffleShellIndexes: ShuffleShellIndexesFunction = (data: ShellType[]) => {
  console.log(data)

  data.forEach((_, index) => {
    let random = Math.floor(Math.random()) * index
    let temp = data[index]

    data[index] = data[random]
    data[random] = temp
  })

  console.log(data)

  return data
}
