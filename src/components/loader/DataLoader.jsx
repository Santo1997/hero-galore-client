export const toysLoader = async () => {
  const toysData = await fetch(`https://assign11-toys-server.vercel.app/toys`);
  const toys = await toysData.json();
  return { toys };
};
