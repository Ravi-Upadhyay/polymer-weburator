/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-ajax/iron-ajax.js';
// import '@polymer/paper-input/paper-input.js';
// import '@polymer/paper-input/paper-input-container.js';
import '../styles/shared-styles.js';

/**
 * Importing the layout configuration, 
 * TODO: Proper pipeline for error handling, No data, Probable the using AJAX
 */
// import configuration from '../configurations/configurator.js'
// console.log(configuration);

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;
          padding: 10px;
        }
      </style>

      <div class="card">
        <form>
          <table class="wct-form-table">
            <template is="dom-repeat" items="[[configuration]]">
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
      
      <iron-ajax
       auto
       method="GET"
       url="src/configurations/configurator.json"
       on-response="_readConfiguration" 
       handle-as="json"
      ><iron-ajax>

    `;
  }

  static get properties(){
    return {
      requiredConfig : {
        type  : String,
        value : "rememberMeLogin"
      },
      dataAvailable : {
        type  : Boolean,
        value : false
      },
      dataModel : {
        type  : Object
      },
      configuration : Object

    };
  }

  _readConfiguration(event,request){
    /**
     * Reading the configuration, Handling the promise
     * And Setting the configuration according to required configuration
     */
    request.completes.then(()=>{
      console.log(`Succeed:`);
      this.set('dataAvailable', true);
      this.set('configuration',request.response[this.requiredConfig]);
      console.log(`dataAvailable: ${this.dataAvailable}`);
      console.log(this.configuration);
    }, ()=>{
      console.log(`Failed:`);
      console.log(request.response);
      this.set('dataAvailable', false);
    });
  }
}

window.customElements.define('my-view1', MyView1);
