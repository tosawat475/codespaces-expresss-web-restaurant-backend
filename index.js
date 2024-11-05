const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 5000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE",
  );
  next();
});
app.use(express.json())

let menuItems = [
  { id: 1, name: 'สปาเกตตี้แฮมเห็ด', price: 110, image: 'https://inwfile.com/s-cy/8avqkv.jpg' },
  { id: 2, name: 'กะเพราะหมูกรอบ', price: 80, image: 'https://i.ytimg.com/vi/16Odh9KFPK0/maxresdefault.jpg' },
  { id: 3, name: 'ข้าวขาหมูเยอรมัน', price: 100, image: 'https://img.wongnai.com/p/400x0/2019/06/14/5f9da9d4fb2446548bb7aeed0ff688c2.jpg' },
  { id: 4, name: 'ข้าวหน้าเนื้อ', price: 120, image: 'https://api2.krua.co/wp-content/uploads/2022/07/RI1765_Gallery_-01.jpg' },
  { id: 5, name: 'สเต็กเนื้อ', price: 120, image: 'https://www.calforlife.com/image/food/Beefsteak.jpg' },
];

let menumain = [
  { id: 1, name: 'กะเพราะหมูกรอบ', price: 80, image: 'https://i.ytimg.com/vi/16Odh9KFPK0/maxresdefault.jpg' },
  { id: 2, name: 'หมี่กรอบผัดซีอิ๊ว', price: 60, image: 'https://img.wongnai.com/p/l/2017/11/27/de6df13f67284c978aca21e3a0c52218.jpg' },
  { id: 3, name: 'ก๋วยเตี๋ยวคั่วไก่', price: 70, image: 'https://s3-ap-southeast-1.amazonaws.com/photo.wongnai.com/photos/2017/03/29/a3b7af34297c416e90e9c1694ffd206c.jpg' },
  { id: 4, name: 'สุกี้แห้งไก่', price: 60, image: 'https://img.wongnai.com/p/l/2017/05/29/6988f264122945718442c9e258babdcb.jpg' },
  { id: 5, name: 'ข้าวหมูแดง', price: 60, image: 'https://img.wongnai.com/p/1920x0/2018/07/03/ed7ed753c9f5433fa1afa1a3bfb83796.jpg' },
  { id: 6, name: 'ข้าวหมูแดงหมูกรอบ', price: 75, image: 'https://static.thairath.co.th/media/dFQROr7oWzulq5FZX9z21BD6BkebjldCkR4f9gV00c9oK5ObfveJSI516A5C0jFDXvC.webp' },
  { id: 7, name: 'ข้าวขาหมูเยอรมัน', price: 100, image: 'https://img.wongnai.com/p/400x0/2019/06/14/5f9da9d4fb2446548bb7aeed0ff688c2.jpg' },
  { id: 8, name: 'ข้าวหน้าเนื้อ', price: 120, image: 'https://api2.krua.co/wp-content/uploads/2022/07/RI1765_Gallery_-01.jpg' },
  { id: 9, name: 'สเต็กเนื้อ', price: 120, image: 'https://www.calforlife.com/image/food/Beefsteak.jpg' },
  { id: 10, name: 'ข้าวผัดอเมริกัน', price: 115, image: 'https://img.wongnai.com/p/l/2017/05/29/8516e11c77244de6a5f6ac74faa138c5.jpg' },
  { id: 11, name: 'ข้าวหน้าหมูทอด', price: 65, image: 'https://img.wongnai.com/p/1920x0/2018/05/25/bc59677defba440b9d6a4507b903df65.jpg' },
  { id: 12, name: 'ข้าวยำไก่แซ่บ', price: 65, image: 'https://img.wongnai.com/p/1920x0/2020/11/07/95ce4ec6055a4e02a650c1c58dd41849.jpg' },
  { id: 13, name: 'หอยทอด', price: 75, image: 'https://img.wongnai.com/p/l/2017/05/29/5309d0a9b15d4907b6389b6a6787fc7e.jpg' },
  { id: 14, name: 'ข้าวน้ำพริกกะปิปลาทู', price: 75, image: 'https://img.wongnai.com/p/1920x0/2018/03/01/a47f84a3a653472cb86d4874ac22e2fe.jpg' },
  { id: 15, name: 'สปาเกตตี้แฮมเห็ด', price: 110, image: 'https://inwfile.com/s-cy/8avqkv.jpg' },
];

