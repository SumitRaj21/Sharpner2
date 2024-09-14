const unord=document.querySelector(".Unordered");
let form=document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
        let amnt=document.querySelector('#amount').value;
        let des=document.querySelector('#des').value;
        let cate=document.querySelector('#category').value;
        let myobj={
            amount:amnt,
            description:des,
            category:cate
        }
        localStorage.setItem(des,JSON.stringify(myobj));
        const data=JSON.parse(localStorage.getItem(des));
        const newLi=document.createElement('li');
        const newLiText=document.createTextNode(data.amount+"-"+data.description+"-"+data.category);
        newLi.appendChild(newLiText);
        unord.appendChild(newLi);
        newLi.className='expense';
        const deleteBtn=document.createElement('button');
        const deleteBtnText=document.createTextNode('Delete');
        deleteBtn.appendChild(deleteBtnText);
        deleteBtn.className='delete-btn';
        newLi.appendChild(deleteBtn);
        const editBtn=document.createElement('button');
        const editBtnText=document.createTextNode('Edit');
        editBtn.appendChild(editBtnText);
        editBtn.className='edit-btn';
        newLi.appendChild(editBtn);
        unord.appendChild(newLi);
})
unord.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const expenseToDelete=event.target.parentElement;
        unord.removeChild(expenseToDelete);
    };
    if(event.target.classList.contains('edit-btn')){
        const expenseToEdit=event.target.parentElement;
        unord.removeChild(expenseToEdit);
    };
})