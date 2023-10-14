import image1 from '../img/image 9 (1).png'
import image2 from '../img/image 9 (2).png'
import image3 from '../img/image 9.png'
import image4 from '../img/image_9__2_-removebg-preview.png'

export const images = [image1, image2, image3, image4]

const imageByIndex = (index) => images[index % images.length]

export default imageByIndex