import { LitElement, html, css } from 'lit-element';
import { colours } from './colours.js';
import './pomo-chart.js';

class PomoApp extends LitElement {
  static get styles() {
    return [colours, css`
      :host {
        font-family: monospace;
      }

      h1, h2 {
        text-align: center;
        font-size: 1em;
      }
      h1 { font-size: 1.2em; }
      h2 { font-size: 1.1em; }
      h3 { font-size: 1.0em; }
      h4 { font-size: 1.0em; }
    `];
  }

  render() {
    return html`
      <h1>Pokemon Stuff</h1>
      <h2>Type Chart</h2>
      <pomo-chart></pomo-chart>
    `;
  }
}

customElements.define('pomo-app', PomoApp);
