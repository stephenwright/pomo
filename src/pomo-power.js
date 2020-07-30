import { LitElement, html, css } from 'lit-element';
import { TYPES } from './types.js';
import './pomo-chart.js';
import './pomo-type.js';

class PomoPower extends LitElement {
  static get properties() {
    return {
      selected: { type: Array },
    };
  }

  static get styles() {
    return css`
      pomo-type:hover {
        cursor: pointer;
      }
      .type-selector {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
      }
      .battle-ground {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .pokemon {
        flex-grow: 1;
        display: inline-block;
        border: 1px solid black;
        height: 3em;
        margin: 1em;
        box-shadow: 0 0 1em orange;
      }
    `;
  }

  render() {
    return html`
      <div class="type-selector">
        ${TYPES.map((type) => html`<pomo-type name=${type.name} @click=${this._onClickType}></pomo-type>`)}
      </div>
      <div class="battle-ground">
        <div class="pokemon attacker">
        </div>
        <div class="vs">VS</div>
        <div class="pokemon defender">
        </div>
      </div>
    `;
  }

  // _onClickType(e) {
  //   const { name } = e.srcElement;
  // }

  // typeEffectiveness({ move, target }) {
  // }

  calculateDamage({ attacker, targets, move, weather, trainer }) {
    const T = targets.length > 1 ? 0.75 : 1;
    const W = weather.boost.includes(move.type) ? 1.5 : 1;
    const B = trainer.badges.some(b => b.type === move.type) ? 1.25 : 1;
    const C = move.crit ? 2 : 1;
    const R = Math.random() * 0.15 + 0.85;
    const stab = attacker.type === move.type ? 1.5 : 1;
    const other = 1;
    for (const target of targets) {
      const burn = target.status.includes('burn');
      const modifier = T * W * B * C * R * stab * this.typeEffectiveness({ move, target }) * burn * other;
      const damage = (2 * trainer.level * move.power * attacker.attack / target.defense / 50 + 2) * modifier;
      target.hp -= damage;
    }
  }
}

customElements.define('pomo-power', PomoPower);
