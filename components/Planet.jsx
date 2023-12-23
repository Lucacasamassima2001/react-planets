/* eslint-disable react/prop-types */
function Planet({
  name,
  image,
  title,
  description,
  distanceFromSun,
  diameter,
  gravity,
}) {
  return (
    <li>
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div>{distanceFromSun}</div>
      <div>{diameter}</div>
      <div>{gravity}</div>
    </li>
  );
}

export default Planet;
