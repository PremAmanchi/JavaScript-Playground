function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting customer...");
      resolve({
        id: id,
        name: "Prem Kumar",
        isGold: true,
        email: "email",
      });
    }, 1000);
  });
}

function getTopMovies(customer) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 1000);
  });
}

function sendEmail(movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("sending email......");
      resolve();
    }, 1000);
  });
}

async function completeCustomer() {
  try {
    const customer = await getCustomer(1);

    if (customer.isGold) {
      const movies = await getTopMovies(customer);
      console.log("Top movies: ", movies);
      await sendEmail(movies);
      console.log("Email sent...");
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function final() {
  console.log("Before....");
  await completeCustomer();
  console.log("After....");
}

final();
