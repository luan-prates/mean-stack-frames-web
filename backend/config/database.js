const mongoose = require('mongoose');
module.exports = mongoose.connect('mongodb://localhost/db_finance');

mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O valor '{VALUE}' é menor que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O valor '{VALUE}' é maior que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "'{VALUE} não é válido para o atributo '{PATH}'.";