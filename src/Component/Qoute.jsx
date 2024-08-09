const Quote = ({ quote, onNext }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-5 mt-4 w-auto h-auto shadow-md hover:shadow-lg transition-shadow duration-300">
      <h1 className="text-2xl font-sans text-white mb-3">{quote}</h1>
      <button className="py-2 px-4 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200 ml-auto flex justify-end " onClick={onNext}>
        NEXT
      </button>
    </div>
  );

};

export default Quote;
