const SecondsCounter = ({ seconds }) => {
  return (
    <div>
      <h1>Segundos desde que cargó la página:</h1>
      <p>{seconds}</p>
    </div>
  );
};

export default SecondsCounter;