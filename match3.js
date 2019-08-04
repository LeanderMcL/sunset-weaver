// ---IMAGES---

const bindle = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Fbindle.png?1533504968919'
const carnyx = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Fcarnyx.png?1533504814963'
const elfhelm = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Felf-helmet.png?1533505125816'
const flame = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Fflame.png?1533504553944'
const hoodedfig = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Fhooded-figure.png?1533504843794'
const nautilus = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Fnautilus-shell.png?1533505042707'
const pants = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Fthumbnails%2Farmored-pants.png?1533503109479'
const oak = 'https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Fthumbnails%2Fholy-oak.png?1564872022232'

// ---SET UP THE PARAMETERS OF THE GRID---

// note: later we'll try to generate this dynamically depending on what level we're playing
// for now, six colours and six images

const squareValues = {
  'A': 'crimson',
  'B': 'darkturquoise',
  'C': 'gold',
  'D': 'darkorange',
  'E': 'darkseagreen',
  'F': 'purple',
  'G': 'teal',
  'H': 'forestgreen',
}

const squarePics = {
  'A': flame,
  'B': carnyx,
  'C': hoodedfig,
  'D': bindle,
  'E': nautilus,
  'F': elfhelm,
  'G': pants,
  'H': oak,
}

const squareScores = {
  'A': 1,
  'B': 2,
  'C': 3,
  'D': 4,
  'E': 5,
  'F': 6,
  'G': 7,
  'H': 8,
}

const startingTotalScore = 0;
const startingLevelScore = 0;

const currentTotalScore = 0;
const currentLevelScore = 0;

const working = 'WORKING';
const testing = 'In development - may not behave as expected';
const broken = 'BROKEN';
const special = 'Playable - working on the display bug'

const gameTitle = 'Match Me If You Can!';
const gameSubTitle = 'Swap tiles, make matches of 3 or more, score points';
const headerLinks = [["index.html","play!"],["dev-news.html","dev news"],["about.html","about"]];

const glitchButton = '<div class="glitchButton" style="position:fixed;top:20px;right:20px;"></div><script src="https://button.glitch.me/button.js"></script>';

// note: later on we'll dynamically generate the size of the grid depending on what level we're playing? but that's for way later
// for now this is a static 8x8 grid

const gridSize = 8;

const gameStatus = testing;

/*const img = createImage('hi','hello','https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Farmored-pants.png?1533503109479',45,45);

const testButton = makeSquare('hi','hello',60,60);
appendElement(testButton);
setElementBGColour('hello','lightcoral');
setElementVal('hello','<img src="https://cdn.glitch.com/39da33ca-b9bc-4d91-87ff-6edf9dfb13fb%2Farmored-pants.png?1533503109479" height="45" width="45">');*/

// --- RUN THE GAME ---

const screen = generateScreen(gameTitle,gameSubTitle,headerLinks,glitchButton);
const grid = runGame(gridSize,squareValues,squareScores,squarePics,gameStatus);


/*const testLink = buildLinkTag("dev-news.html","dev news");
console.log(testLink);*/

/*console.log(generateRandomSquare(squareValues,squarePics));
console.log(generateRestrictedSquare(squareValues,squarePics,['X','C']));*/

//console.log(buildImgTag("test.jpg",50,"testID"));

/*console.log(getNumericId("pic0"));
console.log(setSquareId(0));
console.log(setPicId(0));*/

//runTest(gridSize,squareValues,squareScores,gameStatus);

// ---GENERATE THE BOARD---
// note: makeGrid is going to change hugely once I set up matching

// generates a responsive screen
function generateScreen(title,subTitle,headLinks,button) {
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  if (screenWidth > screenHeight) {
    generateLandscapeScreen(screenHeight,screenWidth,title,subTitle,headLinks,button);
  } else {
    generatePortraitScreen(screenHeight,screenWidth,title,subTitle,headLinks,button);
  }
}

function generateLandscapeScreen(h,w,title,subTitle,headLinks,button) {
  const headerHeight = Math.floor(h * 0.08);
  const titleHeight = Math.floor(h * 0.15);
  makeHeader(headerHeight,w,headLinks);
  const titleDiv = createDiv('titleDiv','titleDiv',titleHeight,w);
  appendElement(titleDiv);
  positionElement('titleDiv',0,headerHeight);
  const gameHeight = h - headerHeight - titleHeight;
  const gamePosTop = headerHeight + titleHeight;
  const gameWidth = Math.floor(w * 0.55);
  const gameDiv = createDiv('gameDiv','gameDiv',gameHeight,gameWidth);
  appendElement(gameDiv);
  positionElement('gameDiv',0,gamePosTop);
  const scoreWidth = w - gameWidth;
  const scorePosLeft = w - scoreWidth;
  const scoreDiv = createDiv('scoreDiv','scoreDiv',gameHeight,scoreWidth);
  appendElement(scoreDiv);
  positionElement('scoreDiv',scorePosLeft,gamePosTop);
  const gameTitle = createElement('h1','gameTitle','gameTitle');
  const gameSubTitle = createElement('h2', 'gameSubTitle', 'gameSubTitle');
  // need to resize this responsively for different screen sizes? figure out how to do that later
  appendElement(gameTitle,titleDiv);
  setElementVal('gameTitle',title);
  appendElement(gameSubTitle,titleDiv);
  setElementVal('gameSubTitle',subTitle);
}

function generatePortraitScreen(h,w,title,subTitle,headLinks,button) {
  // code goes here
  const headerHeight = Math.floor(h * 0.05);
  const titleHeight = Math.floor(h * 0.075);
  makeHeader(headerHeight,w,headLinks,button);
  const titleDiv = createDiv('titleDiv','titleDiv',titleHeight,w);
  appendElement(titleDiv);
  positionElement('titleDiv',0,headerHeight);
  const gameHeight = Math.floor(h*0.5);
  const gameWidth = Math.floor(h*0.9);
  const scoreHeight = h - headerHeight - titleHeight - gameHeight;
  const scorePosTop = headerHeight + titleHeight;
  const gamePosTop = headerHeight + titleHeight + scoreHeight;
  const gamePosLeft = Math.floor((w - gameWidth) / 2);
  const scoreDiv = createDiv('scoreDiv','scoreDiv',scoreHeight,w);
  appendElement(scoreDiv);
  positionElement('scoreDiv',0,scorePosTop)
  const gameDiv = createDiv('gameDiv','gameDiv',gameHeight,gameWidth);
  appendElement(gameDiv);
  positionElement('gameDiv',gamePosLeft,gamePosTop);
  const gameTitle = createElement('h1','gameTitle','gameTitle');
  const gameSubTitle = createElement('h2','gameSubTitle','gameSubTitle');
  appendElement(gameTitle,titleDiv);
  setElementVal('gameTitle',title);
  appendElement(gameSubTitle,titleDiv);
  setElementVal('gameSubTitle',subTitle);
}

