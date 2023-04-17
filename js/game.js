const $main = document.getElementById('main'); 
// const $game = $main.getElementById('game');
const $roll = document.getElementById('roll');
const $show = document.querySelector('.show');
const $select = document.getElementById('select');
const $selLi = $select.querySelectorAll('li');

// $roll.style.position = 'relative';

const $btn = $main.querySelector('button');
$btn.onclick = () => {
    var arr = new Array(5);
    $roll.textContent = '';
    for (var i = 0; i < 5; i++) { //주사위 5개 굴리기
        arr[i] = Math.floor((Math.random() * 6) + 1);
        const $dice = document.createElement('img');
        $dice.setAttribute('class', `dice ${arr[i]}`);
        $dice.setAttribute('src', `../img/${arr[i]}.png`);
        $dice.setAttribute('class', `dice`);

        $roll.appendChild($dice);
        $dice.style.position = 'absolute';
        $dice.style.top = `${Math.random()*83}%`;
        $dice.style.left = `${Math.random()*84}%`;
        // $dice.style.top = `83%`;
        // $dice.style.left = `84%`;

        $dice.style.transform = `rotate(${Math.random()*720}deg)`;
        $dice.style.transition = `${Math.random()*3}s ease`;
    }

    for (var i = 0; i < 4; i++) { // 주사위 오름차순 정렬
        for (var j = i; j < 5; j++) {
            if (arr[j] < arr[i]) {
                var tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp
            }
        }
    }
    const $show = document.createElement('div');
    $show.setAttribute('class', 'show');
    
    setTimeout(() => {
        for(var i =0;i<5;i++){
            const $dice = document.createElement('img');
            $dice.setAttribute('class', `${arr[i]}`);
            $dice.setAttribute('src', `../img/${arr[i]}.png`);
            $dice.setAttribute('id', `dice`);
    
            $show.appendChild($dice);
        }
        $roll.appendChild($show);
        for(var i=0;i<5;i++){
            $roll.removeChild($roll.querySelector('.dice'));
        }  
    }, 3);
    console.log($show);
    $show.addEventListener('click',e=>{
        if(!e.target.matches('img')) return;
        for(var i =0;i<5;i++){
            console.log($selLi[i].textContent);
            if($selLi[i].childElementCount == 0){
                $selLi[i].appendChild(e.target);
                break;
            }
            
        }
        console.log($selLi[i].childElementCount)
    })

}

