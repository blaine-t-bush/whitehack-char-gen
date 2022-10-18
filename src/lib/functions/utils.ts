export function getRandomElement<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

export function getRandomUniqueElement<T>(array: T[], selections: T[]): T {
  let element: T = getRandomElement(array);

  while (selections.includes(element)) {
    element = getRandomElement(array);
  }

  return element;
}

export function shuffleArray<T>(array: T[]): T[] {
  let currentIndex: number = array.length, randomIndex: number;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function roll(size: number, count: number = 1, double: string = null): number {
  let sum: number = 0, altSum: number = 0;
  for (let i = 0; i < count; i++) {
    sum += Math.floor(Math.random() * size + 1);
    altSum += Math.floor(Math.random() * size + 1);
  }

  if (double === "high") {
    sum = Math.max.apply(null, [sum, altSum]);
  } else if (double === "low") {
    sum = Math.min.apply(null, [sum, altSum]);
  }

  return sum;
}