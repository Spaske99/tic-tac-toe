export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turnInfo) => (
        <li key={`${turnInfo.square.row}${turnInfo.square.col}`}>
          {turnInfo.player} selected {turnInfo.square.row},{turnInfo.square.col}
        </li>
      ))}
    </ol>
  );
}
