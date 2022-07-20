let progressBars = document.getElementsByClassName("circle-progress")
let circles = document.getElementsByClassName("progress-circle")
let loadings = document.getElementsByClassName("loading")
for(let i=0; i<progressBars.length; i++){
    let circumference = circles[i].getTotalLength()
    circles[i].style.strokeDashoffset = circumference - (progressBars[i].dataset.percentage / 100) * circumference
    loadings[i].innerHTML = progressBars[i].dataset.percentage + "%"
}
