 
const express = require("express");
const mongoose = require("mongoose"); 
const cors = require("cors")
const path = require('path'); 
const fs = require('fs');

const studentRoutes = require('./routes/students');
const employeesRouter = require('./routes/employees');
// const userRoutes = require('./routes/userRoutes');
const PORT = 5000; 

app = (express());
const multer = require("multer");
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(express.urlencoded({extended:"true"}));

//Create uploads folder if doesn't exist
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}


//Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Upload endpoint
// app.post('/upload', upload.single('pdf'), (req, res) => {
//   res.json({ filename: req.file.filename });
// });


// Get all uploaded files
app.get('/files', (req, res) => {
  fs.readdir('./uploads', (err, files) => {
    if (err) return res.status(500).send('Error reading files');
    res.json(files);
  });
});





app.use('/studentInfos', express.static('studentInfos')); 

mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));



 



app.get("/",(req,res)=>{
    res.status(200).send(" <h1>Welcome to Mathe App </h1>");
}); 


app.use('/area/triangle', require('./routes/triangle'));
app.use('/area/square', require('./routes/square'));
app.use('/area/rectangle', require('./routes/rectangle'));
app.use("/area/rhombus", require("./routes/rhombus")); 

// Routes
app.use('/api/students', studentRoutes);

app.use('/api/employees', employeesRouter); 

app.use('/api/studentInfo', require('./routes/studentInfo')); 

app.use('/api/users', require('./routes/user'));

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
}); 