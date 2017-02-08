import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  modelObject: Ember.Object.create(),
  beforeModel: function(){
    this.set('basePath', Ember.getOwner(this).get('application').get('basePath'));
    this.set('onFileSelect', Ember.getOwner(this).get('application').get('onFileSelect'));
    this.set('app', Ember.getOwner(this).get('application'));
  },
  model: function() {
    this.get('modelObject').showSpinner = true;
    return this.get('ajax').request(this.get('basePath') + '/list', {contentType: 'application/json'}).then(response =>{
      this.get('modelObject').set('paths',[]);
      this.get('modelObject').data = [];
      this.get('modelObject').data.pushObjects(response);
      this.get('modelObject').set('showSpinner', false);
      return this.get('modelObject');
    });
  },
  updateModel: function(){
    this.get('modelObject').set('showSpinner', true);
    let param = this.get('modelObject').get('paths').map(function(path){
      return path.name;
    }).join('/');
    this.get('ajax').request(this.get('basePath') + '/list', {
        data: {'path': param},
        contentType: 'application/json'
      }).then(response =>{
        this.get('modelObject').data.clear().pushObjects(response);
        this.get('modelObject').set('showSpinner', false);
    });
  }.observes("modelObject.paths.[]"),
  actions: {
    selectFolder(model){
        this.get('modelObject').get('paths').pushObject(model);
        this.get('modelObject').data.clear();
    },
    selectFile(model){
        this.send('triggerOnSelectFile', model.url);
    },
    selectLevel(index){
        this.get('modelObject').set('paths', this.get('modelObject').get('paths').slice(0, index+1));
        this.get('modelObject').data.clear();
    },
    didSelectFiles(files){
        this.get('modelObject').set('showSpinner', true);
        let file = files[0];
        if (!(/^image\//.test(file.type))){
            alert('Currently only image uploads are supported.');
            return;
        }

        let data = new FormData();
        data.append("file", file);
        return this.get('ajax').post(this.get('basePath') + '/upload', {
            dataType: "text",
            data: data,
            enctype: 'multipart/form-data',
            cache: false,
            contentType: false,
            processData: false
        }).then(response => {
            this.send('triggerOnSelectFile', response);
        }).catch(function(error) {
            alert(error);
            this.get('modelObject').set('showSpinner', false);
        });
    },
    triggerOnSelectFile(url){
        this.get('modelObject').set('showSpinner', false);
        this.get('onFileSelect')(url);
        this.send('close');
    },
    close(){
        this.get('app').destroy();
    }
  }
});
