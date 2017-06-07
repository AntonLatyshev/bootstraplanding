import {
  markupMenu
} from './markup-menu';
markupMenu(window.document);
import video from './video';
import team from './team';
import header from './header';
import anchor from './anchor';

$(() => {
  video();
  team();
  header();
  anchor();
})
