
let i=6; //last element
var id=i;
//---------------------------------------------------
//index
function index(){
for(i=1;i<=id;i++)
{
   document.getElementById("in"+i).innerText=i;
}
};
document.getElementById("up").onclick=function(){
    alert("anything found????");
    document.getElementById("upload_form").style.visibility="visible";
};

index();

//---------------------------------------------------
//upload process / create & display new item 
document.getElementById("u_s").onclick=function(){
up_create_box();
up_create_index();
up_create_img();
up_create_button();
document.getElementById("upload_form").style.visibility="hidden";
// up_info();
dt();
};
function up_create_box(){
const e=document.createElement("div");
// e.className="items";
//    e.id="7";
id++;
e.setAttribute("class","items")
e.setAttribute("id",id);


document.getElementById("items").appendChild(e);

// console.log(e);
};
function up_create_img(){

let i=document.createElement("img");
// var up_img=function(event){
//     i=document.getElementById("up_img");
//     i.src=URL.createObjectURL(event.target.files[0]);
// };
let im=document.getElementById("up_img").value;
 i.setAttribute("src",im);
document.getElementById(id).appendChild(i);

};
function up_create_button(){
    let b=document.createElement("button");
    b.setAttribute("class","claim");
    bi="c"+id;
    console.log(bi);
    b.setAttribute("id",bi);
    b.setAttribute("onclick","remove_item()");
    b.innerText="claim?";
    document.getElementById(id).appendChild(b);

};
function up_create_index(){
    let t=document.createElement("p");
    t.innerText=id;
    document.getElementById(id).appendChild(t);
};
//---------------------------------------------------
//display item info
function up_info(){
    let in_dis=document.createElement("div");
    in_dis.setAttribute("class","info");
    let loc=document.createElement("p");
    loc.setAttribute("id",id +"_loc");
    let up_dt=document.createElement("p");
    up_dt.setAttribute("id",id +"uploader_details");


    document.getElementById(id).appendChild(in_dis);
    document.getElementById(id+"_loc").appendChild(loc);
    document.getElementById(id+"_uploader_details").appendChild(up_dt);

    let f_loc=document.getElementById("f_loc").value;
    f_loc="found at-" +loc;
    let c_loc=document.getElementById("c_loc");
    c_loc="current item is at" +c_loc;
    let up_d=document.getElementsByClassName("uploader_details").value;
    document.getElementById(id+"_loc").innerText=f_loc+c_loc;
    
};

//---------------------------------------------------

//claim process / remove item 
document.getElementById("rmv").onclick=function(){
    // alert("sure to remove!!!!");
  let r=prompt("sure want to remove!!!! \n-enter id no.")
  document.getElementById(r).remove();
};

// document.getElementsByClassName("claim").onclick=function(){
//     var c=this.getElementById();
//     console.log(c);
// };
$(".claim").click(function(){
    let i;
     alert("claim????");
     let r=$(this).attr("id");
    console.log(r);
     r=r.slice(1);
     console.log(r);
    document.getElementById(r).remove();
    for(i=r+1;i<=id;i++)
    {
       document.getElementById("in"+i).innerText=i-1;
       document.getElementById("in"+i).setAttribute("id",i-1);
    } 
//    let p=document.getElementById(r).parentNode();
//    console.log(p);
//   p.remove();
      
});

function remove_item(){
    alert("claim????");
    let r=$(this).attr("id");
    console.log(r);
    r=r.slice(1);
    console.log(r);
    document.getElementById(r).remove();
    index();
};
//---------------------------------------------------
//close button
$(".c_btn").click(function(){
$(".form").css("visibility","hidden");
});


// if(typeof jQuery=='undefined')
// {
// alert("jquery not installed");
// }
// else{
//     alert("jquery installed")
// }


// demo details
function dt(){
    let d=document.createElement("details");
    d.setAttribute("id",id+"det")
    let s=document.createElement("summary");
    d.setAttribute("id",id+"sum");
    d.innerText="details";
    let p=document.createElement("p");
    p.setAttribute("id",id+"p");
    p.innerText="";

    document.getElementById(id).appendChild(d);
    d.appendChild(s);
    d.appendChild(p);
};