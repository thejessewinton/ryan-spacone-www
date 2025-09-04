export const getGridCn = (index: number) => {
  const subIndex = index % 6

  return subIndex < 2
    ? 'col-span-2'
    : subIndex >= 2 && subIndex < 6
      ? 'col-span-1'
      : ''
}
