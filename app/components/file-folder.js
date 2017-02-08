import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["file-manager-body-item"],
  classNameBindings: ["isFolder:folder:file"],
  isFolder: function(){
    return this.get('model').type === 'folder';
  }.property('model'),
  actions: {
    selectFolder(model){
      this.sendAction('selectFolder', model);
    },
    selectFile(model){
      this.sendAction('selectFile', model);
    }
  }
});
