const squares = Array.from(document.querySelectorAll('.grid div'))

//Challenge: We use what we have learnt in the previous three lessons in order 
//to visually colour a game board in our browser. At the moment the board is empty. 
//Please colour the squares, similar to like you would on a chess board using the 
//for loop.

//Don't forget to share your code in the #share-your-code channel on discord.
let col = 1
let row = 1

for (let i = 1; i <= squares.length; i++) {
  if (row % 2 === 1){
    if (i % 2 === 0) {
      if (col < 4){
        squares[i-1].classList.add('black')
        col += 1
      } else if (col === 4 )  {
        squares[i-1].classList.add('black')
        col = 1
        row++
        }
      }
  } else {
    if (i % 2 === 1) {
      if (col < 4){
        squares[i-1].classList.add('black')
        col += 1
      } else if (col === 4 )  {
        squares[i-1].classList.add('black')
        col = 1
        row++
        i += 1
      }
    }
  }
} 
