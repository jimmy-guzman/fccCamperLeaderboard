function handleError(error) {
  console.warn(error);
  return null;
}

// export function fetchTopCampers(time) {
//   const encodedURI = window.encodeURI(
//     `https://fcctop100.herokuapp.com/api/fccusers/top/${time}`
//   );

//   let campers = null;
//   fetch(encodedURI)
//     .then(response => response.json())
//     .then(response => {
//       campers = response;
//     })
//     .catch(handleError);

//   return campers;
// }

export async function fetchTopCampers(time) {
  const encodedURI = window.encodeURI(
    `https://fcctop100.herokuapp.com/api/fccusers/top/${time}`
  );

  const response = await fetch(encodedURI).catch(handleError);
  const campers = await response.json();
  return campers;
}
