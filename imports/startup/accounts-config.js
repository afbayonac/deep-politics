import { ServiceConfiguration } from 'meteor/service-configuration';
import { Meteor } from 'meteor/meteor';

ServiceConfiguration.configurations.upsert({
  service: 'facebook',
}, {
  $set: {
    appId: Meteor.settings.private.facebook.appId,
    loginStyle: 'redirect',
    secret: Meteor.settings.private.facebook.secret,
  },
});
