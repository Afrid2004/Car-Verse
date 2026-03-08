const createSlug = (text) => {
  return text.toLowerCase().trim().replace(/\s+/g, "-");
};

export default createSlug;
