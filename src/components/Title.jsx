const Title = ({ text }) => {
  return (
    <div className="title w-100 flex flex-row justify-center">
      <div className="title-container">
        <span className="title-content">{text}</span>
      </div>
    </div>
  );
};

export default Title;