function makeHeader(h,w,l,button) {
  console.log(button);
  const headerDiv = createDiv('headerDiv','headerDiv',h,w);
  appendElement(headerDiv);
  const headerLinks = makeHeaderLinks(l);
  let headerContent = "";
  for (let i = 0; i < headerLinks.length; i++) {
    headerContent = headerContent + " " + headerLinks[i];
  }
  headerContent = headerContent + button;
  setElementVal('headerDiv',headerContent);
  positionElement('headerDiv',0,0);
}

function makeHeaderLinks(l) {
  let links = [];
  for (let i = 0; i < l.length; i++) {
    let link = buildLinkTag(l[i][0],l[i][1]);
    links.push(link);
  }
  return links;
}

async function makeBoard(size,valDict,scoreDict,picDict) {
  let grid = makeGrid(size,valDict,scoreDict,picDict);
  if (testGameOver(size)) {
    makeBoard(size,valDict,scoreDict);
  }
  clickyGrid();
  return grid;
}

async function runGame(size,valDict,scoreDict,picDict,status) {
  makeScoreBoard(status);
  const grid = await makeBoard(size,valDict,scoreDict,picDict,status);
}

// --- TESTING ---
// note: should probably set up some kind of automatic testing?

async function runTest(size,valDict,scoreDict,status) {
  const grid = await runGame(size,valDict,scoreDict,status);
  /*setElement(3,'B','white','green');
  setElement(7,'Y','white','blue');
  setElement(8,'X','white','red');
  setElement(9,'Z','black','yellow');
  setElement(12,'X','white','red');
  setElement(13,'A','white','purple');
  setElement(17,'A','white','purple');
  setElement(18,'X','white','red');
  setElement(23,'B','white','green');
  const testMoving = testMove(8,size);
  console.log(testMoving); // working so far!
  const getMoves = testAllMoves(size);
  console.log(getMoves);*/
  /*const testList = [1,2,3,4,5];
  const testNewList = removeListItem(testList,4);
  console.log(testNewList); // should be [1,2,3,5];*/
  /*setElement(1,'X','white','red');
  setElement(9,'X','white','red');
  setElement(13,'Y','white','blue');
  setElement(14,'Y','white','blue');
  const prevTwo = previousTwoMatch(17,size);
  const prevTwo2 = previousTwoMatch(15,size);
  console.log(prevTwo);
  console.log(prevTwo2);*/
  //const vals = objectVals(valDict);
  //console.log(vals);
}

/*console.log('hi, testing begins here');
const testMatchTwo = twoSquareMatch(0,grid.size);
console.log(testMatchTwo);
const testMatchThree = twoSquareMatch(5,grid.size);
console.log(testMatchThree);
// okay so this works in principle which we knew because we're using it elsewhere
// right now I need a function that grabs a list of all two-way matches
// failure mode: first attempt, we're probably going to grab all matches of at least two
// okay let's do some square-forcing and see if that happens
// yup, right, cool
// so now I have a match of at least two? oof this is hard. now what. going round in circles
// so let's start with the obvious thing that is, I want a function that returns all my two-way matches that are only two-way

console.log(allTwoSquareMatches(grid.size));*/

// okay this isn't at all what I want yet
// where is it that I turn my objects into match lists?

//console.log(matchTwoToList(0,grid.size));

/*click(0);
let testClick = anyOtherSquareIsClicked(10,gridSize);
console.log(testClick);*/

/*console.log(getElementVal(0));
console.log(getElementVal(1));
const testSwap = squareSwapLag(0,1,squareValues,2000);
console.log(getElementVal(0));
console.log(getElementVal(1));*/

/*let testParent = getElementParent(0);
console.log(testParent);
console.log(testParent.isClicky);*/

// functions go here

// ---BOARD SETUP---

// set up the elements of the board

// generates a grid of squares
// note: currently hardcoded for 60px squares; this could maybe be improved to vary with screen size?
function makeGrid(size,valDict,scoreDict,picDict) {
  const gameDiv = getElement('gameDiv');
  const gameDivWidth = gameDiv.clientWidth;
  const gameDivHeight = gameDiv.clientHeight;
  let gridSize;
  if (gameDivWidth < gameDivHeight) {
    gridSize = Math.floor(gameDivWidth * 0.90);
  } else {
    gridSize = Math.floor(gameDivHeight * 0.90);
  }
  const gridPosLeft = Math.floor((gameDivWidth - gridSize) / 2);
  const gridPosTop = Math.floor((gameDivHeight - gridSize) / 2);
  const squareWidth = Math.floor(gridSize / size);
  const w = squareWidth * size;
  const grid = createDiv('grid','grid',w,w);
  grid.size = size;
  grid.squSize = squareWidth;
  grid.picSize = Math.floor(squareWidth * 0.75);
  grid.isClicky = false;
  grid.vals = valDict;
  grid.scores = scoreDict;
  grid.pics = picDict;
  appendElement(grid,gameDiv);
  positionElement('grid',gridPosLeft,gridPosTop);
  populateMatchlessGrid(grid,size,valDict,picDict);
  return grid;
}

// populate the grid with matchless squares
function populateMatchlessGrid(grid,size,valDict,picDict) {
  const squareSize = grid.squSize;
  const imgSize = grid.picSize;
  for (let i = 0; i < size * size; i++) {
    const squId = setSquareId(i);
    const prevTwo = previousTwoMatch(squId,size);
    let squareProps;
    if (prevTwo) {
      let prevTwoVals = objectVals(prevTwo);
      squareProps = generateRestrictedSquare(valDict,picDict,prevTwoVals); // return [value, colour, pic]
    } else {
      squareProps = generateRandomSquare(valDict,picDict); // returns [value, colour, pic]
    }
    const squareVal = squareProps[0];
    const imgUrl = squareProps[2];
    const picId = setPicId(i);
    const squarePic = buildImgTag(imgUrl,imgSize,picId);
    const squareColour = squareProps[1];
    const square = makeSquare('',squId,squareSize);
    square.val = squareVal;
    appendElement(square,grid);
    setElementVal(squId,squarePic);
    setElementColours(squId,squareColour,squareColour);
  }
}

// create a new board
function newBoard(size,valDict,scoreDict,picDict) {
  const oldGrid = getElement('grid');
  const gameDiv = getElement('gameDiv');
  gameDiv.removeChild(oldGrid);
  const newGrid = makeBoard(size,valDict,scoreDict,picDict);
}

