import { buildConfig } from 'payload/config';
import Examples from './collections/Examples';
import Media from './collections/media';
import Menu from './collections/menu-items';
import Promotions from './collections/promotions';
import Users from './collections/Users';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Promotions,
    Menu,
    Media,
    // Add Collections here
    // Examples
  ],
});
