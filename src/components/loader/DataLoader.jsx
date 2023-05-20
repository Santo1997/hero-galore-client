export const toysLoader = async () => {
  const toysData = await fetch(`http://localhost:5000/toys`);
  const toys = await toysData.json();

  return { toys };
};
