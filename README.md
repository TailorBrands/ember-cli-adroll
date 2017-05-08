# Ember-cli-adroll [![Ember Observer Score](https://emberobserver.com/badges/ember-cli-adroll.svg)](https://emberobserver.com/addons/ember-cli-adroll)

This ember-cli addon injects adroll pixel into index.html.

## Installation

`ember install ember-cli-adroll`

## Configuration

This plugin uses the ember-cli project's configuration as defined in `config/environment.js`.

Add your adroll advertiser id and pixel id to `config/environment.js` and you're good to go.
Optionally you can add your adroll email.

```js
// environment.js

    ENV.adroll = {
        enabled: true,
        adv_id: 'XXXXXXXXXXXXXXXXXXXXXX',
        pix_id: 'XXXXXXXXXXXXXXXXXXXXXX',
        email: 'me@example.com'
    }
```

## Disabling per environment

You can disable injecting adroll into different environments by setting the
development param to true:

```js
// environment.js

if (environment === 'test') {
  ENV.adroll = {
    enabled: false
  }
}
```

## Disclaimer

This is completely unofficial and is not related to Adroll in any way.

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## About Tailor Brands
[Check us out!](https://www.tailorbrands.com)
