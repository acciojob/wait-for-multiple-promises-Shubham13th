 const initialTime = Date.now();

    function createPromise(name) {
      const delay = Math.floor(Math.random() * 3 + 1) * 1000; // random 1-3 sec
      const start = Date.now();
      return new Promise((resolve) => {
        setTimeout(() => {
          const timeTaken = ((Date.now() - start) / 1000).toFixed(3);
          resolve({ name, time: timeTaken });
        }, delay);
      });
    }

    Promise.all([createPromise("Promise 1"), createPromise("Promise 2"), createPromise("Promise 3")])
      .then((results) => {
        const tbody = document.getElementById("output");
        tbody.innerHTML = ""; // remove Loading row

        results.forEach((res) => {
          tbody.innerHTML += `<tr>
                                <td>${res.name}</td>
                                <td>${res.time}</td>
                              </tr>`;
        });

        const totalTime = ((Date.now() - initialTime) / 1000).toFixed(3);
        tbody.innerHTML += `<tr>
                              <td>Total</td>
                              <td>${totalTime}</td>
                            </tr>`;
      })
      .catch((err) => console.error("Error:", err));
