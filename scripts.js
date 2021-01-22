function ToDoList() {
    let section = document.createElement('section');
    document.body.appendChild(section);

    let container = document.createElement('div');
    container.classList.add('container');
    section.appendChild(container);
    
    let title = document.createElement('p');
    title.innerHTML = 'Список задач';
    container.appendChild(title);

    let div = document.createElement('div');
    div.classList.add('block');
    container.appendChild(div);
    
    let input = document.createElement('input');
    div.appendChild(input);
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'text');
    input.setAttribute('placeholder', 'Добавить в список');

    let ul = document.createElement('ul');
    ul.classList.add('list');
    container.appendChild(ul);

    let btn = document.createElement('div');
    btn.classList.add('button');
    container.appendChild(btn);

    let btnSave = document.createElement('button');
    btnSave.innerHTML = 'Добавить';
    btnSave.classList.add('save');
    btn.appendChild(btnSave);

    let btnReset = document.createElement('button');
    btnReset.innerHTML = 'Очистить';
    btnReset.classList.add('reset');
    btn.appendChild(btnReset);

    input.addEventListener('keyup', function(event) { 
        p = document.createElement('p');
        p.append(event.target.value); 
    });
    

    function Save() {

        let li = document.createElement('li');
        ul.appendChild(li);

        let checkbox = document.createElement('input');
        checkbox.classList.add('checkbox');
        checkbox.setAttribute('type', 'checkbox');

        let pencil = document.createElement('i');
        pencil.classList.add('fa');
        pencil.classList.add('fa-pencil');

        let trash = document.createElement('i');
        trash.classList.add('fa');
        trash.classList.add('fa-trash-o');

        if (input.value === '') {
            alert('Введите задачу.');
            li.remove();
        } else {
            li.append(checkbox, p, pencil, trash);
            input.value = '';
        }

        
        let arrCheckbox = document.querySelectorAll('.list input');

        arrCheckbox.forEach(function(element) {
            checkbox.onchange = function() {
                if (element.checked) {
                    li.classList.add('checked'); 
                } else {
                    li.classList.remove('checked'); 
                }
            };
        });

        btnReset.addEventListener('click', () => {
            li.remove();
        });

        pencil.addEventListener('click', function() {
            edit = prompt('Редактировать список:');

            if (edit) {
                li.innerHTML = '';
                editP = document.createElement('p');
                editP.append(edit);
                li.append(checkbox, editP, pencil, trash);
            } 
        });

        trash.addEventListener('click', function() {
            trash.parentElement.remove();
        });
        
    };

    input.addEventListener('keyup', (event) => {
        if (event.keyCode == 13) {
            Save();
        }
    });

    btnSave.addEventListener('click', Save);

};

window.addEventListener('load', ToDoList);