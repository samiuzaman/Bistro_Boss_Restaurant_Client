const Title = ({ title, subtitle, color }) => {
  return (
    <div className="w-72 mx-auto">
      <p className="text-center text-[#D99904] border-b-2 py-3">{subtitle}</p>
      <h2 className={`text-center text-${color ? color : "black"} text-2xl border-b-2 py-3 font-medium`}>{title}</h2>
    </div>
  );
};

export default Title;
