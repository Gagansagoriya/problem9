exports.getAbsolutePath = (filePath) => {
  const path = require('path');

  // Use the provided filePath parameter
  const filePathResolve = path.resolve(filePath);

  console.log(filePathResolve);

// Return the resolved absolute path

  return filePathResolve; 
};
