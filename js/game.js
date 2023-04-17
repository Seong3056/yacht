
const $main = document.getElementById('main');
// const $game = $main.getElementById('game');
const $roll = document.getElementById('roll');
$roll.style.position = 'relative';

const $btn = $main.querySelector('button');
$btn.onclick = () => {
    var arr = new Array(5);
    $roll.textContent = '';
    for(var i=0;i<5;i++){        //주사위 5개 굴리기
            arr[i] =  Math.floor((Math.random()*6)+1) ;
            const $dice = document.createElement('img');
            $dice.setAttribute('class',`${arr[i]}`);
            $dice.setAttribute('src',`../img/${arr[i]}.png`);
            $dice.setAttribute('id',`dice`);
            
            $roll.appendChild($dice);
            $dice.style.position = 'absolute';
            $dice.style.top = `${Math.random()*83}%`;
            $dice.style.left = `${Math.random()*84}%`;
            // $dice.style.top = `83%`;
            // $dice.style.left = `84%`;
            
            $dice.style.transform = `rotate(${Math.random()*720})`;
            $dice.style.transition = `${Math.random()*3}s`;
    }
    
}