// creates the scoreboard
function makeScoreBoard(status) {
  const scoreDiv = getElement('scoreDiv');
  const scoreDivWidth = scoreDiv.clientWidth;
  const scoreDivHeight = scoreDiv.clientHeight;
  // make the main scoreboard div
  const scoreBoardWidth = Math.floor(scoreDivWidth * 0.90);
  const scoreBoardHeight = Math.floor(scoreDivHeight * 0.90);
  const scoreBoardPosLeft = Math.floor((scoreDivWidth - scoreBoardWidth) / 2);
  const scoreBoardPosTop = Math.floor((scoreDivHeight - scoreBoardHeight) / 2);
  const scoreBoardDiv = createDiv('scoreboard','scoreboard',scoreBoardHeight,scoreBoardWidth); // we can dynamically generate this later maybe?
  appendElement(scoreBoardDiv,scoreDiv);
  positionElement('scoreboard',scoreBoardPosLeft,scoreBoardPosTop);
  setElementBGColour('scoreboard','lightsalmon');
  setElementColour('scoreboard','saddlebrown');
  // we'll make this context-dependent on the user's screen-size later
  //positionElement('scoreboard',550,100);
  // TODO: make the scoreboard pretty somehow
  // make the divs for invidual elements
  const statusDiv = createDiv('status','status');
  appendElement(statusDiv,scoreBoardDiv);
  const totalScoreDiv = createDiv('total score','total score');
  appendElement(totalScoreDiv,scoreBoardDiv);
  const lvlScoreDiv = createDiv('level score','level score');
  appendElement(lvlScoreDiv,scoreBoardDiv);
  const newLevelDiv = createDiv('restart','restart');
  appendElement(newLevelDiv,scoreBoardDiv);
  const gameOverDiv = createDiv('game over','game over');
  appendElement(gameOverDiv,scoreBoardDiv);
  // make the spans so it's easy to access the various bits of scores
  const statusLabelSpan = createElement('span','status label','status label');
  appendElement(statusLabelSpan,statusDiv);
  const statusTxtSpan = createElement('span','status text','status text');
  appendElement(statusTxtSpan,statusDiv);
  const totalScoreTxtSpan = createElement('span','total score text','total score text');
  appendElement(totalScoreTxtSpan,totalScoreDiv);
  const totalScoreFigSpan = createElement('span','total score figure','total score figure');
  appendElement(totalScoreFigSpan,totalScoreDiv);
  const lvlScoreTxtSpan = createElement('span','level score text','level score text');
  appendElement(lvlScoreTxtSpan,lvlScoreDiv);
  const lvlScoreFigSpan = createElement('span','level score figure','level score figure');
  appendElement(lvlScoreFigSpan,lvlScoreDiv);
  const gameOverSpan = createElement('span','game over span','game over span');
  appendElement(gameOverSpan,gameOverDiv);
  const newLevelButton = createButton('interface button','restart button','Restart');
  appendElement(newLevelButton,newLevelDiv);
  clickyRestart('restart button');
  // set up the values of our score spans
  setElementVal('status label','Status: ');
  setElementVal('status text',status);
  setElementVal('total score text','Total score: ');
  setElementVal('total score figure','0');
  setElementVal('level score text','Level score: ');
  setElementVal('level score figure','0');
}

// empty the grid after matches
// note: squareVoid() is in general helper functions below

// empties a set of squares identified by a list
function emptyGrid(matchList) {
  for (let i = 0; i < matchList.length; i++) {
    let matchSquare = matchList[i];
    squareVoid(matchSquare);
  }
  return true;
}

// runs emptyGrid on a lag
function emptyGridLag(matchList,lag) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(emptyGrid(matchList));
    },lag);
  });
}

// refill the grid after matches

// refills a particular square on the grid
function squareRefill(id,size,valDict,picDict,picSize) {
  const idNo = getNumericId(id);
  const thisPicId = setPicId(idNo);
  if (getSquareVal(id) == '-') { // this square is empty
    // are there any empty squares above?
    const voidStack = recursiveMatch('above',id,size);
    let colourAbove;
    if (!voidStack) { // there are no empty squares above
      colourAbove = adjacentAbove(id,size);
      // now test if we have any colours above
      if (!colourAbove && colourAbove != 0) { // there are no colours above
        let thisNewSquare = generateRandomSquare(valDict,picDict); // returns a list of [value, colour, pic]
        let thisNewImgTag = buildImgTag(thisNewSquare[2],picSize,thisPicId);
        setElement(id,thisNewImgTag,thisNewSquare[1],thisNewSquare[1]); // set these to the existing square
        setSquareVal(id,thisNewSquare[0]);
      } else { // there are colours above, but no empty squares above, so we just need one
        let thisNewVal = getSquareVal(colourAbove);
        let thisNewCol = valDict[thisNewVal];
        let thisNewPic = picDict[thisNewVal];
        let thisNewImgTag = buildImgTag(thisNewPic,picSize,thisPicId)
        setElement(id,thisNewImgTag,thisNewCol,thisNewCol);
        setSquareVal(id,thisNewVal);
        squareVoid(colourAbove);
      }
    } else { // there are empty squares above
      let lastVoid = voidStack[voidStack.length-1];
      colourAbove = adjacentAbove(voidStack[voidStack.length-1],size); // get the colours above the top of the empty squares
      if (!colourAbove && colourAbove != 0) { // no colours above, we can just fill in this square
        let thisNewSquare = generateRandomSquare(valDict,picDict); // [value, colour, picture]
        let thisNewImgTag = buildImgTag(thisNewSquare[2],picSize,thisPicId);
        setElement(id,thisNewImgTag,thisNewSquare[1],thisNewSquare[1]);
        setSquareVal(id,thisNewSquare[0]);
      } else { // colours and empty squares above; fill this square with colourAbove
        let thisNewVal = getSquareVal(colourAbove);
        let thisNewCol = valDict[thisNewVal];
        let thisNewPic = picDict[thisNewVal];
        let thisNewImgTag = buildImgTag(thisNewPic,picSize,thisPicId);
        setElement(id,thisNewImgTag,thisNewCol,thisNewCol);
        setSquareVal(id,thisNewVal);
        squareVoid(colourAbove);
      }
    }
  }
}

// refills the entire grid
function refillGrid(size,valDict,picDict) {
  const grid = getElement("grid");
  const picSize = grid.picSize;
  const start = size*size-1;
  for (let i = start; i >= 0; i--) {
    const squId = setSquareId(i);
    squareRefill(squId,size,valDict,picDict,picSize);
  }
  return true;
}

// refills the grid on a lag
function refillGridLag(size,valDict,picDict,lag) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(refillGrid(size,valDict,picDict));
    },lag);
  });
}

