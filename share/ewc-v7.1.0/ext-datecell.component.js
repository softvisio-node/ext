//import Ext_grid_cell_Date from '@sencha/ext-runtime-base/dist/./Ext/grid/cell/Date.js';
import Ext_grid_cell_Date from './Ext/grid/cell/Date.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class EWCDatecell extends Ext_grid_cell_Date {
    constructor() {
        super ([], []);
        this.xtype = 'datecell';
    }

}
window.customElements.define('ext-datecell', HTMLParsedElement.withParsedCallback(EWCDatecell));

