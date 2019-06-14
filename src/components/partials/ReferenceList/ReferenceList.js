const dependencies = [
    '__container',
    'ReferenceItem'
];

function ReferenceList({
    __container,
    ReferenceItem
}) {
    return __container.copyProps(
        {
            name: 'ReferenceList',
            components: {
                ReferenceItem: ReferenceItem
            },
            props: ['urls']
        },
        ReferenceList
    );
}

ReferenceList['@dependencies'] = dependencies;

export default {
    name: 'ReferenceList',
    value: ReferenceList
};