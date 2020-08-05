import { LitElement, html, css } from 'lit-element';
import { TYPES } from './types.js';
import './pomo-type.js';

class PomoChart extends LitElement {
  static get properties() {
    return {
      hideLabels: { type: Boolean, attribute: false },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: monospace;
        background-color: #eee;
        padding: 3px;
        width: 100%;
      }

      .row:hover {
        background-color: #fee;
      }

      .row {
        background-color: white;
        display: grid;
        grid-template-columns: 2fr 4fr 1fr 4fr 2fr;
        border: 1px solid #ccc;
        padding: 0px;
        margin: 3px;
      }

      .row.head {
        background-color: #ddd;
      }

      .name {
        font-weight: bold;
      }

      .vulnerable,
      .weak,
      .name,
      .strong,
      .resist {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        border: 1px solid #eee;
        margin: 1px;
        padding: 3px;
        position: relative;
      }

      .vulnerable,
      .weak {
        justify-content: flex-end;
      }
      .strong,
      .resist {
        justify-content: flex-start;
      }

      .noeffect,
      .immune {
        background: repeating-linear-gradient(45deg, #eee, #eee 5px, #ccc 5px, #ccc 10px);
        display: flex;
        align-items: center;
      }
      .noeffect .type,
      .immune .type {
        font-weight: bold;
      }

      .options {
        padding: .5em;
      }
      .options.label {
        cursor: pointer;
        padding: .5em;
      }

      @media(max-width: 1000px) {
        .row {
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        }
        .vulnerable,
        .weak {
          justify-content: center;
        }
        .strong,
        .resist {
          justify-content: center;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="options">
        <label>Hide Labels <input type="checkbox" @change="${(e) => this.hideLabels = e.target.checked}" /></label>
      </div>
      <div class="row head">
        <div class="vulnerable">Vulnerable</div>
        <div class="weak">Not Very Effective</div>
        <div class="name">Type</div>
        <div class="strong">Super Effective</div>
        <div class="resist">Resist</div>
      </div>
      <div class="body">
        ${TYPES.map((type) => this._renderTypeRow(type))}
      </div>
    `;
  }

  _renderTypeRow(type) {
    return html`
      <div class="row">
        <div class="vulnerable">
          ${this._renderTypes(type.vulnerable)}
        </div>
        <div class="weak">
          ${this._renderTypes(type.weak)}
          <div class='noeffect'>${this._renderTypes(type.noeffect)}</div>
        </div>
        <div class="name">
          ${this._renderType(type.name)}
        </div>
        <div class="strong">
          ${this._renderTypes(type.strong)}
        </div>
        <div class="resist">
          ${this._renderTypes(type.resist)}
          <div class='immune'>${this._renderTypes(type.immune)}</div>
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