// -- MOVES --

// okay so testMove currently accounts for **?* and similar but not the kind where a move can 

// test if a particular square has any moves associated with it
// note: the square involved must itself be part of a two-way match - this won't account for the isolated squares
function testMove(id,size) {
  let moves = []; // we'll return this if it's got anything in it
  const matched = twoSquareMatch(id,size); // gets any two-square matches relating to this square
  const nextSquares = adjacentSquares(id,size);
  // note: we're only running anything with this function after all matches have been cleared, so we'll never have three-way matches
  // we should probably double-check there's no three-way matches just for code hygiene/resuability or something, but that's FOR LATER
  if (matched) { // if our passed-in square has any two-way matches
    const matchedKeys = Object.keys(matched); // keys of our matched object
    for (let i = 0; i < matchedKeys.length; i++) {
      let thisMatchedKey = matchedKeys[i];
      let thisMatchedOpp = opposite(thisMatchedKey);
      let thisNextSquare = nextSquares[thisMatchedOpp]; // this is the unmatching square in the same direction as the match
      if (thisNextSquare) {
        let thisNextNext = adjacentSquares(thisNextSquare,size); // the squares next door to this unmatching square
        let thisNextNextKeys = Object.keys(thisNextNext);
        for (let j = 0; j < thisNextNextKeys.length; j++) { // now we iterate over the squares next to this matched square to look for matches
          let thisMoveKey = thisNextNextKeys[j];
          if (thisMoveKey != thisMatchedKey) { // we're not matching in the same direction as our match
            if (isMatch([id,thisNextNext[thisMoveKey]])) { // if the two squares we're checking match
              let thisMove = numericSort([thisNextSquare,thisNextNext[thisMoveKey]]);
              if (moves.length > 0) {
                moves = noDupeNest(moves,thisMove);
              } else {
                moves.push(thisMove);
              }
            }
          }
        }
      }
    }
  } else {
    const nextNextSquares = nextAdjacentSquares(id,size);
    const nextNextKeys = Object.keys(nextNextSquares);
    for (let k = 0; k < nextNextKeys.length; k++) {
      let thisDirection = nextNextKeys[k];
      let thisOpposite = opposite(thisDirection);
      let thisSquare = nextNextSquares[thisDirection];
      if (isMatch([id,thisSquare])) {
        let middleSquare = nextSquares[thisDirection];
        let middleSquareNext = adjacentSquares(middleSquare,size);
        let middleSquareNextKeys = Object.keys(middleSquareNext);
        for (let l = 0; l < middleSquareNextKeys.length; l++) {
          let thisMiddleDirection = middleSquareNextKeys[l];
          if (thisMiddleDirection != thisDirection && thisMiddleDirection != thisOpposite) {
            if (isMatch([id,middleSquareNext[thisMiddleDirection]])) {
              let thisMove = numericSort([middleSquare,middleSquareNext[thisMiddleDirection]]);
              if (moves.length > 0) {
                noDupeNest(moves,thisMove);
              } else {
                moves.push(thisMove);
              }
            }
          }
        }
      }
    }
  }
  if (moves.length > 0) {
    return moves;
  } else {
    return null;
  }
}

function testAllMoves(size) {
  let moves = [];
  for (let i = 0; i < size * size; i++) {
    const squId = setSquareId(i);
    let thisMoves = testMove(squId,size);
    if (thisMoves) {
      for (let j = 0; j < thisMoves.length; j++) {
        let thisMove = thisMoves[j];
        if (moves.length > 0) {
          moves = noDupeNest(moves,thisMove);
        } else {
          moves.push(thisMove);
        }
      }
    }
  }
  if (moves.length > 0) {
    return moves;
  } else {
    return null;
  }
}

function testGameOver(size) {
  const moves = testAllMoves(size);
  if (moves) {
    return false;
  } else {
    return true;
  }
}

function updateGameOver() {
  const grid = getElement('grid');
  const size = grid.size;
  unClickyGrid(size);
  setElement('game over span','GAME OVER','red','white');
}

function updateGameNotOver() {
  setElement('game over span','','saddlebrown','lightsalmon');
}

// --CLICKING--

// turn on clicking

//click event creator for individual squares
function clicky(id) {
  const clickable = getElement(id);
  clickable.isClicky = true;
  clickable.addEventListener('click', handleClick);
}

// adds click functionality to the grid
function clickyGrid() {
  const grid = getElement('grid');
  const size = grid.size;
  const valDict = grid.vals;
  const scoreDict = grid.scores;
  for (let i = 0; i < size*size; i++) {
    const squId = setSquareId(i);
    clicky(squId);
  }
}

function clickyRestart(id) {
  const clickable = getElement(id);
  clickable.addEventListener('click',handleRestart);
}

// turn off clicking

// remove click functionality from the grid
function unClickyGrid(size) {
  for (let i = 0; i < size*size; i++) {
    const squId = setSquareId(i);
    unClicky(squId);
  }
}

// remove click functionality from a square
function unClicky(id) {
  const clickable = getElement(id);
  clickable.removeEventListener('click', handleClick);
}

// handle click behaviour

//click event handler for individual squares
async function handleClick(event) {
  const clicked = event.target;
  const idNo = getNumericId(clicked.id);
  const squId = setSquareId(idNo);
  const grid = getElementParent(squId);
  const size = grid.size;
  const valDict = grid.vals;
  const picDict = grid.pics;
  const scoreDict = grid.scores;
  unClickyGrid(size);
  if (!squareIsClicked(squId)) {
    click(squId);
    const nextSquares = adjacentSquares(squId,size);
    const nextSquaresClicked = squaresAreClicked(nextSquares);
    if (nextSquaresClicked) {
      const swapSquare = nextSquaresClicked[0];
      // now I need to swap squares which is probably its own function
      const swapIn = await squareSwapLag(squId,swapSquare,valDict,picDict,500);
      const firstMatch = squareMatch(squId,size);
      const secondMatch = squareMatch(swapSquare,size);
      if (!firstMatch && !secondMatch) { // no matches is made by this swap
        const swapBack = await squareSwapLag(squId,swapSquare,valDict,picDict,500);
        unClick(squId);
        unClick(swapSquare);
        clickyGrid();
      } else { // matches are made with swap
        unClick(squId);
        unClick(swapSquare);
        const matchRun = await runMatch(size,valDict,picDict,scoreDict);
        clickyGrid();
      }
      clearAllClicked(size);
    } else if (anyOtherSquareIsClicked(squId,size)) {
      const clear = await clearAllClickedLag(size,500);
      clickyGrid();
    } else {
      clickyGrid();
    }
  } else {
    // do stuff here
    unClick(squId);
    clickyGrid();
  }
}

