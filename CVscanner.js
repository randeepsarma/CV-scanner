let data=[{
name:"Rahul Malik",
age:19,
language:"Java",
framework:"Springboot",
profilepic:`https://randomuser.me/api/portraits/men/76.jpg`,
},{
name:"Sandy Martin",
age:21,
language:"JS",
framework:"React",
profilepic:"https://randomuser.me/api/portraits/men/73.jpg",
},{
name:"Maddy Eskaben",
age:20,
language:"C++",
framework:"QT",
profilepic:"https://randomuser.me/api/portraits/women/73.jpg",
},{
  name:"Matha McKensey",
  age:26,
  language:"PHP",
  framework:"Laravel",
  profilepic:"https://randomuser.me/api/portraits/women/74.jpg",
  }
];
function iterator(profiles){
let i=0;
return {
next:function(){
if(i<profiles.length)  
  return {value:profiles[i++], done:false};
else 
  return {done:true};
}
};
}
let tmp=iterator(data);
funct(tmp.next());

let swipe=document.getElementById("submit");
function funct(obj){
  let html=`
<table>
 <tr>   
      <th colspan="2">Profile</th>
 </tr><br>
 <tr>
      <th colspan="2">
      <img src="${obj.value.profilepic}" alt="dp">
      </th>
 </tr><br>
    <tr>
      <td>Name:</td>
      <td>${obj.value.name}</td>
   
    </tr><br>
    <tr>
      <td>Age:</td>
      <td>${obj.value.age}</td>
    
    </tr><br>
    <tr>
    <td>Language:</td>
    <td>${obj.value.language}</td>
  
  </tr><br>
  <tr>
      <td>Framework:</td>
      <td>${obj.value.framework}</td>
    
    </tr><br>
  </table>
`;
document.getElementById("real").innerHTML=html;
}
swipe.addEventListener('click',function(e){
  e.preventDefault();
  let obj=tmp.next();
  if(obj.done===false){

funct(obj);



  }else{
    window.location.reload();
  }
});
 
/*console.log(swipe);
 */


