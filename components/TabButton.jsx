/* eslint-disable react/prop-types */
const TabButton = ({ name, image, onSelect }) => {
  return (
    <li>
      <button onClick={onSelect}>
        <div>{name}</div>
        <img className="button-img" src={image} alt={name} />
      </button>
    </li>
  );
};

export default TabButton;
