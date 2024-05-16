export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const thisObject = {
      status: 200,
      body: 'Success',
    };

    if (success) {
      resolve(thisObject);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
