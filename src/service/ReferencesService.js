class ReferencesService {
  getCounterCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    return object;
  }

  getCounterWithoutCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    return {...object};
  }

  
  // @TIP: if you want to do the extra sub-challenge, uncomment and implement the following function:
  getCounterWithoutDeepCopyingReferences(object) {
    // TODO: assing object to a new variable and return it.
    const item = JSON.parse(JSON.stringify(object));
    return item;
  }
  
}

module.exports = ReferencesService;
