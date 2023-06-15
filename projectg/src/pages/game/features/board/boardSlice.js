
const initialState = [
  {id: 0, contents: 'Provider', visible: true, matched: true, teamMatch:0}, 
  {id: 1, contents: 'Provider', visible: true, matched: true, teamMatch:0}, 
  {id: 2, contents: 'selector', visible: true, matched: true, teamMatch:0}, 
  {id: 3, contents: 'selector', visible: true, matched: true, teamMatch:0}, 
  {id: 4, contents: 'useSelector()', visible: true, matched: true, teamMatch:0}, 
  {id: 5, contents: 'useSelector()', visible: true, matched: true, teamMatch:0}, 
  {id: 6, contents: 'useDispatch()', visible: true, matched: true, teamMatch:0}, 
  {id: 7, contents: 'useDispatch()', visible: true, matched: true, teamMatch:0}, 
  {id: 8, contents: 'Pure Function', visible: true, matched: true, teamMatch:0}, 
  {id: 9, contents: 'Pure Function', visible: true, matched: true, teamMatch:0}, 
  {id: 10, contents: 'react-redux', visible: true, matched: true, teamMatch:0}, 
  {id: 11, contents: 'react-redux', visible: true, matched: true, teamMatch:0}, 
];
export const boardReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'board/setBoard':
      let setState = [];
      action.payload.forEach((element, index) => 
        setState.push({id: index, 
                      contents: element, 
                      visible: false, 
                      matched: false})
      );
      return setState;
    case 'board/flipCard':
      let flipState = [...state];
      const cardID = action.payload;
      flipState[cardID] = {...state[cardID], visible:true}
      
      const [index1, index2] = flipState
        .filter(card => card.visible)
        .map(card => card.id);
      if (index2 !== undefined){
        const card1 = flipState[index1];
        const card2 = flipState[index2];
        if (card1.contents === card2.contents) {
          flipState[index1] = {...card1, visible: false, matched: true}
          flipState[index2] = {...card2, visible: false, matched: true}
        }
      } 

      return flipState;
      
    case 'board/resetCards':
      return state.map(card => ({...card, visible: false}));
    
      case 'board/addTeamMatch':
        const { teamID, cardsMatched } = action.payload;
        return state.map((card) => {
          if (cardsMatched.includes(card.id)) {
            return { ...card, teamMatch: teamID };
          }
          return card;
        });
  
    default:
      return state;
  }
}

const wordPairs = [
  'Provider', 'Provider', 
  'selector', 'selector', 
  'useSelector()', 'useSelector()', 
  'useDispatch()', 'useDispatch()',
  'Pure Function', 'Pure Function',
  'react-redux', 'react-redux',
]

const randomWords = () => {
  let words = []
  let newWordPairs = [...wordPairs]
  const reps = newWordPairs.length
  for (let i=0; i<reps; i++) {
    const wordIndex = Math.floor(Math.random()*newWordPairs.length);
    words.push(newWordPairs[wordIndex])
    newWordPairs.splice(wordIndex, 1)
  }

  return words;
} 

// action creators
export const setBoard = () => {
  const words = randomWords()
  return {
    type: 'board/setBoard',
    payload: words
  }
}

export const flipCard = (id) => {
  return {
    type: 'board/flipCard',
    payload: id
  }
}

export const resetCards = (indices) => {
  console.log('reseting')
  return {
    type: 'board/resetCards'
  }
}
export const addTeamMatch = (teamID, cardsMatched) => {
  return {
    type: 'board/addTeamMatch',
    payload: { teamID, cardsMatched },
  };
};
// Add selector export statments below
export const selectBoard = state => state.board.map(card=>({id: card.id, contents: card.contents}))

export const selectVisibleIDs = state => state.board
.filter(card => card.visible)
.map(card => card.id)

export const selectMatchedIDs = state => state.board
.filter(card => card.matched)
.map(card => card.id)
