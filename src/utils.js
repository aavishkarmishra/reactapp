export function getActivatedItem(url) {
  let arr = url.split("/");
  arr.shift();
  return arr;
}

export function getTitle(url, obj) {
  let arr = url.split("/");
  let result = "Home";
  obj.forEach((element) => {
    if (element.hash == arr[1]) {
      if (arr.length == 2) {
        result = element.title;
      }
      if (arr.length == 3) {
        element.childrens.forEach((child) => {
          if (child.hash == arr[2]) {
            result = child.title;
          }
        });
      }
    }
  });
  return result;
}
