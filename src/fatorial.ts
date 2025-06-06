export function fatorial(n: number): number {
  if (n < 0) {
    throw new Error("O número não pode ser negativo!");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * fatorial(n - 1);
}
