/**
 * return a list of eco codes
 */
export const ecoCodeArray = (openingsArray) => {
  const ecoCodes = [];
  for (let i = 0; i < openingsArray.length; i += 1) {
    if (openingsArray[i][0] && ecoCodes.includes(openingsArray[i][0]) === false) {
      ecoCodes.push(openingsArray[i][0]);
    }
  }
  return ecoCodes;
};

export const searchResultOpenings = (openingsArray, searchText) => (
  openingsArray.length > 0
    ? (
      openingsArray.filter(
        (opening) => {
          if (
            opening[0]
                        && (opening[0].toUpperCase().includes(searchText.toUpperCase()))
          ) {
            return true;
          }
          if (
            opening[1]
                        && (opening[1].toUpperCase().includes(searchText.toUpperCase()))
          ) {
            return true;
          }
          return false;
        },
      )
    )
    : []
);
