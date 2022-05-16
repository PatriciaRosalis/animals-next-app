import { IAnimalForm } from '../pages/criar-anuncio';

export const API = {
    postAnimal: async function (animal: IAnimalForm) {
        // await prisma.post.create({
        //     data: {
        //         name: animal.name,
        //         location: animal.location,
        //         missingPlace: animal.missingPlace,
        //         time: animal.time,
        //         chip: animal.chip,
        //         importantCharacteristic: animal.importantCharacteristic,
        //         importantInformation: animal.importantInformation,
        //         sex: animal.sex,
        //         sterilized: animal.sterilized,
        //     },
        // });

        return fetch('/api/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(animal),
        });
    },
};
