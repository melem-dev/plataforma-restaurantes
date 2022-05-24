export function parsebrl(amount) {
  return amount.toLocaleString("pt-br", {
    style: "currency",
    currency: "brl",
  });
}
