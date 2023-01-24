import {createElement} from '../render.js';

function createCommentListTemplate() {
  return `<section class="film-details__comments-wrap">
  <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">4</span></h3>

    <ul class="film-details__comments-list">

    </ul>


  </section>`;
}

export default class CommentListView {

  getTemplate() {
    return createCommentListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
