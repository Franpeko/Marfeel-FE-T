"use strict"

// Carousel 

const buttonsWrapper = document.querySelector(".map");
const slides = document.querySelector(".inner");

buttonsWrapper.addEventListener("click", e => {
  if (e.target.nodeName === "BUTTON") {
    Array.from(buttonsWrapper.children).forEach(item =>
      item.classList.remove("active")
    );
    if (e.target.classList.contains("first")) {
      slides.style.transform = "translateX(-0%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains("second")) {
      slides.style.transform = "translateX(-33.33333333333333%)";
      e.target.classList.add("active");
    } else if (e.target.classList.contains('third')){
      slides.style.transform = "translatex(-66.6666666667%)";
      e.target.classList.add("active");
    }
  }
});





// Reusable view components

function render (){
	for (const data of globaldata) {
		console.log(data)
		draw({labels: ["", ""], datasets: data.datasets }, data.id, data.text);

	}
}


 function  draw (data, element, text)
{
	const config = {
		type: "doughnut",
		data: data,
		options: {
			responsive: true,
			plugins: {
				legend: {
					position: "bottom",
				},
				title: {
					display: true,
					text: text,
			
				},
			},
		},
	};
	
	var myChart = new Chart(document.getElementById(element), config);


}

render();

module.exports = {draw};