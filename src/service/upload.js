import fs from 'fs'


class Upload {

    photoUpload = (no, id, photo) => {
        // const buff = new Buffer(photo, 'base64');
        const buff = Buffer.from(photo, 'base64')
        // console.log(testbuff)
        try {

            fs.writeFileSync(`src/assets/member_images/${no}_${id}.png`, testbuff);
            return `${no}_${id}.png`
        } catch (error) {
            console, log(error)
        }
    }

}

export default new Upload