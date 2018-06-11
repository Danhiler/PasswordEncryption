import * as express from 'express';

import * as cors from 'cors';
import {userRouter} from './userRouter';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>res.send("Hello World"));

app.use('/users', userRouter);



// app.use('/users',function (req, res) {
//     res.send('Got a PUT request at /user')
// } );

app.listen(3001, () => console.log('Example app listening on port 3001!'));