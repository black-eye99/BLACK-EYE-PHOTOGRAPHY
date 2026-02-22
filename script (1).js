document.addEventListener("DOMContentLoaded",loadImages);
function uploadImage(){
const input=document.getElementById("imageInput");
const category=document.getElementById("category").value;
const reader=new FileReader();
reader.onload=function(e){
let images=JSON.parse(localStorage.getItem(category))||[];
images.push(e.target.result);
localStorage.setItem(category,JSON.stringify(images));
loadImages();};
reader.readAsDataURL(input.files[0]);}
function loadImages(){
["natureGallery"].forEach(cat=>{
const gallery=document.getElementById(cat);
gallery.innerHTML="";
let images=JSON.parse(localStorage.getItem(cat))||[];
images.forEach(src=>{
const img=document.createElement("img");
img.src=src;
img.onclick=()=>openModal(src);
gallery.appendChild(img);});});}
function openModal(src){
document.getElementById("imageModal").style.display="block";
document.getElementById("modalImg").src=src;}
function closeModal(){
document.getElementById("imageModal").style.display="none";}