// click event handler for the restart button
function handleRestart(event) {
  resetLvlScore();
  const grid = getElement('grid');
  const size = grid.size;
  const valDict = grid.vals;
  const scoreDict = grid.scores;
  const picDict = grid.pics;
  const newGrid = newBoard(size,valDict,scoreDict,picDict);
  updateGameNotOver();
}

// getting and setting whether squares are clicked

// select a square by clicking
function click(id) {
  const square = getElement(id);
  square.clicked = true;
  setElementBorderColour(id,'white');
}

// unselect a square by clicking
function unClick(id) {
  const square = getElement(id);
  square.clicked = false;
  setElementBorderColour(id,'grey');
}

// tests if a square is clicked
function squareIsClicked(id) {
  const square = getElement(id);
  if (square.clicked) {
    return true;
  } else {
    return false;
  }
}

// tests if certain squares are clicked
// note: refactor to take in a list rather than an object, do the stripping back to keys in handleClick
function squaresAreClicked(squaresObj) {
  const squaresObjKeys = Object.keys(squaresObj);
  const clickedList = [];
  for (let i = 0; i < squaresObjKeys.length; i++) {
    let squareKey = squaresObjKeys[i];
    let squareId = squaresObj[squareKey];
    let clickedSquare = squareIsClicked(squareId);
    if (squareIsClicked(squareId)) {
      clickedList.push(squareId);
    }
  }
  if (clickedList.length > 0) {
    return clickedList;
  } else {
    return null;
  }
}

// tests if any square is clicked
// note: not sure if this will end up being useful
// need an anything-but function really
function anySquareIsClicked(size) {
  const clickedList = [];
  for (let i = 0; i < size * size; i++) {
    let square = getElement(i);
    if (squareIsClicked(i)) {
      clickedList.push(i);
    }
  }
  if (clickedList.length > 0) {
    return clickedList;
  } else {
    return null;
  }
}

// tests to see if any square but this is clicked
function anyOtherSquareIsClicked(id, size) {
  const clickedList = [];
  for (let i = 0; i < size * size; i++) {
    const squId = setSquareId(i);
    if (squId != id) {
      if (squareIsClicked(squId)) {
        clickedList.push(squId);
      }
    }
  }
  if (clickedList.length > 0) {
    return clickedList;
  } else {
    return null;
  }
}

// clear all clicked squares from the grid
function clearAllClicked(size) {
  for (let i = 0; i < size * size; i++) {
    const squId = setSquareId(i);
    unClick(squId);
  }
}

// clear all clicked squares from the grid on a lag
function clearAllClickedLag(size,lag) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(clearAllClicked(size));
    },lag);
  });
}

// square swapping

// swap two squares
// this is where we got done fixing stuff
function squareSwap(id1,id2,valDict,picDict) {
  const grid = getElement("grid");
  const picSize = grid.picSize;
  const idNo1 = getNumericId(id1);
  const idNo2 = getNumericId(id2);
  const val1 = getSquareVal(id1);
  const val2 = getSquareVal(id2);
  const pic1 = picDict[val1];
  const pic2 = picDict[val2];
  const picId1 = setPicId(idNo1);
  const picId2 = setPicId(idNo2);
  const imgTag1 = buildImgTag(pic1,picSize,picId2);
  const imgTag2 = buildImgTag(pic2,picSize,picId1);
  const col1 = valDict[val1];
  const col2 = valDict[val2];
  setElement(id1,imgTag2,col2,col2);
  setElement(id2,imgTag1,col1,col1);
  setSquareVal(id1,val2);
  setSquareVal(id2,val1);
  return true;
}

// swap two squares on a lag
function squareSwapLag(id1,id2,valDict,picDict,lag) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(squareSwap(id1,id2,valDict,picDict));
    },lag);
  });
}

// ---MATCHING---

// find adjacent squares

// return a dictionary of a specified square's adjacent squares
function adjacentSquares(id,size) {
  const adjacent = {};
  const thisAbove = adjacentAbove(id,size);
  if (thisAbove || thisAbove == 0) {
    adjacent['above'] = thisAbove;
    }
  const thisBelow = adjacentBelow(id,size);
  if (thisBelow || thisBelow == 0) {
    adjacent['below'] = thisBelow;
  }
  const thisLeft = adjacentLeft(id,size);
  if (thisLeft || thisLeft == 0) {
    adjacent['left'] = thisLeft;
  }
  const thisRight = adjacentRight(id,size);
  if (thisRight || thisRight == 0) {
    adjacent['right'] = thisRight;
  }
  return adjacent;
}

// finds the next-but-one squares for a specific square
function nextAdjacentSquares(id,size) {
  const nextNextSquares = {};
  const nextSquares = adjacentSquares(id,size);
  const nextSquaresKeys = Object.keys(nextSquares);
  for (let i = 0; i < nextSquaresKeys.length; i++) {
    let thisKey = nextSquaresKeys[i];
    let thisSquare = nextSquares[thisKey];
    let nextNext = adjacentSquares(thisSquare,size);
    let nextNextKeys = Object.keys(nextNext);
    for (let j = 0; j < nextNextKeys.length; j++) {
      let thisNextKey = nextNextKeys[j];
      if (thisNextKey === thisKey) { // console log this should be the square above the above square, or below the below, etc
        nextNextSquares[thisKey] = nextNext[thisKey];
      }
    }
  }
  return nextNextSquares;
}

// find adjacent squares in specific locations

// return the id of the square above
function adjacentAbove(id,size) {
  const idNo = getNumericId(id);
    if (idNo - size < 0) {
    // top row
    return null;
  } else {
    const aboveIdNo = idNo - size;
    return setSquareId(aboveIdNo);
  }
}

// return the id of the square below
function adjacentBelow(id,size) {
  const idNo = getNumericId(id);
  if (idNo + size >= size*size) {
    // bottom row
    return null;
  } else {
    const belowIdNo = idNo + size;
    return setSquareId(belowIdNo);
  }
}

// return the id of the square to the left
function adjacentLeft(id,size) {
  const idNo = getNumericId(id);
  if (idNo == 0 || idNo % size == 0) {
    // start of line
    return null;
  } else {
    const leftIdNo = idNo-1;
    return setSquareId(leftIdNo);
  }
}

// return the id of the square to the right
function adjacentRight(id,size) {
  const idNo = getNumericId(id);
  if ((idNo+1) % size == 0) {
    // end of line
    return null;
  } else {
    const belowIdNo = idNo+1;
    return setSquareId(belowIdNo);
  }
}

