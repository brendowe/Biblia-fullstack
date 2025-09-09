export const validateBookId = (paramName, maxValue) => {
  return (req, res, next) => {
    const value = req.params[paramName];

    const numValue = Number(value);

    const errorNumValue = validateNum(numValue);

    if (errorNumValue) {
      const error = new Error(errorNumValue);
      error.status = 400;
      return next(error);
    }

    const errorMaxValue = validateMaxValue(numValue, maxValue);

    if (errorMaxValue) {
         const error = new Error(errorMaxValue);
      error.status = 400;
      return next(error);
    }

    req.params[paramName] = numValue;
    next();
  };
};

function validateNum(numValue) {
  if (isNaN(numValue))
    return 'Dados inválidos, insira apenas números para a consulta';
  return null;
}

function validateMaxValue(numValue, maxValue) {
  if (numValue > maxValue) return `Número não pode ser maior que ${maxValue}`;
  return null;
}
