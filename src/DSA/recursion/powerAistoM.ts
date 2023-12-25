function power(a: number, m: number): number {
  return m === 0 ? 1 : power(a, m - 1) * m;
}

export function powerEfficient(a: number, m: number): number {
  if (m === 0) return 1;
  const temp = powerEfficient(a, Math.floor(m / 2));
  return m & 1 ? temp * temp * a : temp * temp;
}