/* don't know if I'll actually need these functions, but I'll keep them around just in case

// check if id1 is above id2
function isAbove(id1,id2,size) {
  // okay we want the difference between id2 and id1
  // if 1 is above 2, we expect, say, 1 to be 0 and 2 to be 8
  // so 8 - 0 = 8, or 16 - 8 = 8, but 16 - 24 = -8
  // so the figure we want to work with is id2 - 1d1
  let diff = id2 - id1;
  if (diff >= 0 && diff % size === 0 && id1 != id2) {
    return true;
  } else {
    return false;
  }
}

// check if id1 is below id2
function isBelow(id1,id2,size) {
  // okay this time we want to go the other way, so it's basically the same logic but diff is 1 -2?
  let diff = id1 - id2;
  if (diff >= 0 && diff % size === 0 && id1 != id2) {
    return true;
  } else {
    return false;
  }
}

// check if id1 is left of id2
function isLeft(id1,id2,size) {
  let diff = id2 - id1;
  if (id1 < id2 && diff < size) {
    return true;
  } else {
    return false;
  }
}

// check if id1 is right of id2
function isRight(id1,id2,size) {
  let diff = id1 - id2;
  if (id2 < id1 && diff < size) {
    return true;
  } else {
    return false;
  }
}*/

// testing for matches

// returns whether the previous two (above or left) of any square match - for building a matchless grid
function previousTwoMatch(id,size) {
  const matches = {};
  const above = adjacentAbove(id,size);
  const left = adjacentLeft(id,size);
  let nextAbove;
  let nextLeft;
  if (above) {
    nextAbove = adjacentAbove(above,size);
  } else {
    nextAbove = null;
  }
  if (left) {
    nextLeft = adjacentLeft(left,size);
  } else {
    nextLeft = null;
  }
  if (nextAbove) {
    if (isMatch([above,nextAbove])) {
      matches['above'] = getSquareVal(above);
    }
  }
  if (nextLeft) {
    if (isMatch([left,nextLeft])) {
      matches['left'] = getSquareVal(left);
    }
  }
  const matchesKeys = Object.keys(matches);
  if (matchesKeys.length > 0) {
    return matches;
  } else {
    return null;
  }
}

// does a given square have any two-matches?
function twoSquareMatch(id,size) {
  const nextSquares = adjacentSquares(id,size); // adjacent squares to the square ID passed in
  const nextKeys = Object.keys(nextSquares); // keys of the squares dictionary
  let matched = false; // assume no matches
  const matches = {}; // empty dictionary of potential matches
  for (let i = 0; i < nextKeys.length; i++) {
    let testSquareId = nextSquares[nextKeys[i]];
    let thisMatched = isMatch([id,testSquareId]);
    if (thisMatched) {
      matched = true;
      matches[nextKeys[i]] = testSquareId;
    }
  }
  if (matched) {
    return matches;
  } else {
    return null;
  }
}

// takes a list of square IDs
// do the values of all these squares match?
// if so, returns the list; if not, returns null
function isMatch(a) {
  let isMatched = true;
  const baseValue = getSquareVal(a[0]);
  for (var i = 0; i < a.length; i++) {
    let testValue = getSquareVal(a[i]);
    if (baseValue != testValue) {
      return null;
    }
  }
  return a;
}

//grab all matches for a particular square
function squareMatch(id,size) {
  const matchList = [];
  const horizMatch = horizontalMatch(id,size);
  if (horizMatch && horizMatch.length >= 3) {
    matchList.push(horizMatch);
  }
  const vertMatch = verticalMatch(id,size);
  if (vertMatch && vertMatch.length >= 3) {
    matchList.push(vertMatch);
  }
  if (matchList.length > 0) {
    return matchList;
  } else {
    return null;
  }
}

// tests for a horizontal match
function horizontalMatch(id,size) {
  let match = false;
  const matched = twoSquareMatch(id,size);
  let matches = [];
  let numericMatches = [];
    if (matched) {
    if ('left' in matched && 'right' in matched) {
      match = true;
      // test if there are further matches to the left
      let leftMatch = recursiveMatch('left',id,size);
      // add the entire list of matched squares to matches
      for (let i = 0; i < leftMatch.length; i++) {
        matches.push(leftMatch[i]);
      }
      // test if there are further matches to the right
      const rightMatch = recursiveMatch('right',id,size);
      // add elements not already in matches
      for (let i = 0; i < rightMatch.length; i++) {
        if (!matches.includes(rightMatch[i])) {
          matches.push(rightMatch[i]);
        }
      }
      // order and return
      numericMatches = numericList(matches); // switch to numeric IDs so sorting works
      numericMatches = numericSort(numericMatches);
      matches = squareIdList(numericMatches); // switch back
      return matches
    } else if ('left' in matched) {
      match = true;
      // test if there are further matches to the left
      const leftMatch = recursiveMatch('left',id,size);
      // add the entire list of matched squares to matches
      for (let i = 0; i < leftMatch.length; i++) {
        matches.push(leftMatch[i]);
      }
      // order and return
      numericMatches = numericList(matches); // switch to numeric IDs so sorting works
      numericMatches = numericSort(numericMatches);
      matches = squareIdList(numericMatches); // switch back
      return matches;
    } else if ('right' in matched) {
       match = true;
       // test if there are further matches to the left
       let rightMatch = recursiveMatch('right',id,size);
       // add the entire list of matched squares to matches
       for (let i = 0; i < rightMatch.length; i++) {
         matches.push(rightMatch[i]);
       }
       // order and return
       numericMatches = numericList(matches); // switch to numeric IDs so sorting works
       numericMatches = numericSort(numericMatches);
       matches = squareIdList(numericMatches); // switch back
       return matches;
    } 
  } else {
    return null;
  }
  return null;
}

