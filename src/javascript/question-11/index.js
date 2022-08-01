const printOneJob = () => new Promise( (resolve, reject) => {
  setTimeout(() => {
    return resolve("This job has been printed.", 200);
  })
});

const printAnotherJob = () => new Promise( (resolve, reject) => {
  setTimeout(() => {
    return reject("Another job hasn't been printed : there is no paper in the printer anymore.", 450);
  })
});

// initial
// const printJobs = () => {
//   printOneJob().then((result) => {
//     return printAnotherJob();
//   }).then((result) => {
//     return result;
//   }).catch((error) => {
//     console.warn(error);
//   });
// }

// rewritten
const printJobs = async () => {
  try {
    const oneJob = await printOneJob();
    try {
      const anotherJob = await printAnotherJob();
      return anotherJob;
    } catch (anotherError) {
      console.log(anotherError);
    }
  } catch (error) {
    console.log(error);
  }
}
printJobs();

