export const generateTimeOptions = () => {
  const times = [];
  for (let hour = 9; hour <= 18; hour++) {
    // Диапазон с 09:00 до 18:00
    const h = hour.toString().padStart(2, "0");
    times.push(`${h}:00`);
    if (hour !== 18) {
      // Чтобы не добавлять 18:30, если работа до 18:00
      times.push(`${h}:30`);
    }
  }
  return times;
};
