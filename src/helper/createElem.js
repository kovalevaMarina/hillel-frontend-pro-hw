const createElement = (tag, nameClass, parent, txt = undefined) => {
  const elem = document.createElement(tag);
  elem.className = nameClass;
  if (txt) elem.innerHTML = txt;
  parent.append(elem);
  return elem;
};

export { createElement };
