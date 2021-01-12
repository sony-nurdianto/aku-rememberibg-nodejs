import fs from 'fs'


class Upload {

    photoUpload = (no, id, photo) => {
        const buff = new Buffer(photo, 'base64');
        try {

            fs.writeFileSync(`src/assets/member_images/${no}_${id}.png`, buff);
            return `${no}_${id}.png`
        } catch (error) {
            console, log(error)
        }
    }

}

export default new Upload