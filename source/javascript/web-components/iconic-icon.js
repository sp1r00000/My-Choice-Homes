import '../../lib/webcomponents.min';
import '../../lib/document-register-element';
import '../../lib/innerHTML';

/**
 * simple web component for cross browser test
 */
class IconicIcon extends HTMLElement {
  createdCallback() {
    this.innerHTML = '<span class="iconic" aria-hidden="true"></span>';
  }

  attachedCallback() {
    this.querySelector('.iconic').setAttribute('class', this.class);
    this.querySelector('.iconic').setAttribute('data-glyph', this.dataGlyph);
  }

  set properties(prop) {
    this.class = `iconic ${prop.class}`;
    this.dataGlyph = `${prop.dataGlyph}`;
  }
}

export default IconicIcon;
