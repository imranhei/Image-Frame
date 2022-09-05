//-------------------------------------------Defining variables------------------------------------
let root = document.querySelector(':root')
let prevRow, prevCol;
let imgRow, imgCol;
let index;
let timer = null, timer2 = null;
let imageDelay = null, imageDelay2 = null;
let animating = null, animating2 = null;
let rand, rand2;
let newChild, newChild2;
let nodes1, nodes2;
let images1 = ["img/img-01.jpg", "img/img-02.jpg", "img/img-03.jpg", "img/img-04.jpg", "img/img-05.jpg", "img/img-06.jpg", "img/img-07.jpg", "img/img-08.jpg", "img/img-09.jpg", "img/img-10.jpg", "img/img-11.jfif", "img/img-12.jpg", "img/img-13.jpg", "img/img-14.jpg", "img/img-15.jpg", "img/img-16.jpg", "img/img-17.jpg", "img/img-18.jfif", "img/img-19.jfif", "img/img-20.jpg", "img/img-21.png", "img/img-22.jpg", "img/img-23.jpg", "img/img-24.jpg", "img/img-25.jpg", "img/img-26.jpg", "img/img-27.jpg", "img/img-28.jpg", "img/img-29.jpg", "img/img-30.jpg",];
let images2 = ["img/img-01.jpg", "img/img-02.jpg", "img/img-03.jpg", "img/img-04.jpg", "img/img-05.jpg", "img/img-06.jpg", "img/img-07.jpg", "img/img-08.jpg", "img/img-09.jpg", "img/img-10.jpg", "img/img-11.jfif", "img/img-12.jpg", "img/img-13.jpg", "img/img-14.jpg", "img/img-15.jpg", "img/img-16.jpg", "img/img-17.jpg", "img/img-18.jfif", "img/img-19.jfif", "img/img-20.jpg", "img/img-21.png", "img/img-22.jpg", "img/img-23.jpg", "img/img-24.jpg", "img/img-25.jpg", "img/img-26.jpg", "img/img-27.jpg", "img/img-28.jpg", "img/img-29.jpg", "img/img-30.jpg",];

//---------------------------------------image loader function-------------------------------------
function loadImages(){
    index = 0;
    nodes1 = [];
    nodes2 = [];
    document.querySelector(".top1").innerHTML = '';
    document.querySelector(".top2").innerHTML = '';

    for(let i=0; i<imgRow-1; i++){
        newChild = document.createElement("div");
        newChild.className = "img";
        newChild.style.backgroundImage = `url(${images1[index]})`;
        document.querySelector(".top1").appendChild(newChild);
        nodes1.push(newChild);

        newChild2 = document.createElement("div");
        newChild2.className = "img2";
        newChild2.style.backgroundImage = `url(${images2[index++]})`;
        document.querySelector(".top2").appendChild(newChild2);
        nodes2.push(newChild2);
    }
    document.querySelector(".right1").innerHTML = '';
    document.querySelector(".right2").innerHTML = '';

    for(let i=0; i<imgCol-1; i++){
        newChild = document.createElement("div");
        newChild.className = "img";
        newChild.style.backgroundImage = `url(${images1[index]})`;
        document.querySelector(".right1").appendChild(newChild);
        nodes1.push(newChild);

        newChild2 = document.createElement("div");
        newChild2.className = "img2";
        newChild2.style.backgroundImage = `url(${images2[index++]})`;
        document.querySelector(".right2").appendChild(newChild2);
        nodes2.push(newChild2);
    }
    document.querySelector(".bottom1").innerHTML = '';
    document.querySelector(".bottom2").innerHTML = '';

    for(let i=0; i<imgRow-1; i++){
        if(index>=30) break;
        newChild = document.createElement("div");
        newChild.className = "img";
        newChild.style.backgroundImage = `url(${images1[index]})`;
        document.querySelector(".bottom1").appendChild(newChild);
        nodes1.push(newChild);

        newChild2 = document.createElement("div");
        newChild2.className = "img2";
        newChild2.style.backgroundImage = `url(${images2[index++]})`;
        document.querySelector(".bottom2").appendChild(newChild2);
        nodes2.push(newChild2);
    }
    document.querySelector(".left1").innerHTML = '';
    document.querySelector(".left2").innerHTML = '';

    for(let i=0; i<imgCol-1; i++){
        if(index>=30) break;
        newChild = document.createElement("div");
        newChild.className = "img";
        newChild.style.backgroundImage = `url(${images1[index]})`;
        document.querySelector(".left1").appendChild(newChild);
        nodes1.push(newChild);

        newChild2 = document.createElement("div");
        newChild2.className = "img2";
        newChild2.style.backgroundImage = `url(${images2[index++]})`;
        document.querySelector(".left2").appendChild(newChild2);
        nodes2.push(newChild2);
    }
}

