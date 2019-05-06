import { storiesOf, moduleMetadata } from '@storybook/angular';
import {
    boolean,
    number,
    text,
    color,
    object,
    date,
    array,
    select,
    radios,
    // options,
    optionsKnob as options,
    button,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Examples | Knobs', module)
    .addDecorator(withKnobs)
    .add('All cases', () => ({
        template: `<ul>
                <li>text: <b>{{text}}</b></li>
                <li>boolean: <b>{{bool}}</b></li>
                <li>number: <b>{{number}}</b></li>
                <li>range: <b>{{range}}</b></li>
                <li>color: <b>{{color}}</b></li>
                <li>object: <b>{{object}}</b></li>
                <li>array: <b>{{array}}</b></li>
                <li>select: <b>{{select}}</b></li>

                <li>radios: <b>{{radios}}</b></li>
                <li>options: <b>{{options}}</b></li>
                <li>date: <b>{{date | date:'medium'}}</b></li>
                <li>button: <b>{{button}}</b></li>
            </ul>
            `,
        props: {
            text: text('text', 'My text'),
            bool: boolean('boolean', false),
            number: text('number', 8),
            range: (() => {
                const label = 'Range: Temperature';
                const defaultValue = 73;
                const options = {
                    range: true,
                    min: 60,
                    max: 90,
                    step: 1
                };
                const groupId = 'GROUP-ID1';

                return number(label, defaultValue, options, groupId);
            })(),
            color: (() => {
                const label = 'Color';
                const defaultValue = '#ff00ff';
                const groupId = 'GROUP-ID1';

                return color(label, defaultValue, groupId);
            })(),
            object: (() => {
                const label = 'Object: Styles';
                const defaultValue = {
                    backgroundColor: 'red'
                };
                const groupId = 'GROUP-ID1';

                return object(label, defaultValue, groupId);
            })(),
            array: (() => {
                const label = 'Array: Styles';
                const defaultValue = ['Red'];
                const separator = ':';
                return array(label, defaultValue, separator);
            })(),
            select: (() => {
                const label = 'Select: Colors';
                const options = {
                    Red: 'red',
                    Blue: 'blue',
                    Yellow: 'yellow',
                    Rainbow: ['red', 'orange', 'etc'],
                    None: null
                };
                const defaultValue = 'red';
                const groupId = 'GROUP-ID1';

                return select(label, options, defaultValue, groupId);
            })(),
            radios: (() => {
                const label = 'Radios: Fruits';
                const options = {
                    Kiwi: 'kiwi',
                    Guava: 'guava',
                    Watermelon: 'watermelon'
                };
                const defaultValue = 'kiwi';

                return radios(label, options, defaultValue);
            })(),
            options: (() => {
                const label = 'Options: Fruits';
                const valuesObj = {
                    Kiwi: 'kiwi',
                    Guava: 'guava',
                    Watermelon: 'watermelon'
                };
                const defaultValue = 'kiwi';
                const optionsObj = {
                    display: 'multi-select'
                };
                // radio, inline-radio, check, inline-check, select, multi-select

                return options(label, valuesObj, defaultValue, optionsObj);
            })(),
            date: (() => {
                const label = 'Event Date';
                const defaultValue = new Date('Jan 20 2017');
                const groupId = 'GROUP-ID1';

                return date(label, defaultValue, groupId);
            })(),
            button: (() => {
                const label = 'Do Something';
                const handler = () => alert('Do something');
                const groupId = 'GROUP-ID1';

                return button(label, handler, groupId);
            })()
        }
    }));
