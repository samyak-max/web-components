import { html } from '@microsoft/fast-element';
import { MultiResults } from '.';

export const template = html<MultiResults>`
  <template>
    <div class="total-label"><slot></slot>:</div>

    <span class="controls">
      <div class="base">
        <div class="toolName">Covid</div>
        <div class="toolDis">Description....</div>
      </div>
    </span>
  </template>
`;
