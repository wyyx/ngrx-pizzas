export function arrayToEntities<T extends { id?: any; [key: string]: any }>(array: T[]) {
  const entities = array.reduce(
    (accumEntities: { [id: string]: T }, element) => {
      return { ...accumEntities, [element.id]: element }
    },
    {} as { [id: string]: T }
  )

  return entities
}
