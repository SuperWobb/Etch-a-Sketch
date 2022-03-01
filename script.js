const gridSize = document.querySelector('#gridSize');
const gridContainer = document.querySelector('.gridContainer');
const cor = document.querySelector('#cor');
const corFundo = document.querySelector('#corFundo');
const preencher = document.querySelector('#preencher');
const borracha = document.querySelector('#borracha');
const arcoIris = document.querySelector('#arcoIris');
const escurecer = document.querySelector('#escurecer');
const clarear = document.querySelector('#clarear');
const grade = document.querySelector('.grade');
const limparTudo = document.querySelector('#limparTudo');
const botoes = document.querySelectorAll('.toggles');
const valorGrid = document.querySelectorAll('#valorGrid');
const actualGrid = document.createElement('div');
let desenharToggle = false;
//borracha, arco iris, escurecer, clarear
let toggles = [false, false, false, false];

function randomColor()
{
    let color = Math.floor(Math.random()*16777215).toString(16);
    let rColor = "#" + color;
    return rColor;
}

gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize.value}, 1fr); grid-template-rows:  repeat(${gridSize.value}, 1fr);`
for(let i=0;i<gridSize.value*gridSize.value;i++)
{
    criaDiv(gridContainer);
}
let gridDiv = document.querySelectorAll('.gridDiv');
for(let i=0;i<gridDiv.length;++i)
{
    gridDiv[i].addEventListener('mousedown', () =>
    {   
        desenharToggle = true;
        if(toggles[0] === true)//borracha
        {
            gridDiv[i].style.cssText += `background-color: rgba(0,0,0,0); filter: brightness(1);`;
            return;
        }
        if(toggles[1] === true)//arco iris
        {
            gridDiv[i].style.cssText += `background-color: ${randomColor()}; filter: brightness(1);`;
            return;
        }
        if(toggles[2] === true)//escurecer
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))-0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        if(toggles[3] === true)//clarear
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))+0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        gridDiv[i].style.cssText += `background-color: ${cor.value}; filter: brightness(1);`;
        brightness = 1;
        return;
    });
    gridDiv[i].addEventListener('mouseenter', () =>
    {
        if(!desenharToggle)
        {
            return;
        }
        if(toggles[0] === true)//borracha
        {
            gridDiv[i].style.cssText += `background-color: rgba(0,0,0,0); filter: brightness(1);`;
            return;
        }
        if(toggles[1] === true)//arco iris
        {
            gridDiv[i].style.cssText += `background-color: ${randomColor()}; filter: brightness(1);`;
            return;
        }
        if(toggles[2] === true)//escurecer
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))-0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        if(toggles[3] === true)//clarear
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))+0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        gridDiv[i].style.cssText += `background-color: ${cor.value}; filter: brightness(1);`;
        return;
    });
}

document.querySelector('body').addEventListener('mouseup', () =>
{
    desenharToggle = false;
});      

gridSize.addEventListener('change', () =>
{
    grade.classList.remove('togglesSelected');
    let child = gridContainer.lastElementChild; 
    while (child)
    {
        gridContainer.removeChild(child);
        child = gridContainer.lastElementChild;
    }
    gridContainer.style.cssText += `grid-template-columns: repeat(${gridSize.value}, 1fr); grid-template-rows:  repeat(${gridSize.value}, 1fr);`
    for(let i=0;i<gridSize.value*gridSize.value;i++)
    {
        criaDiv(gridContainer);
    }
    gridDiv = document.querySelectorAll('.gridDiv');
    for(let i=0;i<gridDiv.length;++i)
    {
        gridDiv[i].addEventListener('mousedown', () =>
        {
            desenharToggle = true;
        if(toggles[0] === true)//borracha
        {
            gridDiv[i].style.cssText += `background-color: rgba(0,0,0,0); filter: brightness(1);`;
            return;
        }
        if(toggles[1] === true)//arco iris
        {
            gridDiv[i].style.cssText += `background-color: ${randomColor()}; filter: brightness(1);`;
            return;
        }
        if(toggles[2] === true)//escurecer
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))-0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        if(toggles[3] === true)//clarear
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))+0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        gridDiv[i].style.cssText += `background-color: ${cor.value}; filter: brightness(1);`;
        brightness = 1;
        return;
        });
        gridDiv[i].addEventListener('mouseenter', () =>
        {
            if(!desenharToggle)
        {
            return;
        }
        if(toggles[0] === true)//borracha
        {
            gridDiv[i].style.cssText += `background-color: rgba(0,0,0,0); filter: brightness(1);`;
            return;
        }
        if(toggles[1] === true)//arco iris
        {
            gridDiv[i].style.cssText += `background-color: ${randomColor()}; filter: brightness(1);`;
            return;
        }
        if(toggles[2] === true)//escurecer
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))-0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        if(toggles[3] === true)//clarear
        {
            let brightnessProp = parseFloat(window.getComputedStyle(gridDiv[i]).getPropertyValue('filter').match(/\d/g).join("."))+0.1;
            gridDiv[i].style.cssText += `filter: brightness(${brightnessProp});`;
            return;
        }
        gridDiv[i].style.cssText += `background-color: ${cor.value}; filter: brightness(1);`;
        return;
        });
    }
});

limparTudo.addEventListener('click', () =>
{
    for(let i=0; i<gridDiv.length;++i)
    {
        gridDiv[i].style.cssText += `background-color: rgba(0,0,0,0); filter: brightness(1);`;
    }
});

function criaDiv(a)
{
    const newDiv = document.createElement('div');
    newDiv.classList.add('gridDiv');
    a.appendChild(newDiv);
}

corFundo.addEventListener('change', () =>
{
    gridContainer.style.cssText += `background-color: ${corFundo.value};`;
});

// ALTERAÇÕES DA SIDEBAR

gridSize.addEventListener('input', () => 
{
    valorGrid[0].textContent = gridSize.value;
    valorGrid[1].textContent = gridSize.value;
});

borracha.addEventListener('click', () => 
{
    for (let i = 0; i < botoes.length; ++i) 
    {
        if(botoes[i] === borracha)
        {
            toggles[i] = !toggles[i];
            continue;
        }
        toggles[i] = false;
        botoes[i].classList.remove('togglesSelected');
    }
    borracha.classList.toggle('togglesSelected');
});

arcoIris.addEventListener('click', () => 
{
    for (let i = 0; i < botoes.length; ++i) 
    {
        if(botoes[i] === arcoIris)
        {
            toggles[i] = !toggles[i];
            continue;
        }
        toggles[i] = false;
        botoes[i].classList.remove('togglesSelected');
    }
    arcoIris.classList.toggle('togglesSelected');
});

escurecer.addEventListener('click', () => 
{
    for (let i = 0; i < botoes.length; ++i) 
    {
        if(botoes[i] === escurecer)
        {
            toggles[i] = !toggles[i];
            continue;
        }
        toggles[i] = false;
        botoes[i].classList.remove('togglesSelected');
    }
    escurecer.classList.toggle('togglesSelected');
});

clarear.addEventListener('click', () => 
{
    for (let i = 0; i < botoes.length; ++i) 
    {
        if(botoes[i] === clarear)
        {
            toggles[i] = !toggles[i];
            continue;
        }
        toggles[i] = false;
        botoes[i].classList.remove('togglesSelected');
    }
    clarear.classList.toggle('togglesSelected');
});

grade.addEventListener('click', () => 
{
    grade.classList.toggle('togglesSelected');
    let showGrid = document.querySelectorAll('.gridDiv');
    for(let i=0;i<showGrid.length;++i)
    {
        showGrid[i].classList.toggle('showGrid');
    }
});