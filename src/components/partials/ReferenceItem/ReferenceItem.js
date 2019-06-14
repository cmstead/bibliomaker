const dependencies = [
    '__container' 
];

function ReferenceItem({
    __container
}) {
    return __container.copyProps(
        {
            name: 'ReferenceItem',
            props: ['url']
        },
        ReferenceItem
    );
}

ReferenceItem['@dependencies'] = dependencies;

export default {
    name: 'ReferenceItem',
    value: ReferenceItem
};