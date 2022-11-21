class StatementsService {
  getReturnBasedOnStatement(condition1, condition2) {
    // TODO: use condition stations && or || in order to return the expected value
    const conditionResult = condition1 || condition2;
    return conditionResult;
  }

  getReturnBasedOnStatement2(condition1, condition2) {
    // TODO: use condition stations && or || in order to return the expected value
    const conditionResult = condition1 && condition2;
    return conditionResult;
  }

  getReturnBasedOnStatement3(condition1, condition2, condition3) {
    // TODO: use condition stations && or || in order to return the expected value (chaining all conditions)
    const conditionResult = (condition1 && condition2) || condition3; 
    return conditionResult;
  }

  getReturnBasedOnStatement4(condition1, condition2, condition3) {
    // TODO: use condition stations && or || in order to return the expected value (chaining all conditions)
    const conditionalResult = (condition1 || condition2) && condition3; 
    return conditionalResult;
  }
}

module.exports = StatementsService;
