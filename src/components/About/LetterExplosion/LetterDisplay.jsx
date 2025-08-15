
function getRandomSpeed() {
  return 0.8 + Math.random() * 0.7;
}

function LetterDisplay({word}) {
  return (
    <>
      {word.split('').map((char, i) => (
        <div
          key={i}
          className="letter text-6xl font-semibold xs:text-[90px] md:text-[120px]"
          data-speed={getRandomSpeed()}
        >
          {char}
        </div>
      ))}
    </>
  );
}

export default LetterDisplay;