let menusnack = [
  { id: 1, name: 'นักเก็ต', price: 50, image: 'https://cdn8.devgodigit.net/wp-content/uploads/2021/09/30191243/051052534_F.jpg' },
  { id: 2, name: 'ไก่ทอด', price: 30, image: 'https://i.ytimg.com/vi/60xSNZvr7Ck/maxresdefault.jpg' },
  { id: 3, name: 'ไส้กรอกทอด', price: 40, image: 'https://fit-d.com/uploads/food/16cca95edc9ab6185c8720bed16ae178.jpg' },
  { id: 4, name: 'ไก่จ๊อ', price: 45, image: 'https://www.sgethai.com/wp-content/uploads/2022/09/220908-Content-%E0%B9%81%E0%B8%88%E0%B8%81%E0%B8%AA%E0%B8%B9%E0%B8%95%E0%B8%A3%E0%B9%84%E0%B8%81%E0%B9%88%E0%B8%88%E0%B9%8A%E0%B8%AD02.webp' },
  { id: 5, name: 'ชีสบอล', price: 40, image: 'https://i.ytimg.com/vi/2Sdsm37ID5Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2gtZijNMm8apP57QFeRD_dduotQ' },
  { id: 6, name: 'เกี๊ยวซ่า', price: 30, image: 'https://www.thevschool.com/wp-content/uploads/2023/04/Gyoza-Cooking-683x1024.jpg' },
  { id: 7, name: 'เฟรนฟราย', price: 40, image: 'https://cdn.discordapp.com/attachments/1141665169718648833/1287128403308183612/IMG_7190.jpg?ex=66f06b3d&is=66ef19bd&hm=694a1858eae14c5435fd50d8e43fdd999c6af7c3cc316df9dfdeff221608e955&' },
  { id: 8, name: 'หอมทอด', price: 40, image: 'https://img-global.cpcdn.com/recipes/7334986d3c4fbd44/1200x630cq70/photo.jpg' },
  { id: 9, name: 'ปอเปี๊ยะทอด', price: 35, image: 'https://i.ytimg.com/vi/0C30HVi7G80/maxresdefault.jpg' },
  { id: 10, name: 'ปลาไข่ทอดกรอบ', price: 35, image: 'https://img-global.cpcdn.com/recipes/e10d3a8aa0e43a41/1200x630cq70/photo.jpg' },
  { id: 11, name: 'หมูแดดเดียว', price: 50, image: 'https://i.ytimg.com/vi/DazMHd_V8u8/maxresdefault.jpg' },
  { id: 12, name: 'ทอดมันกุ้ง', price: 50, image: 'https://i.ytimg.com/vi/7LBG9P3jTck/maxresdefault.jpg' },
];

