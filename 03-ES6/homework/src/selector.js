var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body; // ==> <body>...</body>
    // document.body.tagName.toLowerCase() ==> "body"
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) {
    resultSet.push(startEl);
  }
  // document.body.children = [...]
  for (let i = 0; i < startEl.children.length; i++) {
    let elements = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
    resultSet = [...resultSet, ...elements];
    // resultSet = resultSet.concat(elements);
  }
  
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") {
    return "id";
  } else if (selector[0] ===".") {
    return "class";
  } else if (selector.split(".").length > 1) {
    return "tag.class";
  } else {
    return "tag";
  }
  // selector.split(".") ==> [tag, class] > 1
  // [t, c] = selector.split("."); ==> destructuring
  // t = tag
  // c = class
};
// selectorTypeMatcher("#algo"); ==> id
// selectorTypeMatcher(".algo"); ==> class
// selectorTypeMatcher("div"); ==> tag
// selectorTypeMatcher("div.algo"); ==> tag.class

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); // ==> id / class / tag / tag.class
  var matchFunction;
  if (selectorType === "id") {
    // <div id="pagetitle"></div>
    // el.id ==> pagetitle
    matchFunction = function(element) {
      return "#" + element.id === selector; // return element.id === selector.slice(1);
    }
  } else if (selectorType === "class") {
    // <div class="clase1 clase2 clase3"></div>
    matchFunction = function(element) {
      let classes = element.classList; // [clase1, clase2, clase3]
      // classes.forEach(ele => { if (`.${ele}` === selector) return true; });
      // return false;
      for (let i = 0; i < classes.length; i++) {
        if ("." + classes[i] === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    // selector ==> "p.small"
    // element ==> <p class="small"></p>
    matchFunction = function(element) {
      let [tagFound, classFound] = selector.split("."); // ["p", "small"]
      return matchFunctionMaker(tagFound)(element) && matchFunctionMaker(`.${classFound}`)(element);
      // let tag = matchFunctionMaker(tagFound);
      // tag(element); ==> true : false
    }
  } else if (selectorType === "tag") {
    // element ==> <div class="algo">HOLA</div>
    // element.tagName ==> "DIV"
    // element.tagName.toLowerCase() ==> "div"
    matchFunction = function(element) {
      return element.tagName.toLowerCase() === selector;
    }
    /* matchFunction = function(e) {
      si e es igual al selector ("li")
    } */
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector); // ==> var selectorMatchFunc = function() {};
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
