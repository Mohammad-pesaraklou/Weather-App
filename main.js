let form = document.querySelector(".top-banner form");
let input = document.querySelector(".top-banner input");
let msg = document.querySelector(".top-banner span");
let list = document.querySelector(".cities");

 let apikey = "c6f14680ec83052a5d463c53bd665877";


 form.addEventListener("submit", event => {
    event.preventDefault()
    let inputVal = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apikey}&units=metric `
    fetch(url)

        .then(response => response.json())
        .then(data => {
            let {main,sys,weather,name} = data;
            let icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`
            let li = document.createElement("li")
            li.classList.add("city")
            const markup = `
             <h2 class='city-name' data-name=${name},${sys.country}>
                 <span>${name}</span>
                 <span>${sys.country}</span>
             </h2>
             <div class='city-temp'>${Math.round(main.temp)}</div>
             <figure>
                 <img class='city-icon' src='${icon}' alt ='city' >
                 <figurecaption>${weather[0]["description"]}</figurecaption>
             </figure>
             `;

             li.innerHTML = markup;
             list.appendChild(li)
             msg.innerText = "";
        })
        .catch(() =>{
            msg.innerText = `PLEASE ENTER THE VALID CITY`
        })
        input.value = "";
    })