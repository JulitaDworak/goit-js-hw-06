const galleryElements = document.querySelector('.gallery')
const ulList = document.querySelector('ul')

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

ulList.textContent = 'The most beautiful animals gallery '
ulList.style.color = 'brown'
ulList.style.paddingTop = '50px'
ulList.style.fontSize = '30px'

images.forEach( image => {
  const galleryItem = document.createElement('li') 
  galleryElements.append(galleryItem);
  galleryItem.insertAdjacentHTML("beforeend", `<img class="img_gallery" src = "${image.url}" alt = "${image.alt}"/>`)
})




