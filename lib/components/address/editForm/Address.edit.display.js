export default [
    {
        key: 'labelPosition',
        ignore: true,
    },
    {
        weight: 20,
        type: 'checkbox',
        input: true,
        key: 'enableManualMode',
        label: 'Enable Manual Mode',
        tooltip: 'Should Manual Mode be enabled for that component or not.',
        customConditional: function (_a) {
            var data = _a.data;
            return !data.multiple;
        },
    },
    {
        weight: 30,
        type: 'textfield',
        input: true,
        key: 'switchToManualModeLabel',
        label: 'Switch To Matual Mode Label',
        placeholder: 'Switch To Matual Mode Label',
        tooltip: 'The label for the checkbox used to switch to manual mode.',
        validate: {
            required: true,
        },
        customConditional: function (_a) {
            var data = _a.data;
            return Boolean(data.enableManualMode);
        },
    },
    {
        weight: 40,
        type: 'checkbox',
        input: true,
        key: 'disableClearIcon',
        label: 'Disable Clear Icon',
        tooltip: 'Clear Icon allows easily clear component\'s value.',
    },
    {
        type: 'textfield',
        label: 'Add Another Text',
        key: 'addAnother',
        tooltip: 'Set the text of the Add Another button.',
        placeholder: 'Add Another',
        weight: 410,
        input: true,
        customConditional: function (_a) {
            var data = _a.data;
            return data.multiple;
        },
    },
];