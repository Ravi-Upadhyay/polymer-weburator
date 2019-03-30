/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '../../node_modules/@polymer/polymer/polymer-element.js';
import '../styles/shared-styles.js';

class WctLogin extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <div class="card">

        <h1>[[headText]]</h1>

        <!-- TODO: Advanced Version, Give user choice to change configuration on the fly...
        <form>
          <table class="wct-form-table">
            <tr>
              <td>Configurations</td>
              <td>
                <template is="dom-repeat" items="[[configurations]]">
                  <div id="[[item.id]]" on-click="changeConfiguration">
                    <input type="radio" value="[[item.id]]" name="selected" checked="[[isChecked(item.id)]]">
                    <label for="[[item.id]]">[[item.id]]</label>
                  </div>
                </template>
              </td>
            </tr>
          </table>
        </form> -->

        <form class="wct-form" id="login-form" enctype="multipart/form-data">
          <table class="wct-form-table">
            <template is="dom-repeat" items="[[selectedConfiguration]]">
              <template is="dom-if" if="[[item.active]]">
                <tr>
                  <template is="dom-if" if="[[item.label]]">
                    <td>
                      <label>[[item.label]]</label>
                    </td>
                  </template>
                  <td>
                    <input type="[[item.type]]" id="[[item.id]]" name="[[item.name]]" value="[[item.value]]"></input>
                  </td>
                </tr>
              </template>
            </template>
          <table>
        </form>
      </div>
    `;
  }

  ready(){
    super.ready();
  }

  static get properties(){
    return {
      gotResponse : {
        type  : Boolean,
        value : false
      },
      selected : {
        type  : String,
      },
      configurations : {
        type  : Array,
        observer: '_setConfigurations'
      },
      selectedConfiguration : {
        type: Array,
        observer: '_getRequiredConfiguration'
      },
      headText: String,
    };
  }

  /**
   * METHOD-2: set/unset selected configuration based on the response.
   */
  _setConfigurations(configurations){
    if(configurations.length) {
      this.set('gotResponse', true);
      this.set('selected', configurations[0]["id"]);
      this._getRequiredConfiguration();
    }
    else {
      this.set('gotResponse', false);
      this.set('selectedConfiguration', []);
    }  
  }

  /**
   * METHOD-3: set proper configuration based on the
   * option selected. 
   */  
  _getRequiredConfiguration(){
    let configurations = this.configurations;
    let selectedId = this.selected;
    let data;

    for(let i=0; i<=configurations.length;i++){
      let configurationId = configurations[i].id;
      if(selectedId === configurationId){
        data = configurations[i].data;
        break;
      }
    }
    this.set('selectedConfiguration',data);
  }

  /**
   * RESERVED - FOR FUTURE USE, Can have mechanism to change UI
   * layout on the fly.
   * 
  isChecked(itemId){
    return (itemId === this.selected) ? true : false;
  }
  */

  _generateModel(){
    /**
     * To Enable the functionality of model and to submit
     * the form data their may be two approaches
     */
    const form = this.shadowRoot.querySelector("#login-form");
    form.addEventListener('submit',(event)=>{
      event.preventDefault();
      let loginData = new FormData(form);

      alert('I got it, Working on your request');
      // TODO: Here we can handle data in a way we desire
    });
  }
}

window.customElements.define('wct-login', WctLogin);
