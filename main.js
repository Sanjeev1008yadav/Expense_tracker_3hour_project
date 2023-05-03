

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput= document.querySelector('#email');
const categoryInput= document.querySelector('#category');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit' , onSubmit);
function onSubmit(e){
    e.preventDefault();
    

 if(nameInput.value === '' || emailInput.value === '') {
   
    }else{
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value} :${categoryInput.value}`));
      
        

        userList.appendChild(li);
        
        
        
        const obj = {
            
            nameInput:nameInput.value,
            emailInput:emailInput.value,
            categoryInput:categoryInput.value,
            
            

            
        }
        localStorage.setItem( obj.emailInput , JSON.stringify(obj));
      
      
      
        
            
        nameInput.value = '';
        emailInput.value = '';
        categoryInput.value = '';
    
    const deleteButton = document.createElement('input')
        deleteButton.type = "Button"
        deleteButton.value = 'Delete'
        li.appendChild(deleteButton)
        
        deleteButton.onclick = () => {
            localStorage.removeItem(obj.emailInput)
            userList.removeChild(li);

           
           
    
       
       
        }
    
        const editButton = document.createElement('input')
        editButton.type = "Button"
        editButton.value = 'edit'
        li.appendChild(editButton)        
        editButton.onclick = () => {
            localStorage.removeItem(obj.emailInput)
            userList.removeChild(li);
            document.getElementById('name').value = obj.nameInput
            document.getElementById('email').value = obj.emailInput


            document.getElementById('category').value = obj.categoryInput

        }

        

            

        
        }


}
