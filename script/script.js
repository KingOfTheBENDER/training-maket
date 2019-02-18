var modalFirst=document.querySelector(".modal-portfolio--first");
var linkFirst=document.querySelector(".portfolio__item--one");

var modalTwo=document.querySelector(".modal-portfolio--two");
var linkTwo=document.querySelector(".portfolio__item--two");

var modalThree=document.querySelector(".modal-portfolio--three");
var linkThree=document.querySelector(".portfolio__item--three");

linkFirst.addEventListener("click",function(o) {
    o.preventDefault();
    modalTwo.classList.remove("modal-show");
    modalThree.classList.remove("modal-show");
    modalFirst.classList.add("modal-show");
});

modalFirst.addEventListener("click",function(o) {
    o.preventDefault();
    modalFirst.classList.remove("modal-show");
});


linkTwo.addEventListener("click",function(o) {
    o.preventDefault();
    modalFirst.classList.remove("modal-show");
    modalThree.classList.remove("modal-show");
    modalTwo.classList.add("modal-show");

});

modalTwo.addEventListener("click",function(o) {
    o.preventDefault();
    modalTwo.classList.remove("modal-show");
});

linkThree.addEventListener("click",function(o) {
    o.preventDefault();
    modalTwo.classList.remove("modal-show");
    modalFirst.classList.remove("modal-show");
    modalThree.classList.add("modal-show");

});

modalThree.addEventListener("click",function(o) {
    o.preventDefault();
    modalThree.classList.remove("modal-show");
});