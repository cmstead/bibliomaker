const dependencies = [];

function broadcastDataService() {
    const subscribers = [];
    const dataValues = {};

    function subscribe(key, onChangeHandler) {
        subscribers.push({
            key: key,
            onChangeHandler: onChangeHandler
        });
    }

    function broadcastData() {
        subscribers.forEach(
            function(handlerObject) {
                const onChangeHandler = handlerObject.onChangeHandler;
                const key = handlerObject.key;

                if(key === '#') {
                    onChangeHandler(dataValues)
                } else {
                    onChangeHandler(dataValues[key]);
                }
            }
        );
    }

    function setValue(key, value) {
        dataValues[key] = value;
        broadcastData();
    }

    function updateValue(key, updater) {
        dataValues[key] = updater(dataValues[key]);
        broadcastData();
    }

    function getValue(key) {
        return dataValues[key];
    }

    function setDefaultValue(key, value) {
        if(typeof dataValues[key] === 'undefined') {
            dataValues[key] = value;
        } else if(typeof dataValues[key] !== typeof value) {
            throw new Error(`Value at ${key} is already defined with type ${typeof dataValues[key]}, cannot define default value ${value}`);
        }
    }

    return {
        getValue: getValue,
        setDefaultValue: setDefaultValue,
        setValue: setValue,
        subscribe: subscribe,
        updateValue: updateValue
    };
}

broadcastDataService['@dependencies'] = dependencies;
broadcastDataService['@singleton'] = true;

export default {
    name: 'broadcastDataService',
    value: broadcastDataService
};