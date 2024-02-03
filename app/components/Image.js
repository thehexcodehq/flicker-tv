const Image = ({ alt = '', ...props }) => {
  return (
    <img
      alt={alt}
      {...props}
    />
  );
};

export default Image;