module.exports = ({ env }) => ({
  scheduler: {
    enabled: true,
    config: {
      model: 'scheduler',
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See Config section.
    },
  },
  'content-versioning': {
    enabled: true,
  },
});
