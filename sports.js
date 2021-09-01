const searchButton=()=>
{
    const inputField=document.getElementById('input-field');
    const textArea=inputField.value;
    inputField.value='';
    const url=`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${textArea}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTeam(data));
}
const displayTeam= data=>
{
    console.log(data);
    const datas=data.teams;
    console.log(datas);
    const parentClass=document.getElementById('parent-class');
    parentClass.textContent = '';

    
    datas.forEach((team) =>
    {
    
    const div=document.createElement('div');
    div.classList.add("col");
    div.innerHTML=`
    <div class="card h-70 ">
       <img src="${team.strTeamBadge}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${team.strTeam}</h5>
           <p class="card-text"></p>
        </div>
   </div>
    `;
   parentClass.append(div);
  })
   
}