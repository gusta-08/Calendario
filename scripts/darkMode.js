const html = document.querySelector('html')
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)


const initialColors = {
  bodyColor: getStyle(html, '--body-color'),
  headerColor: getStyle(html, '--header-color'),
  headerButton: getStyle(html, '--header-button'),
  colorWeekdays: getStyle(html, '--color-weekdays'),
  currentDay: getStyle(html, '--current-day'),
  eventColor: getStyle(html, '--event-color'),
  eventColor: getStyle(html, '--event-color'),
  colorDay: getStyle(html, '--color-day'),
  modalEvent: getStyle(html, '--modal-event')
  
}

const holidays = [
  { date: "01-01", name: "Confraternização Universal" },
  { date: "21-04", name: "Tiradentes" },
  { date: "01-05", name: "Dia do Trabalho" },
  { date: "07-09", name: "Independência do Brasil" },
  { date: "12-10", name: "Nossa Senhora Aparecida" },
  { date: "02-11", name: "Finados" },
  { date: "15-11", name: "Proclamação da República" },
  { date: "25-12", name: "Natal" },
];

const darkMode = {
  bodyColor:'#282a36',
  headerColor: '#ff5555',
  headerButton:'#bd93f9',
  colorWeekdays: '#6272a4' ,
  currentDay: '#f8f8f2',
  eventColor: '#6272a4',
  colorDay: '#44475a',
  modalEvent: '#6272a4'
  
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => {
        html.style.setProperty(transformKey(key), colors[key]) 
        console.log(transformKey(key), colors[key])
      }
    )
    console.log(colors)
}



checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})



