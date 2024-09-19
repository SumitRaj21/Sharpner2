let form=document.getElementById('form');
form.addEventListener('submit', function(event){
    event.preventDefault();
        let stname=document.querySelector('#stname').value;
        let mob=document.querySelector('#mob').value;
        let add=document.querySelector('#add').value;
        let myobj={
            Student_name:stname,
            Mobile:mob,
            Address:add
        }
        axios
    .post(
      "https://crudcrud.com/api/932252a17e0e45389abe55b5ecd2aae0/StudentManger",
      myobj
    )
    .then((response) => displayUserOnScreen(response.data))
    .catch((error) => console.log(error));

    document.getElementById("stname").value = "";
    document.getElementById("mob").value = "";
    document.getElementById("add").value ="";
});


window.addEventListener("DOMContentLoaded",()=>{
    axios.get("https://crudcrud.com/api/932252a17e0e45389abe55b5ecd2aae0/StudentManger")
    .then((response)=>{
        for(let i=0; i<response.data.length; i++){
            displayUserOnScreen(response.data[i]);
        }
    })
})

function displayUserOnScreen(stDetails) {
    const parentNode=document.getElementById('listofStudents');
    const childHTML=`<li id=${stDetails._id}>${stDetails.Student_name}-${stDetails.Mobile}-${stDetails.Address}
                    <button onclick=deleteStudent('${stDetails._id}')>Delete</button>
                    <button onclick=editStudent('${stDetails._id}','${stDetails.Student_name}','${stDetails.Mobile}','${stDetails.Address}')>Edit</button>
                    </li>`

    parentNode.innerHTML=parentNode.innerHTML+childHTML;

  }

  function deleteStudent(StudentId){
      axios.delete(`https://crudcrud.com/api/932252a17e0e45389abe55b5ecd2aae0/StudentManger/${StudentId}`)
      .then((response)=>{
        removeStudent(StudentId);
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  function removeStudent(StudentId){
    const parentNode=document.getElementById('listofStudents');
    const childNodetoDelete=document.getElementById(StudentId);
    if(childNodetoDelete){
        parentNode.removeChild(childNodetoDelete);
    }
  }

  function editStudent(StudentId,stname,mob,add){
    let myobj={
        Student_name:stname,
        Mobile:mob,
        Address:add
    }
    axios
.post(
  "https://crudcrud.com/api/932252a17e0e45389abe55b5ecd2aae0/StudentManger",
  myobj
)
.then((response) => displayUserOnScreen(response.data))
.catch((error) => console.log(error));
deleteStudent(StudentId);

}
