import image1 from '../img/slide-2.jpg'
import image2 from '../img/slide-3.jpg'
import image3 from '../img/slide-4.jpg'


export const images = [image1, image2, image3]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
