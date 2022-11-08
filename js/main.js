
const hour = document.getElementById('clock-hour')
const  minutes = document.getElementById('clock-minutes')
 const seconds = document.getElementById('clock-second')
// for  DATE card
 const dateday = document.getElementById('day')
 const datemonth = document.getElementById('month')
 const dateyear = document.getElementById('year')
 

const clock = () =>{
    let time = new Date()

    let hh = time.getHours() * 30
    let mm = time.getMinutes() * 6
    let ss = time.getSeconds() * 6
        
    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s

 
// for date 


const current_date = ()=>{
    let date = new Date()

 
let day = date.getDay() + 4
let  month= date.getMonth() + 1
let year= date.getFullYear()

dateday.innerHTML = day + "/"
datemonth.innerHTML= month + "/"
dateyear.innerHTML = year
} 
setInterval(current_date, 1000)
