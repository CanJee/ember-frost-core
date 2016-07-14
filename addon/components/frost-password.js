// import _ from 'lodash'
import Ember from 'ember'
const {
  next,
  schedule
} = Ember.run
import FrostText from 'ember-frost-core/components/frost-text'
// import computed, {readOnly} from 'ember-computed-decorators'

export default FrostText.extend({

  // == Properties ============================================================
  attributeBindings: [
    'type'
  ],
  classNames: [
    'frost-password'
  ],
  // classNameBindings: ['revealable'],
  isCapsOn: false,
  isRevealerVisible: false,
  revealable: false,
  revealed: false,
  tabindex: 0,
  type: 'password',

  // ==========================================================================
  // Computed Properties
  // ==========================================================================

  // @readOnly
  // @computed('isCapsOn', 'isRevealerVisible', 'revealable')
  // isCapsAndReveal (isCapsOn, isRevealerVisible, revealable) {
  //   return revealable && isCapsOn && isRevealerVisible
  // },

  // == Event hooks ============================================================

  didInsertElement() {
    this._super(...arguments)

    if (this.attrs.revealable) {
      schedule('render', this, function () {
        this.$()
          .after(`
            <svg class='frost-password-reveal' viewBox="0 0 21.6 20" xmlns="http://www.w3.org/2000/svg">
              <g class='hidden'>
                <path fill="#B3B3B3" d="M20.7,11.4c-3.6-4.1-7.3-6-10.8-5.7c-5.3,0.4-8.7,5.6-8.7,5.6l-1-0.7c0.2-0.2,3.8-5.7,9.6-6.2
                  c4-0.3,8,1.7,11.9,6.1L20.7,11.4z"/>
                <path fill="#B3B3B3" d="M10.7,5c-2.8,0-5.1,2.3-5.1,5.1s2.3,5.1,5.1,5.1c2.8,0,5.1-2.3,5.1-5.1S13.5,5,10.7,5z M13,10.1
                  c-0.8,0-1.4-0.7-1.4-1.5c0-0.8,0.6-1.5,1.4-1.5s1.4,0.7,1.4,1.5C14.4,9.5,13.8,10.1,13,10.1z"/>
              </g>
              <g class='revealed'>
                <circle fill="#B3B3B3" cx="10.7" cy="10" r="5.1"/>
                <path fill="#B3B3B3" d="M20.7,11.3c-3.6-4.1-7.3-6-10.8-5.7C4.6,6,1.2,11.1,1.2,11.2l-1-0.7c0.2-0.2,3.8-5.7,9.6-6.2
                  c4-0.3,8,1.7,11.9,6.1L20.7,11.3z"/>
                <rect x="-0.5" y="8.9" transform="matrix(-0.6087 0.7934 -0.7934 -0.6087 26.2656 7.0071)" fill="#B3B3B3" width="23.8" height="2.2"/>
                <path fill="#FFFFFF" d="M17.8,0.4L19,1.3L5,19.6l-1.1-0.9L17.8,0.4 M17.7-0.6L17.3,0l-14,18.3l-0.4,0.6l0.6,0.4l1.1,0.9l0.6,0.4
                  L5.5,20l14-18.3L20,1.1l-0.6-0.4l-1.1-0.9L17.7-0.6L17.7-0.6z"/>
              </g>
            </svg>
          `)
        next(this, function () {
          this.$().next('.frost-password-reveal').click(() => {
            this.onReveal()
          })
          this.$().next().next('.frost-text-clear').click(() => {
            this.onClear()
          })
        })
      })
    }
  },

  // == Functions ==============================================================

  onReveal() {
    this.toggleProperty('revealed')
    this.set('type', this.get('revealed') ? 'text' : 'password')
    const reveal = this.$().next('.frost-password-reveal')
    if (this.get('revealed')) {
      reveal.children('.revealed').show()
      reveal.children('.hidden').hide()
    } else {
      reveal.children('.revealed').hide()
      reveal.children('.hidden').show()
    }
  }

  // == Events ================================================================



  // focusOut: Ember.on('focusOut', function () {
  //   this.set('isCapsOn', false)
  // }),

  // keyDown: Ember.on('keyDown', function (e) {
  //   var s = e || window.e
  //   if (this.get('isCapsOn') === false && (s.which === 20 || s.keyCode === 20)) {
  //     this.set('isCapsOn', true)
  //   }
  // }),

  // keyUp: Ember.on('keyUp', function (e) {
  //   var s = e || window.e
  //   if (this.get('isCapsOn') === true && (s.which === 20 || s.keyCode === 20)) {
  //     this.set('isCapsOn', false)
  //   }
  // }),

  // keyPressed: Ember.on('keyPress', function (e) {
  //   var s = String.fromCharCode(e.which || e.keyCode)   // IE support
  //   if ((s.toUpperCase() === s && s.toLowerCase() !== s && !e.shiftKey) ||
  //     (s.toUpperCase() !== s && s.toLowerCase() === s && e.shiftKey)) { // caps is on
  //     this.set('isCapsOn', true)
  //   }
  // }),

  // _onFocus: Ember.on('focusIn', function (e) {
  //   // If an onFocus handler is defined, call it
  //   if (this.attrs.onFocus) {
  //     this.attrs.onFocus()
  //   }
  // }),

  // ==========================================================================
  // Actions
  // ==========================================================================

  // actions: {
  //   onBlur () {
  //     const onBlur = this.get('onBlur')

  //     if (onBlur) {
  //       onBlur()
  //     }
  //   },

  //   onInput (args) {
  //     this.set('isRevealerVisible', args.value.length > 0)
  //     if (_.isFunction(this.get('onInput'))) {
  //       this.get('onInput')(args)
  //     }
  //   },
  // }
})

//   {{#if isCapsAndReveal}}
//     <div class='reveal-warning'>Caps on</div>
//   {{else if isCapsOn}}
//     <div class='warning'>Caps on</div>
//   {{/if}}
