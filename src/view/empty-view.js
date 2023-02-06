import AbstractView from '../framework/view/abstract-view.js';

function createEmptyTemplate() {
  return `section class="films">
  <section class="films-list">
    <h2 class="films-list__title">There are no movies in our database</h2>
  </section>
</section>`;
}

export default class EmptyView extends AbstractView {
  get template() {
    return createEmptyTemplate();
  }
}
