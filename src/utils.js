import multer from "multer";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname + "/public"));    // El join()función para combinar dos rutas, Aca seteamos el destino de la de los archivos que suba es es __dirname(la ruta absoluta C:/src/public...) y la carpeta donde se sube todo.
    },

    filename: (req, file, cb) => {
        cb(null, file.originalname);        // En esta linea ponemos el nombre del archivo original.
    },
});

export const ulploader = multer({ storage });


/* ----------------- DIRNAME ------------ */

// https://flaviocopes.com/fix-dirname-not-defined-es-module-scope/
import path from "path";
import { fileURLToPath } from "url";
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


/* ----------------- Levantamos el Cliente para la Base de Datos en Mongo Atlas en la Nube ------------- */
 /* ----------------- MONGOOSE ------------ */

 import { connect, Schema, model } from "mongoose";
 import faker from 'faker';   // Es una libreria que agrega info aleatoria, lo usamos para generar usuarios
 
 import { UserModel } from "./DAO/models/users.model.js";
 export async function connectMongo() {
   try {     
                     // Con el try intenta conectarse al string 
     await connect(
       /* PONER TU STRING ENTERO ACA DE LA OPCION DRIVER */
       // Podemos crear la base de datos desde aca luego del mongodb.net/ depues va el nombre de la base
       "mongodb+srv://tomasmagnin:wRHD9t0bpXzg74iX@backendcoder.tsh7jee.mongodb.net/ecommerce?retryWrites=true&w=majority"
       );
 
     console.log("plug to mongo!");          // Si sale bien imprimimos.
 
       //const res = await UserModel.find();   // Recorremos todos los usuarios en la base usando el metodo find de mogo con el Schema de Usuarios.
       //console.log(res);
 
       //const res = await UserModel.paginate({firstName: "Erica"}, {limit: 1, page: 2})   // El primer parametro hace referencia al find, el segundo parametro hace referencia a las condiciones
       //console.log(res);                                                                 // Con el limite podemos agrupar los resultados por paginas. en este caso dun resultado por pagina  
                                                                                         // Con page, mostramos que pagina mostrar.
                                                                                         // El campo Docs nos muestra los resultados de la busqueda.     
 /* ---------------------------------------------------------------------------------------------- */
       // Ejemplos con Stages de Clase
 
       /* const res = await UserModel.paginate({}, { limit: 10, page: 1 });
     console.log(res); */
     /*  const res = await OderModel.aggregate([
           {                         // Stage 1.
             $match:                 // Buscamos los que machean con los que tienen el campo size en medium.
               {
                 size: 'medium',     // Dejamos solo MEDIUM.
               },
           },
          // console.log(res),
 
           {                                     // Stage 2.
             $group:   
               {
                 _id: '$name',                   // Agrupamos por nombre los repetidos.
                 totalQuantity:    
                   {
                     $sum: '$quantity',          // Sumamos la cantidad de pedidos.
                   },
               },
           },
 
           {                                     // Stage 3.        
             $sort: {                            // Los ordenamos de mayor a menor por cantidad.
               totalQuantity:
                 -1,
             },
           },
           
           {                                     // Stage 4.  
             $group:                             // Agrupamos en un array
               {
                 _id: 1,
                 orders:                             // Creamos el Documento la orden en la DB.
                   {
                     $push:'$$ROOT',                 // Este root significa todos.
                   },                                // Pusheamos todo lo que hay en los documentos previos.
               },
           },
 
           {                                         // Stage 5.
             $project:                               // Este operador genera un documento nuevo.
               {
                 _id: 0,                             // Como mandamos ID = 0, mongo genera el ID.
                 orders:'$orders',                   // Introducimos el arrray de ordenes generado anteriormente.
               },
           },
           {                                         // Stage 6.
             $merge:                                 // Mergeamos om mostramos todo dentro de reportes.
               {
                 into: 'reports',
               },
           },
 
         ]); */
           
         /*
         
     console.log(JSON.stringify(res, null, 2)); */
     /* const res = await OderModel.find({});
 
 
 
 
 let result = await OderModel.insertMany([
     { name: 'Pepperoni', size: 'medium', price: 19, quantity: 10, date: '2021-01-13T08:14:30Z' },
     { name: 'Cheese', size: 'medium', price: 13, quantity: 3, date: '2022-01-12T21:23:13.331Z' },
     { name: 'Vegan', size: 'medium', price: 18, quantity: 3, date: '2021-01-13T05:10:13Z' },
 ]);
 
 
 
 /* ---------------------------------------------------------------------------------------------- */
     // Creamos estudiantes em la base  
     /* const created = StudentsModel.create({
           first_name: 'Tomas',
           last_name: 'Magnin',
           email: 'tomas@g.com',
           gender: 'Masculino',
           courses: [],
         }); */
 /* ---------------------------------------------------------------------------------------------- */
     // Buscamos todos los estudiantes    
     /* let student = await StudentsModel.find({});
     console.log(JSON.stringify(student, null, 2)); */
 /* ---------------------------------------------------------------------------------------------- */
     // Buscamos todos los estudiantes pero con populacion, lo que hace es mostrar los objetos del array. El populate es lo que seria un join en base detos 
     /* let student = await StudentsModel.findOne({ _id: '6486546bf4073538f3641ac4' }); .populate('courses.course');   
     console.log(JSON.stringify(student, null, 2)); */
 
 /* ---------------------------------------------------------------------------------------------- */
     // Insertamos un curso en el estudiande indicado en el ID.  
     /* let student = await StudentsModel.findOne({ _id: '6486546bf4073538f3641ac4' });      // Buscamos un estudiante por si ID.
     student.courses.push({ course: '648658fdcc7df990f10dbd87' });                           // Le introducimos en curso, con el ID del curso. 
     
     let res = await StudentsModel.updateOne({ _id: '6486546bf4073538f3641ac4' }, student);  // Devolvemos el Usuario a la base con el curtso actualizado.
     console.log(res); */
 
     
 /* ---------------------------------------------------------------------------------------------- */
     // Creamos Cursos em la base.       
 
     /* const created = CoursesModel.create({
       topics: ['web', 'software', 'React'],
       students: [],
       title: 'React',
       description: 'wonderfull React course',
       dificulty: 5,
       professor: 'guile',
     }); */
 
 /* ---------------------------------------------------------------------------------------------- */
     // Crear usuarios Aleatorios
     // EJECUTAR UNA VEZ, por cada ejecucion creara 500 usuarios.
     
       /* (async () => {
       const users = [];                       // Iniciamos el array
       for (let i = 0; i < 500; i++) {         // Los usuarios que van de 1 a 3000.
         users.push({                          // Pusheamos los datos
           firstName: faker.name.firstName(),  // Con la libreria faker creamos el nobre y demas cosas.
           lastName: faker.name.lastName(),
           email: faker.internet.email(),
         });
       }
 
       try {
         await UserModel.insertMany(users);      // Llamando  userModel insertamos los usuarios en la base de dato
 
         console.log('Inserted', users.length, 'users');
       } catch (error) {
         console.error('Error en insert many:', error);
       }
     })(); */
 /* ---------------------------------------------------------------------------------------------- */
     // Buscamos los usuarios que tengan como apellido "fergiani", y con explain muestra las estadisticas.
     /* let res = await UserModel.find({ lastName: 'Momiii' }).explain('executionStats');   
     console.log(res); */
 /* ---------------------------------------------------------------------------------------------- */
 
   } catch (error) {
     console.log(error);
     throw "can not connect to the db";      // Si sale mal imprimimos este otro
   }
 }
 
 
 
 
 /* ----------------- SOCKET ------------ */
 import { Server } from "socket.io";                 // Importamos el servidor Socket.
 import { MsgModel } from "./DAO/models/msgs.model.js";
 import { StudentsModel } from "./DAO/models/students.model.js";
 import { CoursesModel } from "./DAO/models/courses.model.js";
 import { OderModel } from "./DAO/models/oder.model.js";
 
 export function connectSocket(httpServer) {         // El servidor Socket toma como argumento a un servidor HTTP existente, al cual se conecta
 const socketServer = new Server(httpServer);        // Creamos un nuevo objeto servidor de Socket y lo guardamos en una variable. El objeto es una representacion del servidor socket. 
 
 // Creamos en nuevo servidor de Socket y lo guardamos en una variable. Le pasamos al servidor de socket el servidor de HTTP.
 // Toda la configuracion de a partir de esta linea es la del Backend.
   
 // let msgs = [];    // Asignamos un array vacio a los mensajes
 
 /* socketServer.on es para cuando llega un Mensaje
 socketServer.emit es para enviar un msj. */
 
 socketServer.on("connection", (socket)=> {  // Cada vez que se crea y conecta un socket en el front para comunicar al back se creak un socket.
     // Back Recibe 
         socket.on("msg_front_to_back", async (msg) => {    // Recivimos lo que emitio front, el nombre tiene que ser igual que el del emit del front para escucharlo en este caso "msj_front_to_back".
             /* console.log(msg);   // Este log lo vemos en el eitor de texto.
             if(msgs.length == 10) {
                 msgs = [];
             } */
           //  msgs.unshift(msg);    // Guardamos en el primer posision del array.
     
               let result = await OderModel.insertMany();
 
               const msgCreated = await MsgModel.create(msg);     // En caso de que los datos ingresados estuvieran correctos, usamos userModdel  
               const msgs = await MsgModel.find({});
               // Cuando respondemos con socketServer les respondemos a todos los socket, a diferencia de usar socket solametne,
               socketServer.emit( "msg_back_to_front", msgs ); //Le enviamos el array con mensajes a todos  
         });
     });
 }
 
 
 
 /* -------------------------------------------- Paginación --------------------------------------------- */
 
 // Permite fraccionar los datos en paginas y tambien indicar que pagina sigue, osea entrega los datos en paginas.
 
 // npm i mongoose-paginate-v2