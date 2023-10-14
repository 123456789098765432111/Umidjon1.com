import image1 from './img/image 60.png'
import image2 from './img/image 61.png'
import image3 from './img/image 62.png'
import image4 from './img/image 63.png'
import image5 from './img/image 64.png'
import image6 from './img/image 65.png'
import image7 from './img/image 66.png'
import image8 from './img/image 67.png'
import image9 from './img/image 9.png'

export const images = [image1, image2, image3, image4,image5,image6,image7,image8,image9]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex
