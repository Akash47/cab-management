const connectDB = async () => {
  try {
   
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

module.exports = { connectDB };
