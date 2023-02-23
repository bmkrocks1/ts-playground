(() => {

  function findLocation(coordinates: [number, number]) {
    //
  }
  
  /*
    Solution 2:
    
    Use `infer` to extract the type of the argument of `findLocation` function.
  */
  type Coordinates = typeof findLocation extends (block: infer P) => any ? P : never;
  const place: Coordinates = [41.40338, 2.17403];
  
  findLocation(place);

})();