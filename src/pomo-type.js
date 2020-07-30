import { LitElement, html, css  } from 'lit-element';
import * as icons from './icons.js';

class PomoType extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      hideLabel: { type: Boolean, attribute: 'hide-label' },
      hideSymbol: { type: Boolean, attribute: 'hide-symbol' },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: monospace;
        border-radius: 3px;
        margin: .3em;
        display: inline-block;
        border: 1px solid white;
      }

      .type {
        border-radius: 3px;
        border-bottom: 3px solid red;
        padding: .1em .3em;
        display: inline-block;
        white-space: nowrap;
        display: flex;
        align-items: center;
      }

      .symbol {
        height: 2em;
        width: 2em;
        border-radius: 100%;
        display: inline-block;
        fill: black;
      }
      .symbol svg {
        height: 60%;
        width: 60%;
        margin: 20%;
      }

      .title + .symbol {
        margin-left: .3em;
      }

      /* labels */
      .bug { background-color: var(--bug-light); border-color: var(--bug-dark); }
      .dark { background-color: var(--dark-light); border-color: var(--dark-dark); }
      .dragon { background-color: var(--dragon-light); border-color: var(--dragon-dark); }
      .electric { background-color: var(--electric-light); border-color: var(--electric-dark); }
      .fairy { background-color: var(--fairy-light); border-color: var(--fairy-dark); }
      .fighting { background-color: var(--fighting-light); border-color: var(--fighting-dark); }
      .fire { background-color: var(--fire-light); border-color: var(--fire-dark); }
      .flying { background-color: var(--flying-light); border-color: var(--flying-dark); }
      .ghost { background-color: var(--ghost-light); border-color: var(--ghost-dark); }
      .grass { background-color: var(--grass-light); border-color: var(--grass-dark); }
      .ground { background-color: var(--ground-light); border-color: var(--ground-dark); }
      .ice { background-color: var(--ice-light); border-color: var(--ice-dark); }
      .normal { background-color: var(--normal-light); border-color: var(--normal-dark); }
      .poison { background-color: var(--poison-light); border-color: var(--poison-dark); }
      .psychic { background-color: var(--psychic-light); border-color: var(--psychic-dark); }
      .rock { background-color: var(--rock-light); border-color: var(--rock-dark); }
      .steel { background-color: var(--steel-light); border-color: var(--steel-dark); }
      .water { background-color: var(--water-light); border-color: var(--water-dark); }

      /* symbols */
      .bug .symbol { background-color: var(--bug); }
      .dark .symbol { background-color: var(--dark); }
      .dragon .symbol { background-color: var(--dragon); }
      .electric .symbol { background-color: var(--electric); }
      .fairy .symbol { background-color: var(--fairy); }
      .fighting .symbol { background-color: var(--fighting); }
      .fire .symbol { background-color: var(--fire); }
      .flying .symbol { background-color: var(--flying); }
      .ghost .symbol { background-color: var(--ghost); }
      .grass .symbol { background-color: var(--grass); }
      .ground .symbol { background-color: var(--ground); }
      .ice .symbol { background-color: var(--ice); }
      .normal .symbol { background-color: var(--normal); }
      .poison .symbol { background-color: var(--poison); }
      .psychic .symbol { background-color: var(--psychic); }
      .rock .symbol { background-color: var(--rock); }
      .steel .symbol { background-color: var(--steel); }
      .water .symbol { background-color: var(--water); }
    `;
  }

  render() {
    return html`
      <span class="type ${this.name.toLowerCase()}">
        ${this.hideLabel ? '' : html`<span class="title">${this.name}</span>`}
        ${this.hideSymbol ? '' : html`<span class="symbol">${icons[this.name.toLowerCase()]}</span>`}
      </span>
    `;
  }
}

customElements.define('pomo-type', PomoType);
