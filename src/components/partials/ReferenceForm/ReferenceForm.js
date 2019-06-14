const dependencies = [
    '__container',
    'referenceUpdateService'
];

function ReferenceForm({
    __container,
    referenceUpdateService
}) {
    return __container.copyProps(
        {
            name: 'ReferenceForm',

            data: function () {
                return {
                    url: ''
                };
            },

            methods: {
                clearUrl: function () {
                    this.url = '';
                },

                resetFocus: function () {
                    this.$refs.refinput.focus();
                },

                saveReference: function () {
                    referenceUpdateService.addReference(this.url);

                    this.clearUrl();
                    this.resetFocus();
                }
            }
        },
        ReferenceForm
    );
}

ReferenceForm['@dependencies'] = dependencies;

export default {
    name: 'ReferenceForm',
    value: ReferenceForm
};