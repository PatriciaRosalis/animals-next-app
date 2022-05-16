// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';

type Data = {
    name: string;
};

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     try {
//         const { post } = req.body;
//         // const user: Prisma.UserCreateInput = JSON.parse(req.body);
//         const savedPost = await prisma.post.create({
//              data: {
//                 name: animal.name,
//                 location: animal.location,
//                 missingPlace: animal.missingPlace,
//                 time: animal.time,
//                 chip: animal.chip,
//                 importantCharacteristic: animal.importantCharacteristic,
//                 importantInformation: animal.importantInformation,
//                 sex: animal.sex,
//                 sterilized: animal.sterilized,
//             }
//         });
//         res.status(200).json(savedPost);
//     } catch (error) {
//         res.status(400).json({ message: 'Something went wrong' });
//     }
// }

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const {
        name,
        location,
        missingPlace,
        time,
        chip,
        importantCharacteristic,
        importantInformation,
        sex,
        sterilized,
        email,
        telephone,
    } = req.body;

    const result = await prisma.post.create({
        data: {
            name,
            location,
            missingPlace,
            time,
            chip,
            importantCharacteristic,
            importantInformation,
            sex,
            sterilized,
            email,
        },
    });
    res.json(result);
}
