module.exports = {
  scenarios: [
    {
      name: 'default',
      npm: {
        devDependencies: {}
      }
    },
    {
      name: 'ember-1-12',
      bower: {
        dependencies: {
          'ember': '~1.12.0'
        },
        resolutions: {
          'ember': '~1.12.0'
        }
      }
    },
    {
      name: 'ember-1-13',
      bower: {
        dependencies: {
          'ember': '~1.13.0'
        },
        resolutions: {
          'ember': '~1.13.0'
        }
      }
    },
    {
      name: 'ember-2-0',
      bower: {
        dependencies: {
          'ember': '~2.0.0'
        },
        resolutions: {
          'ember': '~2.0.0'
        }
      }
    },
    {
      name: 'ember-2-1',
      bower: {
        dependencies: {
          'ember': '~2.1.0'
        },
        resolutions: {
          'ember': '~2.1.0'
        }
      }
    },
    {
      name: 'ember-2-2',
      bower: {
        dependencies: {
          'ember': '~2.2.0'
        },
        resolutions: {
          'ember': '~2.2.0'
        }
      }
    },
    {
      name: 'ember-2-3',
      bower: {
        dependencies: {
          'ember': '~2.3.0'
        },
        resolutions: {
          'ember': '~2.3.0'
        }
      }
    },
    {
      name: 'ember-2-4',
      bower: {
        dependencies: {
          'ember': '~2.4.0'
        },
        resolutions: {
          'ember': '~2.4.0'
        }
      }
    },
    {
      name: 'ember-2-5',
      bower: {
        dependencies: {
          'ember': '~2.5.0'
        },
        resolutions: {
          'ember': '~2.5.0'
        }
      }
    },
    {
      name: 'ember-2-6',
      bower: {
        dependencies: {
          'ember': '~2.6.0'
        },
        resolutions: {
          'ember': '~2.6.0'
        }
      }
    },
    {
      name: 'ember-2-8',
      bower: {
        dependencies: {
          'ember': '~2.8.0'
        },
        resolutions: {
          'ember': '~2.8.0'
        }
      }
    },
    {
      name: 'ember-2-9',
      bower: {
        dependencies: {
          'ember': '~2.9.0'
        },
        resolutions: {
          'ember': '~2.9.0'
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      },
      npm: {
        devDependencies: {
          'ember-source': null
        }
      }
    }
  ]
}
