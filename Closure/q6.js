/*Create a function that registers handlers and remembers them using closure.*/

function createEmitter() {
  let str = "";
  return {
    subscribe: function (str, func) {},
    emit: function () {
      console.log("clicked");
    },
  };
}

const emitter = createEmitter();
emitter.subscribe("click", () => "clicked");
emitter.emit("click");
