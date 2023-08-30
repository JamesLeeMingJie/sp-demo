const Header = ({ theme, label, title, description }) => {
  return (
    <div className="text-left">
      {label && (
        <h2 className={`text-${theme} font-extrabold tracking-wide uppercase`}>
          {label}
        </h2>
      )}

      {title && (
        <p className="text-3xl text-sp pb-8 leading-8 font-extrabold sm:text-4xl">
          {title}
        </p>
      )}

      <p className="mb-8 text-black leading-relaxed">{description}</p>
    </div>
  );
};

export default Header;
