const dependencies = [
    '__container',
    'broadcastDataService',
    'dataModelKeys',
    'ReferenceForm',
    'ReferenceList'
];

function Bibliomaker({
    __container,
    broadcastDataService,
    dataModelKeys,
    ReferenceForm,
    ReferenceList
}) {
    const urlsKey = dataModelKeys.URLS;

    return __container.copyProps(
        {
            name: 'Bibliomaker',
            components: {
                ReferenceForm: ReferenceForm,
                ReferenceList: ReferenceList
            },
            data: function () {
                const updateUrlsData = urls => this.urls = urls;
                broadcastDataService
                    .subscribe(urlsKey, updateUrlsData);

                return {
                    urls: broadcastDataService.getValue(urlsKey)
                };
            }
        },
        Bibliomaker
    );
}

Bibliomaker['@dependencies'] = dependencies;

export default {
    name: 'Bibliomaker',
    value: Bibliomaker
};