//-----------------------------------------Animation part------------------------------------------
function clearAllInterval(){
    clearInterval(timer);
    clearTimeout(imageDelay);
    clearTimeout(animating);
    clearInterval(timer2);
    clearTimeout(imageDelay2);
    clearTimeout(animating2);
}

function startInterval1() {  //wait 2 sec for window resize or load webpage
    timer = setInterval(function() {
        timeDelay();
    }, (2000));
}

function timeDelay(){   //delay 1.4 sec before images swap animation
    imageDelay = setTimeout(function(){
        executeTime();
        rand = Math.floor((Math.random())*index);
        if(rand===29 && (imgRow+imgCol)*2-4>index){
            nodes1[0].style.animationName = "leftToRight";
            nodes1[1].style.animationName = "rightToLeft";
        }
        else if(rand===index-1){
            nodes1[rand].style.animationName = "bottomToTop";
            nodes1[0].style.animationName = "topToBottom";
        }
        else if(rand<imgRow-1){
            nodes1[rand].style.animationName = "leftToRight";
            nodes1[rand+1].style.animationName = "rightToLeft";
        }
        else if(rand<imgRow+imgCol-2){
            nodes1[rand].style.animationName = "topToBottom";
            nodes1[rand+1].style.animationName = "bottomToTop";
        }
        else if(rand<imgRow*2+imgCol-3){
            nodes1[rand].style.animationName = "rightToLeft";
            nodes1[rand+1].style.animationName = "leftToRight";
        }
        else{
            nodes1[rand].style.animationName = "bottomToTop";
            nodes1[rand+1].style.animationName = "topToBottom";
        } 
    }, 1400);
}

function executeTime(){ //swapping animation for 0.6 sec
    animating = setTimeout(function(){
        if(rand<index-1){
            nodes1[rand].style.backgroundImage = `url(${images1[rand+1]})`;
            nodes1[rand+1].style.backgroundImage = `url(${images1[rand]})`;
            [images1[rand], images1[rand+1]] = [images1[rand+1], images1[rand]];
            nodes1[rand].style.animationName = "null";
            nodes1[rand+1].style.animationName = "null";
        }
        else{
            if(rand===29 && (imgRow+imgCol)*2-4>index){
                nodes1[0].style.backgroundImage = `url(${images1[1]})`;
                nodes1[1].style.backgroundImage = `url(${images1[0]})`;
                [images1[0], images1[1]] = [images1[1], images1[0]];
                nodes1[0].style.animationName = "null";
                nodes1[1].style.animationName = "null";
            }
            else{
                nodes1[rand].style.backgroundImage = `url(${images1[0]})`;
                nodes1[0].style.backgroundImage = `url(${images1[rand]})`;
                [images1[rand], images1[0]] = [images1[0], images1[rand]];
                nodes1[rand].style.animationName = "null";
                nodes1[0].style.animationName = "null";
            }
        }
    }, 580);
}
function startInterval2() {  //wait 1 sec for window resize or load webpage
    timer2 = setInterval(function() {
        timeDelay2();
    }, (1000));
}

