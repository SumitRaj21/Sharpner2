const unord=document.querySelector(".Unordered");
let form=document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
        let candy=document.querySelector('#candy').value;
        let des=document.querySelector('#des').value;
        let price=document.querySelector('#price').value;
        let quant=document.querySelector('#qnty').value;
        let myobj={
            candy:candy,
            description:des,
            price:price,
            quantity:quant
        }
        axios
    .post(
      "https://crudcrud.com/api/932252a17e0e45389abe55b5ecd2aae0/candyShop",
      myobj
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

    document.getElementById("candy").value = "";
    document.getElementById("des").value = "";
    document.getElementById("price").value ="";
    document.getElementById("qnty").value ="";
});


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

window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/932252a17e0e45389abe55b5ecd2aae0/candyShop")
    .then((response)=>{
        for(let i=0; i<response.data.length; i++){
            displayUserOnScreen(response.data[i]);
        }
    })
})

function displayUserOnScreen(candyDetails) {
    const userItem = document.createElement("li");
    userItem.appendChild(
      document.createTextNode(
        `${candyDetails.candy} - ${candyDetails.description} - ${candyDetails.price}- ${candyDetails.quantity}`
      )
    );


    const editBtn1 = document.createElement("button");
    editBtn1.appendChild(document.createTextNode("Buy 1"));
    userItem.appendChild(editBtn1);

    const editBtn2 = document.createElement("button");
    editBtn2.appendChild(document.createTextNode("Buy 2"));
    userItem.appendChild(editBtn2);

    const editBtn3 = document.createElement("button");
    editBtn3.appendChild(document.createTextNode("Buy 3"));
    userItem.appendChild(editBtn3);
  
    const userList = document.querySelector("ul");
    userList.appendChild(userItem);
  
    editBtn1.addEventListener("click", function (candyDetails) {
        axios.put(`https://crudcrud.com/api/932252a17e0e45389abe55b5ecd2aae0/${candyDetails._id}`,{
            candy:candyDetails.candy,
            description:candyDetails.des,
            price:candyDetails.price,
            quantity:candyDetails.quantity-1,
        })
        .then((response) => displayUserOnScreen(response.data))
        .catch((error) => console.log(error));
    });
   

  }
