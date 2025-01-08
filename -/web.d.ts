declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare class $my_lom_view {
    _dom_node: Element;
    dom_node(): Element;
    dom_node_actual(): Element;
    dom_tree(): Element;
    dom_name(): string;
    attr(): {
        [key: string]: string | number | boolean | null;
    };
    event(): {
        [key: string]: (e: Event) => any;
    };
    field(): {
        [key: string]: any;
    };
    sub(): Array<$my_lom_view | Node | string | number | boolean>;
}

declare class $my_lom_storage {
    static value<Value>(key: string, next?: Value): any;
}

declare class $my_lom_button extends $my_lom_view {
    dom_name(): string;
    title(): string;
    click(e: Event): void;
    sub(): string[];
    event(): {
        click: (e: Event) => void;
    };
}
declare class $my_lom_button_minor extends $my_lom_button {
    attr(): {
        jk1mn_counter_button_minor: boolean;
    };
}

declare class $my_lom_input extends $my_lom_view {
    dom_name(): string;
    type(): string;
    _value: string;
    value(next?: string): string;
    event_change(e: Event): void;
    field(): {
        value: string;
    };
    attr(): {
        type: string;
    };
    event(): {
        input: (e: Event) => void;
    };
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare class $my_counter extends $my_lom_view {
    count(next?: number): any;
    count_str(next?: string): any;
    inc(): void;
    dec(): void;
    _Inc: $my_lom_view;
    Inc(): $my_lom_view | $my_lom_button;
    _Dec: $my_lom_view;
    Dec(): $my_lom_view | $my_lom_button;
    _Count: $my_lom_view;
    Count(): $my_lom_view | $my_lom_input;
    sub(): ($my_lom_view | $my_lom_button | $my_lom_input)[];
    static mount(): void;
}

declare namespace $ {
}

export = $;
//# sourceMappingURL=web.d.ts.map
