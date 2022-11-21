class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const enhancedObject = {
      ...rawObject,
      valueOf: () => rawObject.age,
    }
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    return enhancedObject;
  }

  getEnhancedObject2(rawObject) {
    const enhancedObject = {
      ...rawObject,
      toString() {
        return `[name="${rawObject.name}",age=${rawObject.age}]`;
      }
    }
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    return enhancedObject;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    const enhancedObject = {
      name: rawObject.name,
      age: rawObject.age,

      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name=${JSON.stringify(this.name)},age=${JSON.stringify(this.age)}]`,
          number: this.age
        }
        return types[coercionType] || types.string
      }

    }
    return enhancedObject;
  }
}

module.exports = ObjectMethodsService;
