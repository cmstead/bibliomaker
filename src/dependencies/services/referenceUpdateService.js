const dependencies = [
    'broadcastDataService',
    'dataModelKeys'
];
function referenceUpdateService({
    broadcastDataService,
    dataModelKeys
}) {
    function addReference(url) {
        const urlIsNotEmpty = url.trim() !== '';

        if (urlIsNotEmpty) {
            const urlsKey = dataModelKeys.URLS;
            const updateUrls = (urls) => urls.concat([url]);

            broadcastDataService.updateValue(urlsKey, updateUrls);
        }
    }

    return {
        addReference: addReference
    }
}

referenceUpdateService['@dependencies'] = dependencies;

export default {
    name: 'referenceUpdateService',
    value: referenceUpdateService
};