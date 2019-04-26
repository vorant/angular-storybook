import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Button } from '@storybook/angular/demo';

storiesOf('Addons | Accessibility', module)
    .add('Accessible', () => ({
        template: `
            <button>
                Accessible button
            </button>
            <br>
            <a href="#" aria-label="Accessible Link">Accessible Link</a>
            <br>
            <div id="target" role="link" aria-label="next page &nbsp ">next page</div>
            <br>
            <input aria-label="checkbox" type="checkbox">
            <br>
            <img alt="Demo image"> 

        `
    }))
    .add('Inaccessible', () => ({
        template: `
            <button style="background-color: red; color: darkRed">
                Inaccessible button
            </button>
            <a >Inaccessible Link</a>
            <span role="link">No aria-label</span>
            <input type="checkbox"> 
            <img>

        `
    }));