function timeDelay2(){   //delay 0.7 sec after images swap animation
    imageDelay2 = setTimeout(function(){
        executeTime2();
        rand2 = Math.floor((Math.random())*index);
        if(rand2===29 && (imgRow+imgCol)*2-4>index){
            nodes2[0].style.animationName = "leftToRight";
            nodes2[1].style.animationName = "rightToLeft";
        }
        else if(rand2===index-1){
            nodes2[rand2].style.animationName = "bottomToTop";
            nodes2[0].style.animationName = "topToBottom";
        }
        else if(rand2<imgRow-1){
            nodes2[rand2].style.animationName = "leftToRight";
            nodes2[rand2+1].style.animationName = "rightToLeft";
        }
        else if(rand2<imgRow+imgCol-2){
            nodes2[rand2].style.animationName = "topToBottom";
            nodes2[rand2+1].style.animationName = "bottomToTop";
        }
        else if(rand2<imgRow*2+imgCol-3){
            nodes2[rand2].style.animationName = "rightToLeft";
            nodes2[rand2+1].style.animationName = "leftToRight";
        }
        else{
            nodes2[rand2].style.animationName = "bottomToTop";
            nodes2[rand2+1].style.animationName = "topToBottom";
        } 
    }, 700);
}

function executeTime2(){ //swapping animation for 0.3 sec
    animating2 = setTimeout(function(){
        if(rand2<index-1){
            nodes2[rand2].style.backgroundImage = `url(${images2[rand2+1]})`;
            nodes2[rand2+1].style.backgroundImage = `url(${images2[rand2]})`;
            [images2[rand2], images2[rand2+1]] = [images2[rand2+1], images2[rand2]];
            nodes2[rand2].style.animationName = "null";
            nodes2[rand2+1].style.animationName = "null";
        }
        else{
            if(rand2===29 && (imgRow+imgCol)*2-4>index){
                nodes2[0].style.backgroundImage = `url(${images2[1]})`;
                nodes2[1].style.backgroundImage = `url(${images2[0]})`;
                [images2[0], images2[1]] = [images2[1], images2[0]];
                nodes2[0].style.animationName = "null";
                nodes2[1].style.animationName = "null";
            }
            else{
                nodes2[rand2].style.backgroundImage = `url(${images2[0]})`;
                nodes2[0].style.backgroundImage = `url(${images2[rand2]})`;
                [images2[rand2], images2[0]] = [images2[0], images2[rand2]];
                nodes2[rand2].style.animationName = "null";
                nodes2[0].style.animationName = "null";
            }
        }
    }, 280);
}

//------------This function will be called when the window is resized //  Main function------------
function resizeFunc(){
    
    clearAllInterval();
    // adjust container height and width
    let conWidth = document.querySelector(".container").offsetWidth;
    if(window.innerWidth<=600){
        imgRow = Math.floor(2160/conWidth);
    }
    else{
        imgRow = Math.floor(conWidth/130);
    }
    let hw = conWidth/imgRow;
    root.style.setProperty('--x', `${hw}px`);
    
    // adjust text box height
    let paraHeight = document.querySelector("p").offsetHeight + 80;
    if(paraHeight%hw>0){
        let textHeight = (Math.ceil(paraHeight/hw))*hw;
        root.style.setProperty('--textHeight', `${textHeight}px`)
    }
    let conHeight = document.querySelector(".container").offsetHeight;
    if(window.innerWidth<=600){
        imgCol = Math.round(conHeight/hw);
    }
    else{
        imgCol = Math.floor(conHeight/130);
    }
    let r = (imgRow-1) * hw + 'px';
    root.style.setProperty('--imgRow', r);

    if(prevRow!=imgRow || prevCol!=imgCol){
        loadImages()
    }
    prevRow = imgRow;
    prevCol = imgCol;

    startInterval1();
    startInterval2();
}
//-------------------------------------initial call------------------------------------------------
resizeFunc();

document.addEventListener('visibilitychange', () => {
        if(document.hidden){
            clearAllInterval()
        }
        else{
            startInterval1();
            startInterval2();
        }
})
