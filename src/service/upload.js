import fs from 'fs'


class Upload {

    photoUpload = (no, id, photo) => {
        const buff = new Buffer(photo, 'base64');
        try {

            return fs.writeFileSync(`src/assets/member_images/${no}_${id}.png`, buff);
        } catch (error) {
            console, log(error)
        }
    }

}

export default new Upload