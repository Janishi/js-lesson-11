let data = [
    {
        id: 1,
        imageurl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        title: 'photo1'
    },

    {
        id: 2,
        imageurl: 'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
        title: 'photo2'
    },

    {
        id: 3,
        imageurl: 'https://image.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-260nw-1725825019.jpg',
        title: 'photo3'
    },

    {
        id: 4,
        imageurl: 'https://image.shutterstock.com/image-photo/highway-landscape-colorful-sunset-road-260nw-2172624527.jpg',
        title: 'photo4'
    }

    

]

const arrowLeft = document.getElementById('arrow-left');
const arrowright = document.getElementById('arrow-right');
const sliderContent =document.getElementById('slider-content');

let sliderIndex = 0;

function createDivtag(item){
    let tag = document.createElement('div');
    tag.classList.add('slide');


    return tag;
}

function createImgTag(item){
    let tagImage = document.createElement('img');
    tagImage.setAttribute('src', item.imageurl);
    tagImage.setAttribute('alt', item.title);
    

    return tagImage;
}

function createH2Tag(item){
    let tagtitle = document.createElement('h2');
    tagtitle.innerText = item.title;
    tagtitle.classList.add('slider-title');
    

    return tagtitle;
}
function createdots (item){
    const dotsParent = document.createElement('div');
    dotsParent.classList.add('dotsParent');

    data.forEach((element) =>{
        const dotChild = document.createElement('div');
        dotChild.classList.add('dot');
        dotChild.setAttribute('data-id', element.id);
        dotsParent.appendChild(dotChild);
    });

    return dotsParent;

}

function setslide(){
        sliderContent.innerHTML = '';
        let slideItem = createDivtag(data[sliderIndex]);
        let h2tag = createH2Tag(data[sliderIndex]);
        let imgtag = createImgTag(data[sliderIndex]);
        let dots = createdots();

        slideItem.appendChild(h2tag);
        slideItem.appendChild(imgtag); 

        sliderContent.appendChild(slideItem);
        sliderContent.appendChild(dots);


    console.log(slideItem);
}

function arrowleftclick (){
    if(sliderIndex == 0){
        sliderIndex = data.length -1;
        setslide();
        return;
    }
    sliderIndex --;
    setslide();
}

function arrowrightclick (){
    if(sliderIndex == data.length -1) {
        sliderIndex = 0;
        setslide();
        return;
    }
    sliderIndex ++;
    setslide();
}

arrowLeft.addEventListener('click', arrowleftclick);
arrowright.addEventListener('click', arrowrightclick);
// setinterval( () => {
//     arrowrightclick();

// }, 3000);

setslide();



