/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-adroll',

  contentFor: function(type, config) {
    var adrollEnabled = config.adroll && config.adroll.enabled;

    if (type === 'head-footer' && adrollEnabled && config.adroll.adv_id && config.adroll.pix_id) {
      return [
        '<script type="text/javascript">',
        'adroll_adv_id="' + config.adroll.adv_id + '";',
        'adroll_pix_id="' + config.adroll.pix_id + '";',
        (config.adroll.email !== undefined ? 'adroll_email = "' + config.adroll.email + '";' : ''),
        '!function(){var a=function(){if(document.readyState&&!/loaded|complete/.test(document.readyState))return void setTimeout(a,10);if(!window.__adroll_loaded)return __adroll_loaded=!0,void setTimeout(a,50);var b=document.createElement("script"),c="https:"==document.location.protocol?"https://s.adroll.com":"http://a.adroll.com";b.setAttribute("async","true"),b.type="text/javascript",b.src=c+"/j/roundtrip.js",((document.getElementsByTagName("head")||[null])[0]||document.getElementsByTagName("script")[0].parentNode).appendChild(b)};window.addEventListener?window.addEventListener("load",a,!1):window.attachEvent("onload",a)}();',
        '</script>'
      ].join('');
    }
  }
};
