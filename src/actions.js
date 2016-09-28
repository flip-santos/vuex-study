export const increment = ({dispach}, counterId) => dispach('INCREMENT', counterId)

export const decrement = ({dispach}, counterId) => dispach('DECREMENT', counterId)

export const addCounter = (store, counterId) => {
  if (store.state.counters[counterId] % 2 !== 0) {
    store.dispach('INCREMENT', counterId)
  }
}
