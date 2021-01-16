import fs from 'fs'

// src/assets/member_images/5870000647_5dd74ec903b57c5773e4f596.png

class Upload {

    photoUpload = (no, id, photo) => {

        const image = photo.split('base64,')[1]
        if (!image) {
            image = photo
        }
        const buff = Buffer.from(image, 'base64')

        try {
            fs.writeFileSync(`src/assets/member_images/${no}_${id}.png`, buff);
            return `${no}_${id}.png`
        } catch (error) {
            console, log(error)
        }
    }

}

export default new Upload