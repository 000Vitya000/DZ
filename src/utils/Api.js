export const getCurs = async (first, second) => {
  const response = await fetch(`https://api.binance.com/api/v1/ticker/price?symbol=${first}${second}`, {
    method: "GET",
  });
  return response.json();
};
