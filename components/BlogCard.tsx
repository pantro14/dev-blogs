import {FC} from 'react';
import Link from 'next/link';

interface Props {
    title: string;
    desc: string;
    slug: string;
}

const BlogCard: FC<Props> = (props): JSX.Element => {
    return (
        <Link href={'/blogs/' + props.slug} legacyBehavior>
            <a className='block'>
                <div className="bg-green-100 p-2 rounded">
                    <h1 className='text-gray-900 text-3xl font-semibold '>{props.title}</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet,{props.desc}</p>
                </div>
            </a>
        </Link>
    );
}

export default BlogCard;
