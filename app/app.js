import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;


Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    rootElement: '#file-manager',
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    ready: function() {
      this.set('basePath', Ember.$(this.get('rootElement')).data('basePath') || '/admin/files');
      this.set('onFileSelect', Ember.$(this.get('rootElement')).data('onFileSelect') || function(){console.log("Please specify an onFileSelect(url) callback function");});
    },
    Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
