

export const imagenPet = (animal) => {
    const { primary_photo_cropped } = animal
    if (primary_photo_cropped) {
        const { large } = primary_photo_cropped

        return large
    }
}