export const abbreviateDollar = (value: number): string => {
  const units = [
    { value: 1e12, prefix: "T" },
    { value: 1e9, prefix: "B" },
    { value: 1e6, prefix: "M" },
    { value: 1e3, prefix: "K" },
  ];

  for (const unit of units) {
    if (value >= unit.value) {
      return `$${(value / unit.value).toFixed(1)}${unit.prefix}`;
    }
  }
  return `$${value.toFixed(2)}`;
};
