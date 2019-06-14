const dependencies = [
    '__container',
    'Bibliomaker'
];

function App({
    __container,
    Bibliomaker
}) {
    return __container.copyProps(
        {
            name: 'App',
            components: {
                Bibliomaker: Bibliomaker
            }
        },
        App
    );
}

App['@dependencies'] = dependencies;

export default {
    name: 'App',
    value: App
};