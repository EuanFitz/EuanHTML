

//Year for the footer
const fYear = document.getElementById("footerYear");
const d = new Date();
fYear.innerText = d.getFullYear();
console.log(d);
//Learning eventListeners
const goodDayButton = document.getElementById("btn-alert");

goodDayButton.addEventListener('mouseenter', () => 
    goodDayButton.innerText = 'Come On!');
goodDayButton.addEventListener('mouseleave', () => 
    goodDayButton.innerText = 'Click me!');

goodDayButton.addEventListener('click', () => alert("I'm proud of you!"));
console.log('Button Clicked')

//Greeting element
const greetTime = document.getElementById("greet");
    if (d.getHours() <= 11) {
        greetTime.innerText = `Good Morning!`;
        greetTime.style.backgroundColor = '#00B4D8';
    }else if (d.getHours() < 17){ 
        greetTime.innerText = `Good Afternoon!`;
        greetTime.style.backgroundColor = null;
    }else {
        greetTime.innerText = `Good Evening`;
        greetTime.style.backgroundColor = '#030027';
        greetTime.style.color = 'white';
    }
    //Trying to understand for loop??
 const loopList = document.getElementById('numbers');
for (let i = 0; i<12; i++)  {
    const li = document.createElement('li');
    //When i = even the list number = odd 
    // i devided by 2 has a remainder of 0 then the number is even but the list line is odd. 
    li.textContent = i % 2 === 0 ? 'Odd' : 'Even';
    loopList.appendChild(li);
}