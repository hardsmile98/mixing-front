const PRIORITIES = {
  FAST: 'Fast',
  STANDART: 'Standart',
  SLOW: 'Slow',
};

const getPriority = (feePercent: number) => {
  switch (true) {
    case feePercent > 1.9:
      return PRIORITIES.FAST;
    case feePercent > 1.3:
      return PRIORITIES.STANDART;
    default:
      return PRIORITIES.SLOW;
  }
};

export {
  getPriority,
};
