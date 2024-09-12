// promesas

// function* helloWorld() {
//   if (true) {
//     yield "Hello, ";
//   }
//   if (true) {
//     yield "World";
//   }
// };

// const generatorHello = helloWorld();
// console.log(generatorHello.next().value);
// console.log(generatorHello.next().value);
// console.log(generatorHello.next().value);


// $conn = new Promise pg_connect("host=$host port=$port dbname=$database user=$root password=$password") resolve (true) reject(false)
// $query = "SELECT * FROM public.\"user\"";
// $result = new Promise pg_query($conn, $query) resolve(res query) reject(fallo algo)


const pgConnect = () => {
  return new Promise((resolve, reject) => {
    pg_connect(`host=${host} port=${port} dbname=${database} user=${root} password=${password}`, (err, client) => {
      if (err) {
        reject(err);
      } else {
        resolve(client);
      }
    });
  }
)};

const pgQuery = (client, query) => {
  return new Promise((resolve, reject) => {
    pg_query(client, query, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}

// pgConnect()
//   .then((client) => {
//     return pgQuery(client, "SELECT * FROM public.\"user\"");
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   })

// try {
//   const con = await pgConnect();
//   const res = await pgQuery(con, "SELECT * FROM public.\"user\"");
//   console.log(res);
// } catch (error) {
//   console.error(error);
// }

const delay = (time) => new Promise((resolve, reject) => setTimeout(resolve('ok'), time));

// fetch('http://jsonplaceholder.typicode.com/todos/10')
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//     return delay(1000);
//   })
//   .then(del => console.log('Este mensaje se muestra después de 10 segundos'))
//   .catch(err => console.error(err));

// const main = async () => {
//   try {
//     const request = await fetch('http://jsonplaceholder.typicode.com/todos/10');
//     const response = await request.json();
//     await delay(2000);
//     console.log('Este mensaje se muestra después de 2 segundos');
//   } catch (error) {
//     console.error(error);
//   }
// }
// const main = async () => {
//   try {
//     const employee = await fetch('http://10.10.01.01/employees/1');
//     const dep = await fetch(`http://10.10.01.01/dep/${employee.dep_id}`);
//     const position = await fetch(`http://10.10.01.01/position/${employee.dep_id}`);
//     console.log(dep, position);
//   } catch (error) {
//     console.error(error);
//   }
// }

// const main = async () => {
//   const response = await Promise.allSettled([delay(10000), delay(2000), delay(3000), delay(4000)]);
//   console.log(response);
// }

// main();