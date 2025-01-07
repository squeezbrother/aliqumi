function* numbers$2(values, valueof) {
  for (let value of values) {
    yield valueof(value);
  }
}
