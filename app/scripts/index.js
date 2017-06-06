import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import video from './video';
import team from './team';

$(() => {
  video();
  team();
})
