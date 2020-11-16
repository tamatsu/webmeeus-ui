const appDiv = document.getElementById('app')
const app1Div = document.getElementById('app1')
const scaleInput = document.getElementById('scale')

let _model = {
  coords: null,
  scaleLevel: null
}

// Init
init()
function init() {
  const endpoint = 'https://tamaz.pythonanywhere.com/'
  
  scaleInput.addEventListener('input', e => gotScale(e.target.value))
  
  fetch(endpoint)
  .then(r => r.json())
  .then(gotCoords)
}

// Update
function gotCoords({
  jp_begin_lon,
  jp_end_lon,
  longitude
}) {
  _model.coords = {
    jp_begin_lon,
    jp_end_lon,
    longitude    
  }

  const range = toRad(jp_end_lon - jp_begin_lon)
  const scale = 300 / (range * 1.15)
  
  _model.scaleLevel = Math.floor(Math.pow(scale, 1 / 2.5))
  view(_model)
}

function gotScale(v) {
  _model.scaleLevel = v
  
  view(_model)
}

// View
function view(model) {
  const color = {
    equinox: 'hsl(0, 100%, 50%)',
    seasons: 'hsl(120, 50%, 50%)',
    sekki: 'hsl(240, 50%, 65%)',
    kou: 'hsl(0, 0%, 80%)',
    day: 'hsl(60, 100%, 30%)'
  }
  
  const graduations = [
    // Day
    {
      degrees: model.coords.jp_begin_lon,
      color: color.day
    },
    {
      degrees: model.coords.jp_end_lon,
      color: color.day
    },
    // equinox
    {
      degrees: 0,
      color: color.equinox
    },
    {
      degrees: 90,
      color: color.equinox
    },
    {
      degrees: 180,
      color: color.equinox
    },
    {
      degrees: 270,
      color: color.equinox
    },
    // 4 Seasons
    {
      degrees: 315,
      color: color.seasons
    },
    {
      degrees: 45,
      color: color.seasons
    },
    {
      degrees: 135,
      color: color.seasons
    },
    {
      degrees: 225,
      color: color.seasons
    },
    // 24 Sekki
    {
      degrees: 330,
      color: color.sekki
    },
    {
      degrees: 345,
      color: color.sekki
    },
    {
      degrees: 15,
      color: color.sekki
    },
    {
      degrees: 30,
      color: color.sekki
    },
    {
      degrees: 60,
      color: color.sekki
    },
    {
      degrees: 75,
      color: color.sekki
    },
    {
      degrees: 105,
      color: color.sekki
    },
    {
      degrees: 120,
      color: color.sekki
    },
    {
      degrees: 150,
      color: color.sekki
    },
    {
      degrees: 165,
      color: color.sekki
    },
    {
      degrees: 195,
      color: color.sekki
    },
    {
      degrees: 210,
      color: color.sekki
    },
    {
      degrees: 240,
      color: color.sekki
    },
    {
      degrees: 255,
      color: color.sekki
    },
    {
      degrees: 285,
      color: color.sekki
    },
    {
      degrees: 300,
      color: color.sekki
    },
    // 72 Kou
    {
      degrees: 320,
      color: color.kou
    },
    {
      degrees: 325,
      color: color.kou
    },
    {
      degrees: 335,
      color: color.kou
    },
    {
      degrees: 340,
      color: color.kou
    },
    {
      degrees: 350,
      color: color.kou
    },
    {
      degrees: 355,
      color: color.kou
    },
    {
      degrees: 5,
      color: color.kou
    },
    {
      degrees: 10,
      color: color.kou
    },
    {
      degrees: 20,
      color: color.kou
    },
    {
      degrees: 25,
      color: color.kou
    },
    {
      degrees: 35,
      color: color.kou
    },
    {
      degrees: 40,
      color: color.kou
    },
    {
      degrees: 50,
      color: color.kou
    },
    {
      degrees: 55,
      color: color.kou
    },
    {
      degrees: 65,
      color: color.kou
    },
    {
      degrees: 70,
      color: color.kou
    },
    {
      degrees: 80,
      color: color.kou
    },
    {
      degrees: 85,
      color: color.kou
    },
    {
      degrees: 95,
      color: color.kou
    },
    {
      degrees: 100,
      color: color.kou
    },
    {
      degrees: 110,
      color: color.kou
    },
    {
      degrees: 115,
      color: color.kou
    },
    {
      degrees: 125,
      color: color.kou
    },
    {
      degrees: 130,
      color: color.kou
    },
    {
      degrees: 140,
      color: color.kou
    },
    {
      degrees: 145,
      color: color.kou
    },
    {
      degrees: 155,
      color: color.kou
    },
    {
      degrees: 160,
      color: color.kou
    },
    {
      degrees: 170,
      color: color.kou
    },
    {
      degrees: 175,
      color: color.kou
    },
    {
      degrees: 185,
      color: color.kou
    },
    {
      degrees: 190,
      color: color.kou
    },
    {
      degrees: 200,
      color: color.kou
    },
    {
      degrees: 205,
      color: color.kou
    },
    {
      degrees: 215,
      color: color.kou
    },
    {
      degrees: 220,
      color: color.kou
    },
    {
      degrees: 230,
      color: color.kou
    },
    {
      degrees: 235,
      color: color.kou
    },
    {
      degrees: 245,
      color: color.kou
    },
    {
      degrees: 250,
      color: color.kou
    },
    {
      degrees: 260,
      color: color.kou
    },
    {
      degrees: 265,
      color: color.kou
    },
    {
      degrees: 275,
      color: color.kou
    },
    {
      degrees: 280,
      color: color.kou
    },
    {
      degrees: 290,
      color: color.kou
    },
    {
      degrees: 295,
      color: color.kou
    },
    {
      degrees: 305,
      color: color.kou
    },
    {
      degrees: 310,
      color: color.kou
    }
  ]
  
  appDiv.innerHTML = ''
  appDiv.appendChild(drawSVG({
    point: model.coords.longitude,
    graduations,
    scale: Math.pow(model.scaleLevel, 2.5)
  }))
  
  app1Div.innerHTML = ''
  app1Div.appendChild(drawSVG({
    point: model.coords.longitude,
    graduations,
    scale: Math.pow(model.scaleLevel * 2, 2.5)
  }))
}

