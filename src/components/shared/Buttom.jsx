function Buttom({ type, version, children, isDisabled }) {
  return (
    <button
      type={type}
      className={`btn btn-${version ? version : "primary"}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}

export default Buttom;
