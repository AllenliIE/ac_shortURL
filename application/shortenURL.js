function shortenURL() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const textGroup = lowerCaseLetters + upperCaseLetters + numbers

  let collection = ''
  //Setting 5 strings for shortURL
  for (let i = 0; i < 5; i++) {
    collection += textGroup[Math.floor(Math.random() * textGroup.length)]
  }
  return collection
}

module.exports = shortenURL

