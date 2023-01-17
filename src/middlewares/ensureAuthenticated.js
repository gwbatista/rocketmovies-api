const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const authConfig = require("../configs/auth");

function ensureAuthenticated(request, response, next) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    throw new AppError("JWT Token não informado", 401);
  }

  const [, token] = authHeader.split(" "); //esta separando o que tiver espaço (" ") e jogando nas variaveis do [].

  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret); //sub : user_id está pegando o valor do sub e transformando pra essa nova variavel

    request.user = {
      id: Number(user_id), //transforma o user_id em numero
    };

    return next();
  } catch {
    throw new AppError("JWT Token inválido", 401);
  }
}

module.exports = ensureAuthenticated;