// Draw SVG
function drawSVG({
  point,
  graduations = [],
  viewBox = 300,
  scale
}) {
  const {x: mx, y: my} = toUnitCircle(point)

  const toViewBox = ({x, y}) => ({
    bx: viewBox / 2 + (x - mx) * scale,
    by: viewBox / 2 - (y - my) * scale
  })
  
    
  const { bx: centerBx, by: centerBy } = toViewBox({x: 0, y: 0})
  const { bx: vBx, by: vBy } = toViewBox(toUnitCircle(point))
  
  const circle = svg().circle
  const line = svg().line
  const text = svg().text
  const g = svg().g
  
  const plotGraduation = graduation => {
    const deg = graduation.degrees
    const { bx, by } = toViewBox(toUnitCircle(deg))
    
    return g([],
      [ line(
          [ attribute('x1', centerBx)
          , attribute('y1', centerBy)
          , attribute('x2', centerBx + (bx - centerBx) * 2)
          , attribute('y2', centerBy + (by - centerBy) * 2)
          , attribute('stroke', graduation.color)
          , attribute('stroke-width', 1)
          ])
      , circle(
          [ attribute('cx', bx)
          , attribute('cy', by)
          , attribute('r', 1)
          ])
      , text(
          [ attribute('x', bx)
          , attribute('y', by + 14)
          , attribute('font-size', '0.75rem')
          , attribute('fill', 'hsl(0, 0%, 60%)')
          ], `${deg}°`)
      ])
  }
  
  const svgEl = svg().svg(
    [ attribute('viewBox', `0 0 ${viewBox} ${viewBox}`)
    , attribute('style', 'width: 100%')
    ],
    [ circle(
        [ attribute('cx', centerBx)
        , attribute('cy', centerBy)
        , attribute('r', scale)
        , attribute('stroke', 'black')
        , attribute('stroke-width', 1)
        , attribute('fill', 'transparent')
        ])
    // point
    , circle(
        [ attribute('cx', vBx)
        , attribute('cy', vBy)
        , attribute('r', 3)
        , attribute('stroke', 'black')
        , attribute('stroke-width', 1)
        , attribute('fill', 'transparent')
        ])
    , text(
        [ attribute('x', vBx)
        , attribute('y', vBy - 4)
        , attribute('font-size', '0.75rem')
        ], `${point}°`)
    , g([], graduations.map(plotGraduation))
    ])
  
  return svgEl
}

