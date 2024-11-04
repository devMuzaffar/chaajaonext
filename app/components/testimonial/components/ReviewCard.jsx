const ReviewCard = ({ text, img, name, date }) => {
  return (
    <div className="flex flex-col justify-between">
      <p className="text-sm italic md:text-lg md:leading-8">{text}</p>

      <div className="flex items-center gap-5 py-5">
        <img className="rounded-full w-[50px]" src={img} alt="" />
        <div>
          <h2 className="text-sm font-medium">{name}</h2>
          <p className="text-sm">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