let menudrink = [
  { id: 1, name: 'โค้ก', price: 20, image: 'https://cdn.discordapp.com/attachments/1141665169718648833/1287129731611181056/243602419_254089036826244_7885272053626809051_n.jpg' },
  { id: 2, name: 'น้ำเปล่า', price: 10, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/333248875_579581024006747_1510021285989363797_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeHRa43bszS-bwQ0reZzJ1NgqKeYeyf9iIHczFFYkOdY1pJl6mPExXJ0KCr0OEoEqLGAn0yNBwZjyDyd_tOc7mv3&_nc_ohc=wGg50UIjIs0AX8Hf7Xj&_nc_ht=scontent.xx&oh=03_AdT3RaBQRGXZGzkm5X0wkgSpR5V7U4MRASVfl7FS5Z4nGQ&oe=64D7F58E' },
  { id: 3, name: 'เป๊ปซี่', price: 20, image: 'https://cdn.discordapp.com/attachments/1141665169718648833/1287129731875409930/330030315_568946764781126_8698085156434998836_n.jpg' },
  { id: 4, name: 'ชามะนาว', price: 35, image: 'https://img.wongnai.com/p/1920x0/2020/05/13/fe3d19da6ef244e68d1f87a2bfcac98a.jpg' },
  { id: 5, name: 'น้ำแดงโซดา', price: 20, image: 'https://i.ytimg.com/vi/XKoUNna1_U0/maxresdefault.jpg' },
  { id: 6, name: 'ชาเย็น', price: 35, image: 'https://s3.ap-southeast-1.amazonaws.com/photos.foodietop100.com/RECS/1404_20190905142938.jpg' },
  { id: 7, name: 'นมชมพู', price: 20, image: 'https://images.aws.nestle.recipes/resized/fd7ec4da78cbff67ac28882f1a5f9192_น้ำแดง-นมสด_1200_600.jpeg' },
  { id: 8, name: 'นมสด', price: 25, image: 'https://mpics.mgronline.com/pics/Images/561000008042902.JPEG' },
  { id: 9, name: 'น้ำเขียวโซดา', price: 20, image: 'https://s3.ap-southeast-1.amazonaws.com/photos.foodietop100.com/RECS/2846_20190226145010.jpg' },
  { id: 10, name: 'น้ำส้ม', price: 30, image: 'https://www.sentangsedtee.com/wp-content/uploads/2018/06/7D5A5094-696x464.jpg' },
  { id: 11, name: 'กาแฟเย็น', price: 35, image: 'https://s3.ap-southeast-1.amazonaws.com/photos.foodietop100.com/RECS/4125_20180131112338.jpg' },
  { id: 12, name: 'น้ำมะนาว', price: 25, image: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/331216200_1301236930420513_7478749164564689058_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFBG7vBxMVOZ7h1beDXauauz8ED4TeJn3X0c5bLZH9WnTZGT-99-1tHPSxWJMnzErh9RgijIOG3IDv7BbBGWx3u&_nc_ohc=PLp34Kk_Y_oAX9KOFYJ&_nc_ht=scontent.xx&oh=03_AdQWwGPGBxHweJmJ2Wjq_p6xUplgDWuEpZmrM7IpSGyH4A&oe=64D7EE8A' },
  { id: 13, name: 'น้ำสตรอเบอรี่ปั่น', price: 40, image: 'https://img.wongnai.com/p/1920x0/2021/01/09/7b7d3a0eea1f44b3a8a80122ef734979.jpg' },
  { id: 14, name: 'น้ำมะพร้าวปั่น', price: 40, image: 'https://api2.krua.co/wp-content/uploads/2020/08/RI1478_Gallery_-01.jpg' },
  { id: 15, name: 'น้ำแตงโมปั่น', price: 40, image: 'https://api2.krua.co/wp-content/uploads/2020/08/RI1460_Gallery_-01.jpg' },
  { id: 16, name: 'น้ำมะม่วงปั่น', price: 40, image: 'https://img.wongnai.com/p/1920x0/2019/04/17/8121d3c4b81d42c4bc994946ac1fe5d8.jpg' },
  { id: 17, name: 'น้ำผลไม้รวม', price: 45, image: 'https://img.wongnai.com/p/1920x0/2021/03/24/1c1fdb51c11745b68e54d6a3cf3fc8f8.jpg' },
];

//ดูข้อมูลเมนูทั้งหมด
app.get('/api/menuItem', (req, res) => {
  res.json(menuItems)
})

app.get('/api/menumain', (req, res) => {
  res.json(menumain)
})

app.get('/api/menusnack', (req, res) => {
  res.json(menusnack)
})

app.get('/api/menudrink', (req, res) => {
  res.json(menudrink)
})


//ดูข้อมูลเมนูใช้ ID
app.get('/api/menuItem/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const item = menuItems.find(item => item.id === itemId)
  if (item) {
    res.json(item)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.get('/api/menumain/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const item = menumain.find(item => item.id === itemId)
  if (item) {
    res.json(item)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.get('/api/menusnack/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const item = menusnack.find(item => item.id === itemId)
  if (item) {
    res.json(item)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.get('/api/menudrink/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const item = menudrink.find(item => item.id === itemId)
  if (item) {
    res.json(item)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})


//create ใหม่
app.post('/api/menuItem', (req, res) => {
  const newItem = {
    id: menuItems.length + 1,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  }
  menuItems.push(newItem)
  res.status(201).json(newItem)
})

app.post('/api/menumain', (req, res) => {
  const newItem = {
    id: menumain.length + 1,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  }
  menumain.push(newItem)
  res.status(201).json(newItem)
})

app.post('/api/menusnack', (req, res) => {
  const newItem = {
    id: menusnack.length + 1,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  }
  menusnack.push(newItem)
  res.status(201).json(newItem)
})

app.post('/api/menudrink', (req, res) => {
  const newItem = {
    id: menudrink.length + 1,
    name: req.body.name,
    price: req.body.price,
    image: req.body.image
  }
  menudrink.push(newItem)
  res.status(201).json(newItem)
})


//update ข้อมูล
app.put('/api/menuItem/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menuItems.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    const updatedItem = {
      id: itemId,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image
    }
    menuItems[itemIndex] = updatedItem
    res.json(updatedItem)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.put('/api/menumain/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menumain.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    const updatedItem = {
      id: itemId,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image
    }
    menumain[itemIndex] = updatedItem
    res.json(updatedItem)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.put('/api/menusnack/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menusnack.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    const updatedItem = {
      id: itemId,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image
    }
    menusnack[itemIndex] = updatedItem
    res.json(updatedItem)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.put('/api/menudrink/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menudrink.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    const updatedItem = {
      id: itemId,
      name: req.body.name,
      price: req.body.price,
      image: req.body.image
    }
    menudrink[itemIndex] = updatedItem
    res.json(updatedItem)
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

//delete ข้อมูล
app.delete('/api/menuItem/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menuItems.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    menuItems.splice(itemIndex, 1)
    res.json({message: 'Item deleted successfully'})
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.delete('/api/menumain/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menumain.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    menumain.splice(itemIndex, 1)
    res.json({message: 'Item deleted successfully'})
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.delete('/api/menusnack/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menusnack.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    menusnack.splice(itemIndex, 1)
    res.json({message: 'Item deleted successfully'})
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.delete('/api/menudrink/:id', (req, res) => {
  const itemId = parseInt(req.params.id)
  const itemIndex = menudrink.findIndex(item => item.id === itemId)
  if (itemIndex !== -1) {
    menudrink.splice(itemIndex, 1)
    res.json({message: 'Item deleted successfully'})
  } else {
    res.status(404).json({message: 'Item not found'})
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
