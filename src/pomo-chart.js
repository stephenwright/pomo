import { LitElement, html, css } from 'lit-element';
import { TYPES } from './types.js';
import './pomo-type.js';

class PomoChart extends LitElement {
  constructor() {
    super();
    this.hideLabels = true;
  }

  static get properties() {
    return {
      hideLabels: { type: Boolean, attribute: 'hide-labels' },
    };
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
        font-family: monospace;
        background-color: #eee;
      }

      .row:hover {
        background-color: #fee;
      }

      .row {
        display: grid;
        grid-template-columns: 3fr 2fr 1fr 2fr 4fr;
        margin: 0px 0;
      }

      .col {
        background-color: white;
        box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        margin: 2px;
        padding: 3px;
        position: relative;
      }

      .head .col {
        background-color: #ddd;
        border-color: #ccc;
      }

      .name {
        font-weight: bold;
      }

      .vulnerable,
      .weak {
        justify-content: flex-end;
      }
      .strong,
      .resist {
        justify-content: flex-start;
      }

      .none {
        background: repeating-linear-gradient(45deg, #eee, #eee 5px, #ccc 5px, #ccc 10px);
        display: flex;
        align-items: center;
      }
      .none .type {
        font-weight: bold;
      }

      .options {
        margin-bottom: 1em;
      }
      .options label {
        cursor: pointer;
      }

      @media(max-width: 1000px) {
        .row {
          grid-template-columns: repeat(5, 1fr);
        }
        .head {
          font-size: .7em;
          font-weight: normal;
        }
        .col,
        .none {
          flex-direction: column;
          justify-content: center;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="options">
        <label>Hide Labels <input type="checkbox" ?checked=${this.hideLabels} @change="${(e) => this.hideLabels = e.target.checked}" /></label>
      </div>
      <div class="row head">
        <div class="col weak">Not Very Effective</div>
        <div class="col vulnerable">Vulnerable</div>
        <div class="col name">Type</div>
        <div class="col strong">Super Effective</div>
        <div class="col resist">Resist</div>
      </div>
      <div class="body">
        ${TYPES.map((type) => this._renderTypeRow(type))}
      </div>
    `;
  }

  _renderTypeRow(type) {
    return html`
      <div class="row">
        <div class="col weak">
          ${this._renderTypes(type.weak)}
          <div class='none noeffect'>${this._renderTypes(type.noeffect)}</div>
        </div>
        <div class="col vulnerable">
          ${this._renderTypes(type.vulnerable)}
        </div>
        <div class="col name">
          ${this._renderType(type.name)}
        </div>
        <div class="col strong">
          ${this._renderTypes(type.strong)}
        </div>
        <div class="col resist">
          ${this._renderTypes(type.resist)}
          <div class='none immune'>${this._renderTypes(type.immune)}</div>
        </div>
      </div>
    `;
  }

  _renderType(type) {
    return html`<pomo-type name=${type} ?hide-label=${this.hideLabels}></pomo-type>`;
  }

  _renderTypes(typeList) {
    return typeList.map((type) => this._renderType(type));
  }
}

customElements.define('pomo-chart', PomoChart);
