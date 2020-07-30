import { LitElement, html, css } from 'lit-element';
import { TYPES } from './types.js';
import './pomo-type.js';

class PomoChart extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: monospace;
        background-color: #eee;
        padding: 3px;
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
    `;
  }

  render() {
    return html`
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
          ${this._renderTypes(type.vulnerable, true)}
        </div>
        <div class="weak">
          ${this._renderTypes(type.weak)}
          <div class='noeffect'>${this._renderTypes(type.noeffect)}</div>
        </div>
        <div class="name">
          <pomo-type name=${type.name}></pomo-type>
        </div>
        <div class="strong">
          ${this._renderTypes(type.strong)}
        </div>
        <div class="resist">
          ${this._renderTypes(type.resist, true)}
          <div class='immune'>${this._renderTypes(type.immune, true)}</div>
        </div>
      </div>
    `;
  }

  _renderTypes(typeList, hideLabel) {
    return typeList.map((type) => html`<pomo-type name=${type} ?hide-label=${hideLabel}></pomo-type>`);
  }
}

customElements.define('pomo-chart', PomoChart);
