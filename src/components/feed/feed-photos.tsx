import { Photo } from '@/actions/photos-get';
import Image from 'next/image';
import Link from 'next/link';
import styles from './feed.module.css'

export default function FeedPhotos({ photos }: { photos: Photo[] }) {
  console.log(photos);
  return (
    <div>
      <h1>Feed Photos</h1>
      <ul className={`${styles.feed} animeLeft`}>
        {photos.map((photo, i) => (
          <li className={styles.photo} key={photo.id + i}>
            <Link href={`/foto/${photo.id}`} scroll={false}>
              <Image
                alt={photo.title}
                src={photo.src}
                width={1500}
                height={1500}
                sizes='80vw'
              />
              <span className={styles.visualizacao}>{photo.acessos}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