// tests for a vertical match
function verticalMatch(id,size) {
  let match = false;
  const matched = twoSquareMatch(id,size);
  let matches = [];
  let numericMatches = [];
  if (matched) {
    if ('above' in matched && 'below' in matched) {
      match = true;
      // test if there are further matches above
      var aboveMatch = recursiveMatch('above',id,size);
      // add the entire list of matched squares to matches
      for (let i = 0; i < aboveMatch.length; i++) {
        matches.push(aboveMatch[i]);
      }
      // test if there are further matches below
      let belowMatch = recursiveMatch('below',id,size);
      // add elements not already in matches
      for (let i = 0; i < belowMatch.length; i++) {
        if (!matches.includes(belowMatch[i])) {
          matches.push(belowMatch[i]);
        }
      }
      // order and return
      numericMatches = numericList(matches); // switch to numeric IDs so sorting works
      numericMatches = numericSort(numericMatches);
      matches = squareIdList(numericMatches); // switch back
      return matches
    } else if ('above' in matched) {
      match = true;
      // test if there are further matches above
      let aboveMatch = recursiveMatch('above',id,size);
      // add the entire list of matched squares to matches
      for (let i = 0; i < aboveMatch.length; i++) {
        matches.push(aboveMatch[i]);
      }
      // order and return
      numericMatches = numericList(matches); // switch to numeric IDs so sorting works
      numericMatches = numericSort(numericMatches);
      matches = squareIdList(numericMatches); // switch back
      return matches;
    } else if ('below' in matched) {
       match = true;
       // test if there are further matches below
       let belowMatch = recursiveMatch('below',id,size);
       // add the entire list of matched squares to matches
       for (let i = 0; i < belowMatch.length; i++) {
         matches.push(belowMatch[i]);
       }
       // order and return
       numericMatches = numericList(matches); // switch to numeric IDs so sorting works
       numericMatches = numericSort(numericMatches);
       matches = squareIdList(numericMatches); // switch back
       return matches;
    } 
  } else {
    return null;
  }
  return null;
}

// returns a list of all matches for a certain square in a given direction
function recursiveMatch(direction,id,size,match=false,matches=[]) {
  const matched = twoSquareMatch(id,size);
  if (matched) {
    if (direction in matched) {
      let thisMatch = matched[direction];
      if (!match) {
        // ... we want both id and matched[direction] in matches
        matches.push(id);
        matches.push(thisMatch);
        // and to say we've got a match
        match = true;
        // testing
        // that's it for the first-run case
      } else {
        // if we already knew it was true, we already have id in matches, so we just need:
        matches.push(thisMatch);
      }
      // now here we are at the point where we rerun this function
      recursiveMatch(direction,thisMatch,size,match,matches);
    }
  } else {
    // and if we don't have a match, we return matches, or null if matches is empty
    if (matches.length == 0) {
      return null;
    }
    return matches;
  }
  // no match! return
  if (matches.length == 0) {
    return null;
  }
  return matches;
}

// takes a two-match object and returns a list of matches
function matchTwoToList(id,size) {
  const matchObj = twoSquareMatch(id,size);
  let matchNest = [];
  if (matchObj) {
    const matchKeys = Object.keys(matchObj);
    for (let i = 0; i < matchKeys.length; i++) {
      let matchItem = matchKeys[i];
      let thisMatchList = [id,matchObj[matchItem]];
      let thisNumericMatchList = numericList(thisMatchList); // switch to numeric list so sorting works
      thisNumericMatchList = numericSort(thisNumericMatchList);
      thisMatchList = squareIdList(thisNumericMatchList); // switch back
      matchNest.push(thisMatchList);
    }
  }
  if (matchNest.length > 0) {
    return matchNest;
  } else {
     return null;
  }
}

// checks the entire grid for two-way matches
// doesn't do what it needs to yet
function allTwoSquareMatches(size) {
  let matchNest = []
  for (let i = 0; i < size * size; i++) {
    const matched = matchTwoToList(i,size); // this is a nest
    if (matched) {
      for (let i = 0; i < matched.length; i++) {
        // now we hit the actual lists we want to check
        if (matchNest.length > 0) {
          matchNest = noDupeNest(matchNest,matched[i]);
        } else {
          matchNest.push(matched[i]);
        }
      }
    }
  }
  if (matchNest.length > 0) {
    return matchNest;
  } else {
    return null;
  }
}

// checks the entire grid for (three-way) matches
function gridMatch(size) {
  const allSquares = size*size;
  const matchesList = [];
  const matchesNest = [];
  for (let i = 0; i < allSquares; i++) {
    // for each square in our grid
    const squId = setSquareId(i);
    var matched = squareMatch(squId,size); // grab the list of matches for each square
    if (matched) {
      // add the match itself to the nested list of matches, assuming it's not already there
      for (let j = 0; j < matched.length; j++) {
        // right, so for each match in matched
        var matchList = matched[j];
        // now we have a list to compare against matchesNest, so
        if (matchesNest.length > 0) {
          noDupeNest(matchesNest,matchList);
        } else {
          matchesNest.push(matchList);
        }
        // put our matches in matchesList, assuming they're not there already
        for (let k = 0; k < matchList.length; k++) {
          if (!matchesList.includes(matchList[k])) {
            matchesList.push(matchList[k]);
          }
        }
      }
    }
  }
  if (matchesList.length > 0) {
    return [matchesNest,matchesList];
  }
  return null;
}

// responding to matches

// handles scoring and refilling the grid after a match
async function matchHandler(nest,matches,size,valDict,picDict,scoreDict) {
  const score = assignTotalScore(nest,scoreDict);
  const lScore = Number(getElementVal('level score figure'));
  const tScore = Number(getElementVal('total score figure'));
  const makeEmptyGrid = await emptyGridLag(matches,500);
  updateScore(score,lScore,tScore);
  const makeRefillGrid = await refillGridLag(size,valDict,picDict,500);
  return true;
}

// handles matches on a lag
function matchHandlerLag(nest,matches,size,valDict,picDict,scoreDict,lag) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(matchHandler(nest,matches,size,valDict,picDict,scoreDict));
    },lag);
  });
}

// runs the entire matching process recursively
async function runMatch(size,valDict,picDict,scoreDict) {
  const match = gridMatch(size);
  if (match) {
    const matchNest = match[0];
    const matchList = match[1];
    const handledMatch = await(matchHandlerLag(matchNest,matchList,size,valDict,picDict,scoreDict,500));
    const reRunMatch = await(runMatch(size,valDict,picDict,scoreDict));
  }
  if (testGameOver(size)) {
    updateGameOver();
    return false;
  }
  return true;
}

///--- SCORING ---

// assign scores for a list of matches
function assignScore(matchList,scoresDict) {
  console.log("hit assign score");
  console.log("matchList is", matchList);
  const scoreVal = getSquareVal(matchList[0]); // value of the first square in the list
  let score = scoresDict[scoreVal] * matchList.length;
  if (matchList.length === 4) {
    score = score * 2;
  } else if (matchList.length >= 5) {
    score = score * 3;
  }
  return score;
}

// assign scores for the entire nest of matches
function assignTotalScore(matchNest,scoresDict) {
  console.log("hit assign total score");
  console.log("matchNest is", matchNest);
  let score = 0;
  for (let i = 0; i < matchNest.length; i++) {
    let addScore = assignScore(matchNest[i],scoresDict);
    score = score + addScore;
  }
  return score;
}

// update the scoreboard
function updateScore(score,lvlScore,totalScore) {
  const newLvlScore = score + lvlScore;
  setElementVal('level score figure',newLvlScore.toString());
  const newTotalScore = score + totalScore;
  setElementVal('total score figure',newTotalScore.toString());
}

