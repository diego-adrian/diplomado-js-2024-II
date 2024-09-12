/* 
 X = 1
 O = 0
*/

let JUGADOR = 'X';
const TABLERO = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
window.addEventListener('load', () => {
  const estaCompleto = () => TABLERO.flat(1).every(casilla => casilla !== null);

  const quienGano = () => {
    const ganoLaFilaUno = [TABLERO[0][0], TABLERO[0][1], TABLERO[0][2]].every(columna => columna === TABLERO[0][0]);
    const ganoLaFilaDos = [TABLERO[1][0], TABLERO[1][1], TABLERO[1][2]].every(columna => columna === TABLERO[1][0]);
    const ganoLaFilaTres = [TABLERO[2][0], TABLERO[2][1], TABLERO[2][2]].every(columna => columna === TABLERO[2][0]);

    if (ganoLaFilaUno) {
      alert('Gano la fila uno');
    }

    if (ganoLaFilaDos) {
      alert('Gano la fila dos');
    }

    if (ganoLaFilaTres) {
      alert('Gano la fila tres');
    }
  }

  const cajitas = document.getElementsByClassName('box');
  [...cajitas].forEach(cajita => {
    cajita.addEventListener('click', () => {
      JUGADOR = JUGADOR === 'X' ? 'O' : 'X'
      cajita.innerHTML = JUGADOR;

      const fila = cajita.getAttribute('data-fila');
      const columna = cajita.getAttribute('data-columna');
      TABLERO[fila][columna] = JUGADOR === 'X' ? 1 : 0;
      if (estaCompleto()) {
        quienGano();
      }
    });
  });

});
