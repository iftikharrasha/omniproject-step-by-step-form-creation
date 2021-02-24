//step_one_next event handler
const next_button_one = document.getElementById('next-btn-one');
next_button_one.addEventListener("click", function(){
    const step_one_area = document.getElementById('step-one');
    step_one_area.style.display = "none";
    const step_two_area = document.getElementById("step-two");
    step_two_area.style.display = "block";
})

//step_two_prev event handler
const prev_button_two = document.getElementById('prev-btn-two');
prev_button_two.addEventListener("click", function(){
    const step_two_area = document.getElementById("step-one");
    step_two_area.style.display = "block";
    const step_one_area = document.getElementById('step-two');
    step_one_area.style.display = "none";
})

//step_two_next event handler
const next_button_two = document.getElementById('next-btn-two');
next_button_two.addEventListener("click", function(){
    const step_two_area = document.getElementById('step-two');
    step_two_area.style.display = "none";
    const step_three_area = document.getElementById("step-three");
    step_three_area.style.display = "block";
})

//step_two_prev event handler
const prev_button_three = document.getElementById('prev-btn-three');
prev_button_three.addEventListener("click", function(){
    const step_two_area = document.getElementById('step-two');
    step_two_area.style.display = "block";
    const step_three_area = document.getElementById("step-three");
    step_three_area.style.display = "none";
})

