const form = document.querySelector('form');
const input = document.querySelector('#task-box');
const task_list = document.querySelector('#task-list');
var your_task;
var buttonsAll;
var p;
var y;
var done= document.querySelector(".undone");
var undone= document.querySelector(".done");



form.addEventListener('submit', function(e){
   e.preventDefault();
   your_task = input.value;
  

   if(!your_task){
      alert("Please Enter Your Task First");
   }
   else {
    
      addNew()
   }
  
});


function addNew(){
   const task = document.createElement('div');
task.id = "task";
task_list.append(task);


 p = document.createElement('input');
p.value = your_task;
p.setAttribute('readonly', 'readonly');
p.id = "main-task";
task.append(p);





// const buttons = document.createElement('div');
// buttons.id = "buttons";
// task.append(buttons);


const edit = document.createElement('button');

edit.innerHTML = "Edit";
edit.id = "edit";
edit.title = "Clcik here to edit";



const deletes = document.createElement('button');
deletes.innerHTML= "Delete"
deletes.id = "delete";
deletes.title = "Click here to delete";


const done = document.createElement('button');
done.innerHTML = "Done";
done.className = "done";
done.id = "done";
done.title = "Clcik here if you finished"



task.append(edit, deletes, done);


deletes.addEventListener('click', function(e){
  deleteAction(e);
})


edit.addEventListener('click', function(e){
   editAction(e);
})


done.addEventListener('click', function(e){
     doneAction(e);
})


your_task= "";
reCalculate();

}


// button Actions

deleteAction=(e)=> {
    const x= e.target.parentNode;
    x.remove();
    reCalculate();
  
   
}

editAction=(e)=> {

   const x = e.target.parentNode;
   const t = x.querySelector('input');
   const b = x.querySelector('#edit');


   if(b.innerHTML=="Edit"){
     
      t.removeAttribute("readonly");
      b.innerHTML="Save";
   }
   else if(b.innerHTML=="Save"){
      t.setAttribute('readonly', 'readonly');
      b.innerHTML="Edit";
   }


   
console.log(t);

   
}

function doneAction(e){
   const x = e.target.parentNode;
   const t = x.querySelector('input');
   const b = x.querySelector('.done');


   if(b.innerHTML=="Done"){
     
     t.classList.add('done-text');
      
      b.innerHTML = "Undone";
      b.id = "undone";
      reCalculate();
   }
   else if(b.innerHTML=="Undone"){
      b.innerHTML = "Done";
      t.classList.remove('done-text');
      b.id = "done";
      reCalculate();
   }







   p.innerHTML = `<del>${your_task}</del>`
}



reCalculate = ()=> {
   var x = document.querySelectorAll('#done');
   var y = document.querySelectorAll('#undone');
   var xx = document.querySelector('#task-list');
   var xxx = xx.firstElementChild;
   console.log(xxx);

   if(x.length==0 && y.length==0){
      done.innerHTML = ``;
      undone.innerHTML = ``;
      console.log(`holo`);
   }
    else {
      done.innerHTML = `Done: ${y.length}`;
      undone.innerHTML = `Pending: ${x.length}`;
   
      console.log(`Done= ${x.length} and undone= ${y.length}`);
    }



  
}