function toRad(deg) {
  return deg * Math.PI / 180  
}

function toUnitCircle(deg) {
  return {
    x: Math.cos(toRad(deg)),
    y: Math.sin(toRad(deg))
  }
}



// HTML
function attribute(name, value) {
  return e => {
    e.setAttribute(name, value)
  }
}

function onClick(f) {
  return e => {
    e.addEventListener('click', f)
  }
}

function onFocusout(f) {
  return e => {
    e.addEventListener('focusout', f)
  }
}

function onSubmit(f) {
  return e => {
    e.addEventListener('submit', e => {
      e.preventDefault()
      f()
    })
  }
}

function onTouchstart(f) {
  return e => {
    e.addEventListener('touchstart', f)
  }
}

function onChange(f) {
  return e => {
    e.addEventListener('change', f)
  }
}

function onInput(f) {
  return e => {
    e.addEventListener('input', f)
  }
}

function onTouchmove(f) {
  return e => {
    e.addEventListener('touchmove', f)
  }
}


function div(attributes, children) {
  const name = 'div'

  const e = document.createElement(name)
  attributes.forEach(f => f(e))
  children.forEach(c => e.appendChild(c))
  
  return e
}


function a(attributes, children) {
  const name = 'a'

  const e = document.createElement(name)
  attributes.forEach(f => f(e))
  children.forEach(c => e.appendChild(c))
  
  return e
}

function button(attributes, children) {
  const name = 'button'

  const e = document.createElement(name)
  attributes.forEach(f => f(e))
  children.forEach(c => e.appendChild(c))
  
  return e
}

function form(attributes, children) {
  const name = 'form'

  const e = document.createElement(name)
  attributes.forEach(f => f(e))
  children.forEach(c => e.appendChild(c))
  
  return e
}

function input(attributes, value) {
  const name = 'input'

  const e = document.createElement(name)
  attributes.forEach(f => f(e))
  
  e.value = value

  return e
}

function img(attributes) {
  const name = 'img'

  const e = document.createElement(name)
  attributes.forEach(f => f(e))

  return e
}

function text(str) {
  return document.createTextNode(str)
}

function svg() {
  return {
    svg(attributes, children) {
      const name = 'svg'

      const e = document.createElementNS('http://www.w3.org/2000/svg', name)
      attributes.forEach(f => f(e))
      children.forEach(c => e.appendChild(c))

      return e
    },
    
    g(attributes, children) {
      const name = 'g'

      const e = document.createElementNS('http://www.w3.org/2000/svg', name)
      attributes.forEach(f => f(e))
      children.forEach(c => e.appendChild(c))

      return e
    },
    
    circle(attributes) {
      const name = 'circle'

      const e = document.createElementNS('http://www.w3.org/2000/svg', name)
      attributes.forEach(f => f(e))

      return e
    },
    
    line(attributes) {
      const name = 'line'

      const e = document.createElementNS('http://www.w3.org/2000/svg', name)
      attributes.forEach(f => f(e))

      return e
    },
    
    text(attributes, str) {
      const name = 'text'

      const e = document.createElementNS('http://www.w3.org/2000/svg', name)
      attributes.forEach(f => f(e))
      
      e.appendChild(document.createTextNode(str))
      
      return e      
    }
  }
}
