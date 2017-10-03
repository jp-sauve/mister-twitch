function timeElapsed( startTime, ...finishTime ) {
  let now = new Date(),
    then = new Date( startTime ),
    msElapsed = now - then,
    seconds = ( msElapsed / 1000 ).toFixed( 1 ),
    minutes = ( msElapsed / ( 1000 * 60 ) ).toFixed( 1 ),
    hours = ( msElapsed / ( 1000 * 60 * 60 ) ).toFixed( 1 ),
    days = ( msElapsed / ( 1000 * 60 * 60 * 24 ) ).toFixed( 1 );
  switch ( true ) {
    case ( seconds < 60 ):
      return seconds + " seconds";
    case ( minutes < 60 ):
      return minutes + " minutes";
    case ( hours < 24 ):
      return hours + " hours";
    default:
      return days + " days";
  }
}

export {
  timeElapsed
};
