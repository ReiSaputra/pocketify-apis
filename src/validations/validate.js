const validate = (schema, values) => {
  const result = schema.validate(values, { abortEarly: false });
  if (result.error) {
    const error = new Error(result.error.message);
    error.status = 400;
    throw error;
  }
  return result.value;
};

export { validate };
