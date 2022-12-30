const sealLog = () => {
  if (process.env.NODE_ENV === 'production') {
    // https://dev.to/kevinlien/the-simple-way-to-remove-js-console-logs-in-production-ene
    console.log = function () {}
  }
}

export { sealLog }
