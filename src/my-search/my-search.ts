import { FASTElement, attr, customElement, html, ref, css } from '@microsoft/fast-element';
import { DesignToken } from '@microsoft/fast-foundation';
import { fastButton, provideFASTDesignSystem } from '@microsoft/fast-components';
import axios from 'axios';
/**
 * @tag my-search
 * 
 * @summary This is a search component
 *
 * @attr {string} label - the label associated with the search field
 * 
 * @slot default - content displayed in the search button
 * 
 */

// DesignToken.create<number>('my-token').withDefault(2);
const root = document.querySelector("#root")! as HTMLDivElement;
// console.log(root);
DesignToken.registerRoot(root);

export const specialColor = DesignToken.create<string>('special-color').withDefault('#FFFFFF');
specialColor.setValueFor(root, "#ffffff");
// console.log(specialColor.getValueFor(root)S);

const styles = css`
    :host {
        background: ${specialColor};
    }
`
provideFASTDesignSystem()
.withPrefix("my")
.register(fastButton())

@customElement({
    name: 'my-search',
    template: html<MySearch>`
    <label>
        ${x => x.label}
        <input type="search" ${ref('searchInput')} @search="${x => x.searchHandler()}" />
    </label>
    <button @click="${x => x.buttonClickHandler()}">
        <slot>${x => x.default}</slot>
    </button>
    `,
    styles
})

export class MySearch extends FASTElement {
    @attr label: string = 'Search Workflow';
    @attr default: string = '👋';
    'searchInput': HTMLInputElement ;
    data = {};
    
    async connectedCallback() {
        super.connectedCallback();
        // console.log(this.searchInput.value);
    }

    private async apiCall() {
        let toolName = this.searchInput.value;
        const url = `https://dockstore.org/api/ga4gh/trs/v2/tools?toolname=${toolName}`;
        const res = await axios.get(url);
        this.data = res.data;
        console.log(this.data);
        this.$emit('search', this.data);
        return this.data;
    }

    private async searchHandler() {
        this.apiCall();
    }

    private buttonClickHandler() {
        this.$emit('search', this.searchInput.value);
    }
}

// const ancestor = document.querySelector('my-search') as HTMLBodyElement;
// const descendent = ancestor.querySelector('my-search') as HTMLBodyElement;
// specialColor.setValueFor(ancestor, "#FFFFFF");
// specialColor.setValueFor(descendent, "#F7F7F7");



