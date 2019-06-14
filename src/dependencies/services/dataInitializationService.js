const dependencies = [
    'broadcastDataService',
    'dataModelKeys'
];

function dataInitializationService({
    broadcastDataService,
    dataModelKeys
}) {
    function initializeData() {
        broadcastDataService
            .setDefaultValue(dataModelKeys.URLS, []);
    }

    return {
        initializeData: initializeData
    };
}

dataInitializationService['@dependencies'] = dependencies;

export default {
    name: 'dataInitializationService',
    value: dataInitializationService
}