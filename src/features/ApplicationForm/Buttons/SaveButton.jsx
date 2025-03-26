const SaveButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-primary text-white hover:bg-blue-600 hover:shadow-custom-light"
    >
      Save
    </button>
  );
};

export default SaveButton;
