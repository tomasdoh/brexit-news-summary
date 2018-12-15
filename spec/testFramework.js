//Test framework
export function describe (description, functn) {
  console.log(description);
  functn();
};

export function it (message, functn) {
  describe(" " + message, functn);
};

export function expect (expectation) {
    return {
      toEqual: (assertion) => {
        if (assertion === expectation) {
        console.log('Passed 👍', assertion);
      } else {
        console.log('Failure 🤔', new Error().stack);
        console.log('Failure 🤔', ' got: ', assertion);
        console.log('Failure 🤔', ' expected: ', expectation);
        }
      }
    }
  };
