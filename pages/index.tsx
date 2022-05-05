import { WarningIcon } from '@chakra-ui/icons';
import { Post, PrismaClient } from '@prisma/client';
import type { GetServerSideProps, NextPage } from 'next';
import CardIcon from '../components/shared/CardIcon';
import styles from '../styles/Home.module.css';

const prisma = new PrismaClient();

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const posts = await prisma.post.findMany();
    return {
        props: {
            posts: posts,
        },
    };
};
type Props = {
    posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
    // const [pets, setPets] =
    //     useState<Prisma.UserUncheckedCreateInput[]>(posts);

    return (
        <div>
            <div className={styles.container}>{JSON.stringify(posts)}</div>

            <CardIcon
                icon={<WarningIcon />}
                title='teste'
                description='description'
            />
        </div>
    );
};

export default Home;
