document.getElementById('loadTodoList').addEventListener('click',async function(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
        const todos = await response.json();
        const todoTableBody = document.getElementById('todoTableBody');

       
        todoTableBody.innerHTML='';  // clear previouse data
        let completedCount = 0;

        todos.forEach(todo => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.innerText = todo.id;
            row.appendChild(idCell);
            
            const titleCell = document.createElement('td');
            titleCell.innerText =todo.title;
            row.appendChild(titleCell);

            const completedCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.disabled = todo.completed;
            checkbox.checked = todo.completed;
           
            if(!todo.completed){
                checkbox.addEventListener('change',function(){
                    if(checkbox.checked){
                        completedCount++;
                    }
                    else{
                        completedCount--;
                    }
                    // If user checks 5 checkboxes are completed
                    if(completedCount===5) {
                        new Promise(resolve =>{
                            setTimeout(()=>{
                                resolve('Congrats, you have completed 5 tasks!');
                            },500);
                        })
                        .then(message=>{
                            alert(message);
                            document.getElementById('message').innerText= message;
                        })
                    }
                });
            }

            completedCell.appendChild(checkbox);
            row.appendChild(completedCell);
            todoTableBody.appendChild(row);
        });
    }
    catch (error){
        console.error('Error fetching todo list:', error);
    }

    document.getElementById('logoutButton').addEventListener('click',function(){
        window.location.href = 'index.html';
    })
});
   
