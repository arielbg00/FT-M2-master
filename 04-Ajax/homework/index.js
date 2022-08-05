let URL = "http://localhost:5000/amigos";

let showFriendsList = function() {
  $("#lista").empty();
  $.get(`${URL}`, function(friends) { // friends = [{ id: 1, name: "Toni" }, {}, {}, etc]
    console.log(friends);
    friends.forEach(e => {
      // let li = document.createElement("li"); // ==> <li> </li>
      // li.id = e.id; // ==> <li id="1"> </li>
      // li.innerText = e.name; // ==> <li id="1">Toni</li>
      // let list = getElementById("lista"); // ==> <ul id="lista"> </ul>
      // list.appendChild(li); // ==> <ul id="lista"> <li id="1">Toni</li> </ul>
      $("#lista").append(`<li id="${e.id}">${e.name} <button id="${e.id}" onclick="deleteFriend(${e.id})">X</button></li>`);
    })
  })
}

$("#boton").click(showFriendsList);

let findFriend = function() {
  let id = $("#input").val();

  if (id) {
    // get (http://lacalhost:5000/amigos/id)
    $.get(`${URL}/${id}`, function(friend) { // friend = {id: 1, name: "Toni"}
      console.log(friend);
      $("#amigo").text(`El nombre es: ${friend.name}`); // <span id="amigo">El nombre es: Toni</span>
      $("#input").val("");
    })
  } else {
    $("#amigo").text("Escribir un numero");
  }
}

$("#search").click(findFriend);

let deleteFriend = function(idCruz) {
  let id;
  if (typeof idCruz === "number") {
    id = idCruz;
  } else {
    id = $("#inputDelete").val();
  }
  let friend;

  if (id) {
    // $.ajax({
    //   url: `${URL}/${id}`,
    //   type: "GET",
    //   success: function(fr) {
    //     friend = fr;
    //   }
    // }) // <===> $.get(...);
    $.get(`${URL}/${id}`, function(fr) {
      friend = fr;
      console.log(fr);
    });
    $.ajax({
      url: `${URL}/${id}`,
      type: "DELETE",
      success: function() {
        $("#success").text(`Your friend ${friend.name} was delete`);
      }
    })
    $("#inputDelete").val("");
    showFriendsList();
  } else {
    $("#success").text("Error");
  }
};

$("#delete").click(deleteFriend);

/* GET POST PUT DELETE
4 Metodos Principales de HTTP

GET ==> Solicitar Informacion
POST ==> Agregar un nuevo Dato
PUT ==> Modificar Informacion o un Dato Existente
DELETE ==> Eliminar Informacion o un Dato Existente

$.ajax({ url: url_api, type: metodo_http, success: callback }) */