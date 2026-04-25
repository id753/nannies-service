export const generateTimeOptions = () => {
  const times = ["Meeting time"];

  for (let hour = 0; hour <= 23; hour++) {
    const h = hour.toString().padStart(2, "0");

    times.push(`${h}  :  00`);
    times.push(`${h}  :  30`);
  }

  return times;
};
