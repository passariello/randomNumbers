/*!
 * dprandnums <https://github.com/passariello/randomNumbers>
 *
 * Copyright (c) 2021, Dario Passariello.
 * Licensed under the Apache-2.0 License.
 */

/***********************************************************************/

// CREATE AS GLOBAL FUNCTION
  // if you use js, react or similar you not need redux

  const
    generate = window.generate = {},
    shuffle = window.shuffle = {};

  // ES6 / ECMAScript 2015
  // Idea from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  shuffle = (array) => {
    if(!array) return null;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // MY FUNCTION

  generate = ( total ) => {

    // CHECK
    if( isNaN( total ) ) return null;
    if( total < 0 ) total = 0;
    if( total > 500000 ) total = 500000;

    // INFORMATION
    console.clear();
    console.group( `%c dprandnums :%c',"color:orange`,"" );
      console.debug( "%cCreated by:%c Dario Passariello", "color:gray", "" );
      console.debug( "%cYou can use generate( 10000 ) here in the console to generate your random array. Also the result is cached into local storage to avoid repeating effort from client computer.", "color:gray", "" );
      console.debug( "%c-------------------------------%c", "color:gray", "" );
    console.groupEnd();

    let startTime = performance.now(); // start performance measurement

    // CACHE FLAT RESULT IN LOCAL STORAGE
    if( !localStorage.getItem( '_' + total ) ){
      let array = Array.from( Array( total ).keys() );
      localStorage.setItem( '_' + total , JSON.stringify( array ) );
      array = undefined;
    }

    // HANDLE THE SHUFFLE
    let final = shuffle( JSON.parse(localStorage.getItem( '_' + total ) ) );

    let endTime = performance.now(); // stop performance measurement

    // CONSOLE THE RESULT
    console.group( '%cResult:%c',"color:orange","" );
      console.log( final );
      console.debug( "%c-------------------------------%c", "color:gray", "" );
      console.debug( total + `%c in ${(endTime-startTime).toFixed(0)} ms... it's ok for you?`, "color:gray", "");
    console.groupEnd();
  };

  // GENERATE 500,000
  // generate( 500000 );
