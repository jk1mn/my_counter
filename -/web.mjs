#!/usr/bin/env node
"use strict";
function require( path ){ return $node[ path ] };

var $node = $node || {}
void function( module ) { var exports = module.exports = this; function require( id ) { return $node[ id.replace( /^.\// , "../" ) ] }; 
;
"use strict";
Error.stackTraceLimit = 50;
var $;
(function ($) {
})($ || ($ = {}));
module.exports = $;

;

$node[ "../mam.ts" ] = $node[ "../mam.ts" ] = module.exports }.call( {} , {} )
;
"use strict"

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if ((d = decorators[i])) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var $ = ( typeof module === 'object' ) ? ( module['export'+'s'] = globalThis ) : globalThis
$.$$ = $

;
"use strict";
var $;
(function ($) {
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom_context = self;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    $.$mol_dom = $mol_dom_context;
})($ || ($ = {}));

;
"use strict";
var $;
(function ($) {
    function $mol_dom_render_children(el, childNodes) {
        const node_set = new Set(childNodes);
        let nextNode = el.firstChild;
        for (let view of childNodes) {
            if (view == null)
                continue;
            if (view instanceof $mol_dom_context.Node) {
                while (true) {
                    if (!nextNode) {
                        el.appendChild(view);
                        break;
                    }
                    if (nextNode == view) {
                        nextNode = nextNode.nextSibling;
                        break;
                    }
                    else {
                        if (node_set.has(nextNode)) {
                            el.insertBefore(view, nextNode);
                            break;
                        }
                        else {
                            const nn = nextNode.nextSibling;
                            el.removeChild(nextNode);
                            nextNode = nn;
                        }
                    }
                }
            }
            else {
                if (nextNode && nextNode.nodeName === '#text') {
                    const str = String(view);
                    if (nextNode.nodeValue !== str)
                        nextNode.nodeValue = str;
                    nextNode = nextNode.nextSibling;
                }
                else {
                    const textNode = $mol_dom_context.document.createTextNode(String(view));
                    el.insertBefore(textNode, nextNode);
                }
            }
        }
        while (nextNode) {
            const currNode = nextNode;
            nextNode = currNode.nextSibling;
            el.removeChild(currNode);
        }
    }
    $.$mol_dom_render_children = $mol_dom_render_children;
})($ || ($ = {}));

;
"use strict";
class $my_lom_view {
    _dom_node = null;
    dom_node() {
        if (this._dom_node)
            return this._dom_node;
        const node = document.createElement(this.dom_name());
        for (const [name, fn] of Object.entries(this.event())) {
            node.addEventListener(name, fn);
        }
        node.setAttribute('view', this.constructor.name);
        return this._dom_node = node;
    }
    dom_node_actual() {
        const node = this.dom_node();
        for (const [name, val] of Object.entries(this.attr())) {
            node.setAttribute(name, String(val));
        }
        for (const [name, val] of Object.entries(this.field())) {
            ;
            node[name] = val;
        }
        return node;
    }
    dom_tree() {
        const node = this.dom_node_actual();
        const node_list = this.sub().map(node => {
            if (node === null)
                return null;
            return node instanceof $my_lom_view ? node.dom_tree() : String(node);
        });
        $.$mol_dom_render_children(node, node_list);
        return node;
    }
    dom_name() {
        return 'div';
    }
    attr() {
        return {};
    }
    event() {
        return {};
    }
    field() {
        return {};
    }
    sub() {
        return [];
    }
}

;
"use strict";
class $my_lom_storage {
    static value(key, next) {
        if (next === undefined)
            return JSON.parse(localStorage.getItem(key) ?? 'null');
        if (next === null)
            localStorage.removeItem(key);
        else
            localStorage.setItem(key, JSON.stringify(next));
        return next;
    }
}

;
"use strict";
class $my_lom_button extends $my_lom_view {
    dom_name() { return 'button'; }
    title() { return ''; }
    click(e) { }
    sub() {
        return [this.title()];
    }
    event() {
        return {
            click: (e) => this.click(e)
        };
    }
}
class $my_lom_button_minor extends $my_lom_button {
    attr() {
        return {
            'jk1mn_counter_button_minor': true,
        };
    }
}

;
"use strict";
class $my_lom_input extends $my_lom_view {
    dom_name() { return 'input'; }
    type() { return 'text'; }
    _value = '';
    value(next = this._value) {
        return this._value = next;
    }
    event_change(e) {
        this.value(e.target.value);
    }
    field() {
        return {
            value: this.value(),
        };
    }
    attr() {
        return {
            type: this.type(),
        };
    }
    event() {
        return {
            input: (e) => this.event_change(e),
        };
    }
}

;
"use strict";
var $;
(function ($) {
    function $mol_style_attach(id, text) {
        const doc = $mol_dom_context.document;
        if (!doc)
            return null;
        const elid = `$mol_style_attach:${id}`;
        let el = doc.getElementById(elid);
        if (!el) {
            el = doc.createElement('style');
            el.id = elid;
            doc.head.appendChild(el);
        }
        if (el.innerHTML != text)
            el.innerHTML = text;
        return el;
    }
    $.$mol_style_attach = $mol_style_attach;
})($ || ($ = {}));

;
"use strict";
setInterval(() => {
    if (typeof document === 'undefined')
        return;
    document?.documentElement.setAttribute('my_lom_theme', new Date().getSeconds() < 30 ? 'light' : 'dark');
}, 1_000);

;
"use strict";
class $my_counter extends $my_lom_view {
    count(next) {
        return $my_lom_storage.value('count', next) ?? 0;
    }
    count_str(next) {
        return this.count(next?.valueOf && Number(next)).toString();
    }
    inc() {
        this.count(this.count() + 1);
    }
    dec() {
        this.count(this.count() - 1);
    }
    _Inc = null;
    Inc() {
        if (this._Inc)
            return this._Inc;
        const obj = new $my_lom_button;
        obj.title = () => '+';
        obj.click = () => this.inc();
        return this._Inc = obj;
    }
    _Dec = null;
    Dec() {
        if (this._Dec)
            return this._Dec;
        const obj = new $my_lom_button;
        obj.title = () => '-';
        obj.click = () => this.dec();
        return this._Dec = obj;
    }
    _Count = null;
    Count() {
        if (this._Count)
            return this._Count;
        const obj = new $my_lom_input;
        obj.value = (next) => this.count_str(next);
        return this._Count = obj;
    }
    sub() {
        return [
            this.Dec(),
            this.Count(),
            this.Inc(),
        ];
    }
    static mount() {
        if (typeof document === 'undefined')
            return;
        const node = document.querySelector('#root');
        const obj = new $my_counter();
        node?.replaceWith(obj.dom_tree());
        setInterval(() => obj.dom_tree(), 100);
    }
}
$my_counter.mount();

;
"use strict";
var $;
(function ($) {
    $mol_style_attach("my/counter/counter.css", "/* mam/my/counter/counter.css */\n[my_lom_theme=\"light\"] {\n\tbackground-color: white;\n}\n\n[my_lom_theme=\"dark\"] {\n\tbackground-color: black;\n}\n");
})($ || ($ = {}));


export default $
//# sourceMappingURL=web.js.map
