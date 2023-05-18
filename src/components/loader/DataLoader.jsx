export const toysLoader = async () => {
  const toysData = await fetch(`http://localhost:5000/toys`);
  const toys = await toysData.json();

  //   const recipiesData = await fetch(
  //     "https://chef-recipe-server-santo1997.vercel.app/recipies"
  //   );
  //   const recipies = await recipiesData.json();

  return { toys };
};
