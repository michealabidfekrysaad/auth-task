
const ErrorMessage = ({type, errors}) => {
  return errors.map((error) => {
    if (error.type === type) {
      return (
        <span className="text-danger" key={error.type}>
          {error.error}
        </span>
      );
    }
    return null;
  });
};

export default ErrorMessage;