// reset level score only
function resetLvlScore(score) {
  setElementVal('level score figure','0');
}

//--- GENERAL HELPER FUNCTIONS ---

// playing about with IDs

// returns the numeric part of an ID structured as squ#, pic# or any other three-letter-plus-numeral ID code
function getNumericId(s) {
  return Number(s.slice(3));
}

function setSquareId(i) {
  const squId = i.toString();
  return "squ" + squId;
}

function setPicId(i) {
  const picId = i.toString();
  return "pic" + picId;
}

// building html tags for appending elsewhere

function buildImgTag(source,size,id) {
  const tag = "<img src='" + source + "' height='" + size + "px' width='" + size + "px' id='" + id + "'/>";
  return tag;
}

function buildLinkTag(url,text) {
  const tag = "<a href='" + url + "'>" + text + "</a>"
  return tag;
}

// create and manipulate HTML elements

// creation and identification

// create an element of a given type
function createElement(type,className,id) {
  let element = document.createElement(type);
  element.className = className;
  element.id = id;
  return element;
}

// grab an HTML element - if only to save myself some fucking typing
function getElement(id) {
  let element = document.getElementById(id);
  return element;
}

// grab an element's parent
function getElementParent(id) {
  const element = getElement(id);
  const parent = element.parentNode;
  return parent;
}

// create a div
function createDiv(className,id,h=undefined,w=undefined) {
  let div = createElement('div',className,id);
  if (h) {
    div.style.height = h + 'px';
  }
  if (w) {
    div.style.width = w + 'px';
  }
  return div;
}

function createImage(className,id,src,h=undefined,w=undefined) {
  const img = createElement('img',className,id);
  img.setAttribute('src', src);
  if (h) {
    img.setAttribute('height', h);
  } if (w) {
    img.setAttribute('width', w);
  }
  return img;
}

// makes a button with the class s and the value t
function createButton(s,id,t) {
  const btn = createElement('button',s,id);
  const txt = document.createTextNode(t);
  appendElement(txt,btn);
  return btn;
}

// makes a button with the class 'square' and value s
function makeSquare(s,id,size) {
  const newSquare = createButton('square',id,s);
  newSquare.isClicky = false;
  newSquare.clicked = false;
  newSquare.style.height = size + 'px';
  newSquare.style.width = size + 'px';
  return newSquare;
}

// append one element to another as a child
function appendElement(element,parent=undefined) {
  if (!parent) {
    parent = document.body;
  }
  parent.appendChild(element);
}

// setting and getting multiple properties

// set the value, text colour and background colour of an element
function setElement(id,val,col,bgcol) {
  setElementVal(id,val);
  setElementColours(id,col,bgcol);
}

// empty a square
function squareVoid(id) {
  setElementColours(id,'white','white');
  setSquareVal(id,'-');
}

// setting and getting the text

// set the value (text) of an element
function setElementVal(id,val) {
  const element = getElement(id);
  element.innerHTML = val;
}

// get the value (text) of an element
function getElementVal(id) {
  const elementVal = getElement(id).innerHTML;
  return elementVal;
}

// setting and getting colours

// set the (text) colour of an element
function setElementColour(id,col) {
  const element = getElement(id);
  element.style.color = col;
}

// set the background colour of an element
function setElementBGColour(id,col) {
  const element = getElement(id);
  element.style.backgroundColor = col;
}

// set the text and background colours of an element
function setElementColours(id,col,bgcol) {
  setElementColour(id,col);
  setElementBGColour(id,bgcol);
}

// set the border colour of an element
function setElementBorderColour(id,col) {
  const element = getElement(id);
  element.style.borderColor = col;
}

// matchable squares

// generate random value and associated colour and picture for a square
function generateRandomSquare(valDict,picDict) {
  const val = randomValue(Object.keys(valDict));
  const col = valDict[val];
  const pic = picDict[val];
  return [val, col, pic];
}

// get the val property of a square
function getSquareVal(id) {
  const square = getElement(id);
  return square.val;
}

function setSquareVal(id,val) {
  const square = getElement(id);
  square.val = val;
}

// generate random value and associated colour for a square - with restrictions
function generateRestrictedSquare(valDict,picDict,rList) {
  let valList = Object.keys(valDict);
  for (let i = 0; i < rList.length; i++) {
    valList = removeListItem(valList,rList[i]);
  }
  const val = randomValue(valList);
  const col = valDict[val];
  const pic = picDict[val];
  return [val, col, pic];
}

// positioning

// set an element's position
function positionElement(id,left,top) {
  const element = getElement(id);
  element.style.position = 'absolute';
  element.style.left = left + 'px';
  element.style.top = top + 'px';
}

// list operations

// change all list items to numeric ID
function numericList(l) {
  for (let i = 0; i < l.length; i++) {
    l[i] = getNumericId(l[i]);
  }
  return l;
}

function squareIdList(l) {
  for (let i = 0; i < l.length; i++) {
    l[i] = setSquareId(l[i]);
  }
  return l;
}

// sort by the alphabet
function alphaSort(x) {
  const y = x.sort();
  return y;
}

// sort by numeric value
function numericSort(x) {
  const y = x.sort(function(a,b) {return a - b});
  return y;
}

// sort by numeric value in reverse
function numericReverseSort(x) {
  const y = x.sort(function(a,b) {return b - a});
  return y;
}

// generates a random entry of an array
function randomValue(a) {
  const val = a[Math.floor(Math.random() * a.length)];
  return val;
}

// test if two lists are equal
function equalList(a,b) {
  let isMatch = true;
  if (a.length === b.length) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] != b[i]) {
        isMatch = false;
      }
    }
  } else {
    isMatch = false;
  }
  return isMatch;
}

// add a list to a nest if it's not already there
function noDupeNest(nest,a) {
  let isMatch = false;
  for (let i = 0; i < nest.length; i++) {
    if (equalList(nest[i],a)) {
      isMatch = true;
    }
  }
  if (!isMatch) {
    nest.push(a);
  }
  return nest;
}

// return the opposite direction
function opposite(direction) {
  if (direction === 'above') {
    return 'below';
  } else if (direction === 'below') {
    return 'above';
  } else if (direction === 'left') {
    return 'right';
  } else if (direction === 'right') {
    return 'left';
  } else {
    return null;
  }
}

// return a list less an item
function removeListItem(list,item) {
  const newList = list.filter(function(x) {
    return x !== item;
  });
  return newList;
}

// returns a list of the values of an object
function objectVals(object) {
  const objectKeys = Object.keys(object);
  const objectVals = objectKeys.map(x => object[x]);
  return objectVals;
}