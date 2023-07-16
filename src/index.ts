import { POSTGRES_HOST } from './config';
import { AppDataSource } from './data-source';
import { PostImage } from './entity/PostImage';

AppDataSource.initialize()
  .then(async () => {
    const images = await AppDataSource.manager.findOneBy(PostImage, {
      id: 2697,
      post: { priority: 1 },
    });
    console.log(images);
  })
  .catch((error) => console.log(error));
