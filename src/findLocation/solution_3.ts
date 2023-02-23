(() => {

  function findLocation(coordinates: [number, number]) {
    //
  }
  
  /*
    Solution 3:
    
    Use the built-in `Parameters<Type>` utility type.
  */
  const place: Parameters<typeof findLocation>[0] = [41.40338, 2.17403];
  
  findLocation(place);

})();