import module0 from '../src/dependencies/constants/dataModelKeys';
import module1 from '../src/dependencies/core/router';
import module2 from '../src/dependencies/services/broadcastDataService';
import module3 from '../src/dependencies/services/dataInitializationService';
import module4 from '../src/dependencies/services/referenceUpdateService';
import module5 from '../src/dependencies/wrapped-dependencies/Router';
import module6 from '../src/dependencies/wrapped-dependencies/Vue';
import module7 from '../src/components/core/App/App.vue';
import module8 from '../src/components/core/Bibliomaker/Bibliomaker.vue';
import module9 from '../src/components/partials/ReferenceForm/ReferenceForm.vue';
import module10 from '../src/components/partials/ReferenceItem/ReferenceItem.vue';
import module11 from '../src/components/partials/ReferenceList/ReferenceList.vue';


const container = window.dject.new({
    dependenciesAsObject: true
});


container.copyProps(module0.value, module0);
container.register(module0.value, module0.name);

container.copyProps(module1.value, module1);
container.register(module1.value, module1.name);

container.copyProps(module2.value, module2);
container.register(module2.value, module2.name);

container.copyProps(module3.value, module3);
container.register(module3.value, module3.name);

container.copyProps(module4.value, module4);
container.register(module4.value, module4.name);

container.copyProps(module5.value, module5);
container.register(module5.value, module5.name);

container.copyProps(module6.value, module6);
container.register(module6.value, module6.name);

container.copyProps(module7.value, module7);
container.register(module7.value, module7.name);

container.copyProps(module8.value, module8);
container.register(module8.value, module8.name);

container.copyProps(module9.value, module9);
container.register(module9.value, module9.name);

container.copyProps(module10.value, module10);
container.register(module10.value, module10.name);

container.copyProps(module11.value, module11);
container.register(module11.value, module11.name);


window.appContainer = container;

export default container;