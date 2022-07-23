let progressBars = document.getElementsByClassName("circular-progress-bar")
let progressedCircles = document.getElementsByClassName("progressed")
let progressedPercentages = document.getElementsByClassName("progressed-percentage")
let progressIntervals = []
let animationCounters = []
for(let i=0; i<progressBars.length; i++){
    let circumference = progressedCircles[i].getTotalLength()
    animationCounters[i] = 0
    progressIntervals[i] = setInterval(()=>{
        animationCounters[i]++
        progressedCircles[i].style.strokeDashoffset = circumference - (animationCounters[i] / 100) * circumference
        progressedPercentages[i].innerHTML = animationCounters[i] + "%"
        if(animationCounters[i] >= progressBars[i].dataset.percentage){
            clearInterval(progressIntervals[i])
        }
    }, 2000/progressBars[i].dataset.percentage)
}