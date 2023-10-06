const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
]

function renderElements (arr) {
  const ul = document.querySelector("ul");
  
  ul.innerHTML = '';

  for(let i = 0; i < arr.length; i++){
  const element = arr[i]
  ul.appendChild(createTaskItem(element))
  }

  const addTaskButton = document.querySelector(".form__button--add-task");

  addTaskButton.addEventListener('click', function(event) {

    const title = document.getElementById("input_title").value;
    const type = document.querySelector(".form__input--priority").value;

    const newTask = {
      title: title,
      type: type
    };

    tasks.push(newTask)  
    
    renderElements(tasks)


    event.preventDefault();

})
}

function createTaskItem(object, index) {
  const liList = document.createElement("li");
  const divList = document.createElement("div");
  const spanList = document.createElement("span");
  const pList = document.createElement("p");
  const buttonList = document.createElement("button");

  liList.classList.add("task__item");
  divList.classList.add("task-info__container");
  spanList.classList.add("task-type");
  buttonList.classList.add("task__button--remove-task");

  if (object.type === "Urgente") {
    spanList.classList.add("span-urgent");
  } else if (object.type === "Importante") {
    spanList.classList.add("span-important");
  } else if (object.type === "Normal") {
    spanList.classList.add("span-normal");
  }

  pList.innerText = object.title;

  
  buttonList.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  buttonList.classList.add("task__button--remove-task");

  
  buttonList.addEventListener('click', function () {
    const index = tasks.indexOf(object);
    if (index !== -1) {
      tasks.splice(index, 1);
      renderElements(tasks);
    }
  });

  divList.append(spanList, pList);
  liList.append(divList, buttonList);

  return liList;
}

renderElements(tasks)