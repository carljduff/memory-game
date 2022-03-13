
document.addEventListener('DOMContentLoaded', () => {
    //card options
        let cardArray = [
            {
                name: 'all',
                img: 'imgs/all.jpg'
            }, 
            {
                name: 'all',
                img: 'imgs/all.jpg'
            },
            {
                name: 'group',
                img: 'imgs/group.jpg'
            }, 
            {
                name: 'group',
                img: 'imgs/group.jpg'
            },
            {
                name: 'main',
                img: 'imgs/main.jpg'
            }, 
            {
                name: 'main',
                img: 'imgs/main.jpg'
            },
            {
                name: 'moon',
                img: 'imgs/moon.jpg'
            }, 
            {
                name: 'moon',
                img: 'imgs/moon.jpg'
            },
            {
                name: 'sailor',
                img: 'imgs/sailor.jpg'
            }, 
            {
                name: 'sailor',
                img: 'imgs/sailor.jpg'
            },
            {
                name: 'star',
                img: 'imgs/star.jpg'
            }, 
            {
                name: 'star',
                img: 'imgs/star.jpg'
            }
        ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
    let title = document.getElementById('title');

  
    //create your board
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'imgs/wand.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'imgs/wand.jpg')
        cards[optionTwoId].setAttribute('src', 'imgs/wand.jpg')
        title.textContent = 'You clicked the same image!';
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        title.textContent = 'You found a match!'
        cards[optionOneId].setAttribute('src', 'img/square.png')
        cards[optionTwoId].setAttribute('src', 'img/square.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'imgs/wand.jpg')
        cards[optionTwoId].setAttribute('src', 'imgs/wand.jpg')
        title.textContent = `That's not a match! Please try again! :)`
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })