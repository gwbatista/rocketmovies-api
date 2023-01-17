const path = require("path"); // serviço do node para caminho de pastas
const fs = require("fs"); //serviço do node para manipular arquivos
const uploadConfig = require("../configs/upload");

class DiskStorage {
  async saveFile(file) {
    await fs.promises.rename( //rename = renomear ou mover o arquivo
      path.resolve(uploadConfig.TMP_FOLDER, file), //onde esta o arquivo
      path.resolve(uploadConfig.UPLOADS_FOLDER, file) // para onde vai o arquivo
    );

    return file;
  }

  async deleteFile(file) {
    const filePath = path.resolve(uploadConfig.UPLOADS_FOLDER, file); //path.resolve = resolver uma sequencia de segmentos de caminho para um caminho absoluto

    try {
      await fs.promises.stat(filePath); //stat = retorna status do arquivo
    } catch {
      return;
    }

    await fs.promisses.unlink(filePath); //unlink = remove um arquivo
  }
}

module.exports = DiskStorage;