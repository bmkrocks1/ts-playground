(() => {

  function findLocation(coordinates: [number, number]) {
    //
  }

  const place = [41.40338, 2.17403];

  /*
    The problem:
    Argument of type 'number[]' is not assignable to parameter of type '[number, number]'.
  */
  findLocation(place);

})();