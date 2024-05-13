export default function GameOver({ winner, onRestart }) {
  function capitalizeName(winner) {
    if (winner && typeof winner === "string") {
      return winner.charAt(0).toUpperCase() + winner.slice(1);
    }
    return winner;
  }

  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{capitalizeName(winner)} Won!</p>}
      {!winner && <p>It&apos;s a draw!</p>}
      <p>
        <button onClick={onRestart}>Remach!</button>
      </p>
    </div>
  );
}
