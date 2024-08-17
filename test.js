const home = document.getElementById("main-menu");
const defaultInfo = document.querySelector("#AllInfo");

home.addEventListener("click", ()=>{
  defaultInfo.style.display = "block";
  aboutMeInfo.style.display = "none";
  mySkillsInfo.style.display = "none";
  myProjectsInfo.style.display = "none";
  change()
  sideBar.classList.toggle("transitionSideBar");
})

const option1 = document.querySelector("#about-me");
const aboutMeInfo = document.querySelector("#About-Me");

option1.addEventListener("click", ()=>{
  aboutMeInfo.style.display = "block";
  defaultInfo.style.display = "none";
  mySkillsInfo.style.display = "none";
  myProjectsInfo.style.display = "none";
  change()
  sideBar.classList.toggle("transitionSideBar");
})

const option2 = document.querySelector("#my-skills");
const mySkillsInfo = document.querySelector("#My-Skills");

option2.addEventListener("click", ()=>{
  mySkillsInfo.style.display = "block";
  aboutMeInfo.style.display = "none";
  defaultInfo.style.display = "none";
  myProjectsInfo.style.display = "none";
  change();
  sideBar.classList.toggle("transitionSideBar");
})

const option3 = document.querySelector("#my-projects");
const myProjectsInfo = document.querySelector("#My-Projects");

option3.addEventListener("click", ()=>{
  myProjectsInfo.style.display = "block";
  mySkillsInfo.style.display = "none";
  aboutMeInfo.style.display = "none";
  defaultInfo.style.display = "none";
  change();
  sideBar.classList.toggle("transitionSideBar");
})

const sideBar = document.getElementById("sidebar");
const optionBar = document.getElementById("option-bar");

function change() {
  document.getElementById("option-bar").classList.toggle("change");
}

optionBar.addEventListener("click", ()=>{
  sideBar.classList.toggle("transitionSideBar");
});
