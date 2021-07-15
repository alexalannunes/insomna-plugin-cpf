function cpf(formatted) {
  let cpf_ = 'xxxxxxxxxxx'.replace(/x/g, function(x) {
    return Math.random()*9|0
  })

  if (formatted) {
    cpf_ = cpf_.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }

  return cpf_;

}
module.exports = cpf