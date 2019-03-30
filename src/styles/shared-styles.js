/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="shared-styles">
  <template>
    <style>
      .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 24px;
        padding: 16px;
        color: #757575;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
      }

      .circle {
        display: inline-block;
        width: 64px;
        height: 64px;
        text-align: center;
        color: #555;
        border-radius: 50%;
        background: #ddd;
        font-size: 30px;
        line-height: 64px;
      }

      h1 {
        margin: 16px 0;
        color: #212121;
        font-size: 22px;
      }

      form.wct-form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin : 30px 0 0 0;
        min-width: 50%;
        color: var(--app-secondary-color);
      }

      table.wct-form-table {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border  : 1px solid grey;
        border-radius : 10px;
        box-shadow : 1px 2px 2px grey;
        padding : 50px 20px;
        width: 90%;
      }

      table.wct-form-table tr {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width : 100%;
        height : 50px;
      }
      
      table.wct-form-table tr td {
        display: flex;
        flex-flow: row nowrap;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
      }
      
      table.wct-form-table tr td input {
        align-self: center;
        width: 80%;
        height: 30px;
      }

      table.wct-form-table tr td label {
        align-self: center;
        width: 80%;
        height: 30px;
      }

      table.wct-form-table tr td input[type="submit"]{
        width: 120px;
        background-color : var(--app-primary-color);
        color: white;
        font-weight: bold;
        border: none;
      }

      div.wct-json-display{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        margin-top : 10px;
        width: 90%;
        background-color: #e5e5e5;
        color: var(--app-secondary-color);
        border  : 1px solid grey;
        border-radius : 5px;
      }

      pre{
        width: 100%;
      }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
