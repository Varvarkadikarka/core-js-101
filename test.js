function getCommonDirectoryPath(pathes) {
  const a = pathes.map((el) => el.split(/(\/)/)).flat();
  const b = a
    .filter((el) => el !== '/')
    .filter((number, index, numbers) => {
      return numbers.indexOf(number) !== index
    })
    .join('/');
  return b.length > 1 ? `${b}/` : b;
}

console.log(getCommonDirectoryPath(['/web/assets/style.css,/web/scripts/app.js,home/setting.conf']));