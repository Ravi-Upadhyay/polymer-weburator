# Weburator - A Polymer based web curator application

>*Weburator derived from ( Web + Curator )* is an application, which generates the interactive UI templates based on the configuration selected.
___

## Index

- [Introduction](#intro)
- [Code](#code-snippets)
- [Already Covered](#best-practices)
- [What's next](#future-plans)
- [Resources Over Web](#resources)
- [To do list](#to-do)

---

## Introduction<a name="intro"></a>

//TODO: Add the description later.

---

## Code<a name="code-snippets"></a>

1. To run the code on local machine.

```
git clone <repo-url>
cd <project-folder>

npm install
polymer serve

// If use faced related to importing the module
// Due to Polymer Upgradation, Please run

polymer serve --module-resolution=node

```
2. `configurator.json` design.

```json
{   
    "loginConfigurations"  : [
        {
            "id"    : "simpleLogin",
            "data"  : [
                {
                    "type"      : "text",
                    "label"     : "User name",
                    "name"      : "userName",
                    "id"        : "userName",
                    "active"    : true
                },
                {
                    "type"      : "password",
                    "label"     : "Password",
                    "name"      : "password",
                    "id"        : "password",
                    "active"    : true
                },
                {
                    "type"      : "submit",
                    "value"     : "Login",
                    "name"      : "login",
                    "id"        : "login",
                    "active"    : true
                },
                {
                    "type"      : "checkbox",
                    "label"     : "Remember Me",
                    "name"      : "rememberMe",
                    "id"        : "rememberMe",
                    "active"    : false
                }
            ]
        }
    ]
}
```

---

## Already Covered<a name="best-practices"></a>

1. Robust handling and cleaning of the state when data changes.
2. 

---

## What's next<a name="future-plans"></a>

1. In the `configurator.json` in future we can provide the additional field with (`id`, `data`) that will store the `id` of the `form` element for other elements to associate with.
2. 
3. 


---

## Resources Over Web<a name="resources"></a>

1. <!-- list of the resources over web -->

---

## To Do List<a name="to-do"></a>

1. ~~Make `configurator.json` to handle more complex data structure.~~
2. ~~Make error handling more robust while calling the api.~~ 
3. ~~Create event handler to properly submit form data through AJAX.~~
4. To give proper introduction of the project.
5. Mention best practices followed in the code.
6. Keep mentioning the ideas.
7. To provide mechanism to change the code on the fly. To give option to select from one from the available configurations.