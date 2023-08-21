
const initialState = [
  { id: 0, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 1, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 2, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 3, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 4, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 5, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 6, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 7, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 8, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 9, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 10, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
  { id: 11, contents: "", image: null, visible: true, matched: true, teamMatch: 0 },
];

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "board/setBoard":
      let setState = [];
      action.payload.forEach((element, index) =>
        setState.push({
          id: index,
          contents: element,
          visible: false,
          matched: false,
          teamMatch: 0,
        })
      );
      console.log(setState.map((card) => card.contents));
console.log('Current state:', setState);
      return setState;
      case "board/setImage":
        const updatedState = state.map((card, index) => ({
          ...card,
          image: action.payload[index], // Assuming payload contains images in the same order as cards
        }));
        console.log('Current state:', updatedState);
        return updatedState;
      
    case "board/flipCard":
      let flipState = [...state];
      const { cardID, teamID } = action.payload;
      flipState[cardID] = { ...state[cardID], visible: true };

      const [index1, index2] = flipState
        .filter((card) => card.visible)
        .map((card) => card.id);
      if (index2 !== undefined) {
        const card1 = flipState[index1];
        const card2 = flipState[index2];
        if (card1.contents === card2.contents) {
          flipState[index1] = {
            ...card1,
            visible: false,
            matched: true,
            teamMatch: teamID,
          };
          flipState[index2] = {
            ...card2,
            visible: false,
            matched: true,
            teamMatch: teamID,
          };
        }
      }

      return flipState;

    case "board/resetCards":
      return state.map((card) => ({ ...card, visible: false }));

    case "draw/displayWords":
      let displayState = [...state];
      const chosenWords = action.payload;

      for (let i = 0; i < chosenWords.length; i++) {
        displayState[i].contents = chosenWords[i];
      }

      return displayState;

    default:
      return state;
  }
};
/*
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
} */
const nouns = [
  "apple",
  "banana",
  "car",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "hat",
  "ice cream",
  "jacket",
  "key",
  "lion",
  "moon",
  "notebook",
  "orange",
  "pizza",
  "queen",
  "rabbit",
  "sun",
  "tree",
  "umbrella",
  "violin",
  "watermelon",
  "xylophone",
  "yogurt",
  "zebra",
];
const chooseWords = () => {
  let words = [];
  let newNouns = [...nouns];

  const pairs = 6; // Number of word pairs (half of the desired words count)
  for (let i = 0; i < pairs; i++) {
    const nounIndex = Math.floor(Math.random() * newNouns.length);

    const noun = newNouns[nounIndex];
    words.push(noun);

    newNouns.splice(nounIndex, 1);
  }

  return words;
};

const shuffleWords = (words) => {
  // Duplicate the words array to form matching pairs
  words = words.concat([...words]);

  // Shuffle the words array to randomize their placement
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }

  return words;
};

const randomWords = () => {
  const chosenWords = chooseWords();
  const shuffledWords = shuffleWords(chosenWords);
  return shuffledWords;
};

// action creators
export const setBoard = () => {
  const words = randomWords();
  return {
    type: "board/setBoard",
    payload: words,
  };
};
export const setImage = (imageData) => {
  return {
    type: "board/setImage",
    payload: imageData
  }
}
export const displayChosenWords = () => {
  const chosenWords = chooseWords();
  return {
    type: "draw/displayWords",
    payload: chosenWords,
  };
};
export const flipCard = (cardID, teamID) => {
  return {
    type: "board/flipCard",
    payload: { cardID, teamID },
  };
};

export const resetCards = (indices) => {
  //console.log('reseting')
  return {
    type: "board/resetCards",
  };
};
export const addTeamMatch = (teamID, cardsMatched) => {
  return {
    type: "board/addTeamMatch",
    payload: { teamID, cardsMatched },
  };
};
// Add selector export statments below
export const selectBoard = (state) =>
  state.board.map((card) => ({ id: card.id, contents: card.contents }));

export const selectVisibleIDs = (state) =>
  state.board.filter((card) => card.visible).map((card) => card.id);

export const selectMatchedIDs = (state) =>
  state.board.filter((card) => card.matched).map((card) => card.id);
export const selectTeamOneMatchIds = (state) =>
  state.board.filter((card) => card.teamMatch === 1).map((card) => card.id);
export const selectTeamTwoMatchIds = (state) =>
  state.board.filter((card) => card.teamMatch === 2).map((card) => card.id);
