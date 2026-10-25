
var shops = {
  padthai: {
    name: "ผัดไทยประตูผี",
    english: "Pad Thai Pratu Phi",
    area: "ประตูผี เขตพระนคร",
    type: "ผัดไทย",
    open: "17:00–24:00",
    story: "ร้านผัดไทยเก่าแก่ย่านประตูผี จุดเด่นคือผัดเส้นจันท์ด้วยเตาถ่านไฟแรงจนเส้นหอมกลิ่นกระทะ และผัดไทยห่อไข่ที่ใช้ไข่แผ่นบางห่อเส้นเป็นทรงหมอน",
    menu: [
      {
        name: "ผัดไทยห่อไข่",
        english: "Pad Thai wrapped in egg",
        picture: "images/food/padthai-egg.svg",
        spicy: 1,
        ingredients: ["เส้นจันท์", "กุ้งสด", "ไข่", "ถั่วงอก", "กุยช่าย", "ถั่วลิสง"],
        about: "เส้นจันท์ผัดซอสมะขามสูตรร้าน ห่อด้วยไข่ทอดแผ่นบางจนเหลืองกรอบขอบ ผ่าแล้วไอร้อนลอยออกมาพร้อมกลิ่นกระทะ",
        tip: "บีบมะนาวและโรยพริกป่นก่อนคลุก รสจะสดขึ้นชัดเจน"
      },
      {
        name: "ผัดไทยกุ้งสด",
        english: "Pad Thai with fresh prawns",
        picture: "images/food/padthai-shrimp.svg",
        spicy: 1,
        ingredients: ["เส้นจันท์", "กุ้งแม่น้ำ", "เต้าหู้", "หัวไชโป๊", "ถั่วงอก"],
        about: "ผัดไทยแบบดั้งเดิม เส้นเหนียวนุ่ม ซอสหวานอมเปรี้ยว เสิร์ฟพร้อมกุ้งตัวโตและผักเคียง",
        tip: "กินคู่หัวปลีกับใบกุยช่ายสดเพื่อตัดเลี่ยน"
      },
      {
        name: "น้ำส้มคั้น",
        english: "Fresh-squeezed orange juice",
        picture: "images/food/orange-juice.svg",
        spicy: 0,
        ingredients: ["ส้มสายน้ำผึ้ง", "เกลือเล็กน้อย"],
        about: "น้ำส้มคั้นสดเนื้อแน่น มีเนื้อส้มปนในแก้ว เครื่องดื่มคู่ผัดไทยที่คนสั่งกันเป็นประจำ",
        tip: "สั่งแบบไม่ใส่น้ำแข็งเพื่อรสเข้มเต็มที่"
      }
    ]
  },
  jayfai: {
    name: "เจ๊ไฝ",
    english: "Jay Fai",
    area: "ถนนมหาไชย เขตพระนคร",
    type: "อาหารทะเลผัดเตาถ่าน",
    open: "09:00–19:00",
    story: "แม่ครัวสวมแว่นกันลมยืนผัดหน้าเตาถ่านเอง ร้านนี้มีชื่อเรื่องไข่เจียวปูที่ใส่เนื้อปูก้อนโตแน่นจนแทบไม่เห็นไข่ ต้องเผื่อเวลารอคิว",
    menu: [
      {
        name: "ไข่เจียวปู",
        english: "Crab omelette",
        picture: "images/food/crab-omelette.svg",
        spicy: 0,
        ingredients: ["เนื้อปูก้อน", "ไข่ไก่", "น้ำมันร้อนจัด"],
        about: "ไข่ทอดในน้ำมันร้อนจัดม้วนเป็นแท่งหนา ข้างนอกเหลืองกรอบ ข้างในเป็นเนื้อปูก้อนล้วน",
        tip: "กินคู่น้ำจิ้มศรีราชา ตัดรสมันได้พอดี"
      },
      {
        name: "ผัดขี้เมาทะเล",
        english: "Drunken noodles with seafood",
        picture: "images/food/drunken-noodles.svg",
        spicy: 3,
        ingredients: ["เส้นใหญ่", "กุ้ง", "ปลาหมึก", "ใบกะเพรา", "พริกสด"],
        about: "เส้นใหญ่ผัดไฟแรงจนเกรียมขอบ หอมใบกะเพราและพริกสด ใส่ทะเลแน่นจาน",
        tip: "เผ็ดจริง สั่งลดพริกได้"
      },
      {
        name: "ต้มยำกุ้งน้ำข้น",
        english: "Creamy tom yum goong",
        picture: "images/food/tom-yum.svg",
        spicy: 3,
        ingredients: ["กุ้งแม่น้ำ", "ข่า", "ตะไคร้", "ใบมะกรูด", "พริกเผา"],
        about: "น้ำซุปเปรี้ยวเผ็ดเข้มข้น มันกุ้งละลายจนน้ำเป็นสีส้ม กลิ่นสมุนไพรชัด",
        tip: "สั่งข้าวสวยเพิ่มเพราะน้ำซุปเข้มมาก"
      }
    ]
  },
  chicken: {
    name: "ข้าวมันไก่ประตูน้ำ",
    english: "Pratunam Chicken Rice",
    area: "ประตูน้ำ เขตราชเทวี",
    type: "ข้าวมันไก่",
    open: "06:00–14:00 · 17:00–03:00",
    story: "ร้านข้าวมันไก่ที่พนักงานใส่เสื้อสีชมพูทั้งร้าน ไก่ต้มเนื้อนุ่ม ข้าวหุงด้วยน้ำมันไก่และขิงจนหอม เปิดทั้งเช้าและดึก",
    menu: [
      {
        name: "ข้าวมันไก่ต้ม",
        english: "Hainanese chicken rice",
        picture: "images/food/chicken-rice.svg",
        spicy: 1,
        ingredients: ["ไก่ต้ม", "ข้าวมัน", "แตงกวา", "ผักชี", "น้ำจิ้มเต้าเจี้ยว"],
        about: "ไก่ต้มหนังเด้งเนื้อนุ่ม หั่นวางบนข้าวมันร้อน ราดน้ำจิ้มเต้าเจี้ยวขิงพริก",
        tip: "ขอน้ำจิ้มเพิ่มได้ น้ำจิ้มคือหัวใจของจาน"
      },
      {
        name: "ข้าวมันไก่ทอด",
        english: "Fried chicken rice",
        picture: "images/food/fried-chicken-rice.svg",
        spicy: 0,
        ingredients: ["ไก่ทอด", "ข้าวมัน", "น้ำจิ้มหวาน"],
        about: "ไก่ทอดหนังกรอบ เนื้อในชุ่มฉ่ำ จิ้มน้ำจิ้มไก่หวานอมเผ็ด",
        tip: "สั่งแบบผสมต้มกับทอดได้ในจานเดียว"
      },
      {
        name: "น้ำซุปฟัก",
        english: "Winter melon soup",
        picture: "images/food/melon-soup.svg",
        spicy: 0,
        ingredients: ["ฟักเขียว", "กระดูกไก่", "ต้นหอม"],
        about: "น้ำซุปใสรสกลมกล่อม เคี่ยวจากกระดูกไก่ ใส่ฟักชิ้นนุ่ม",
        tip: "ซดสลับกับข้าวมันช่วยไม่ให้เลี่ยน"
      }
    ]
  },
  wattana: {
    name: "วัฒนาพานิช",
    english: "Wattana Panich",
    area: "เอกมัย เขตวัฒนา",
    type: "ก๋วยเตี๋ยวเนื้อตุ๋น",
    open: "09:00–19:00",
    story: "หม้อน้ำซุปใบใหญ่หน้าร้านเคี่ยวต่อเนื่องเหมือนน้ำซุปที่ไม่เคยหยุดเคี่ยว น้ำซุปจึงข้นและหอมเครื่องเทศ เนื้อตุ๋นนุ่มละลายในปาก",
    menu: [
      {
        name: "ก๋วยเตี๋ยวเนื้อตุ๋น",
        english: "Braised beef noodle soup",
        picture: "images/food/beef-noodle.svg",
        spicy: 1,
        ingredients: ["เนื้อตุ๋น", "เส้นเล็ก", "ผักบุ้ง", "ต้นหอม", "น้ำซุปเครื่องเทศ"],
        about: "น้ำซุปสีเข้มเคี่ยวเครื่องเทศจีน เนื้อตุ๋นชิ้นโต เส้นเล็กลวกพอดี",
        tip: "เติมพริกน้ำส้มนิดหน่อยเพื่อชูรสน้ำซุป"
      },
      {
        name: "เนื้อเปื่อยลูกชิ้น",
        english: "Tender beef with meatballs",
        picture: "images/food/beef-meatball.svg",
        spicy: 1,
        ingredients: ["เนื้อเปื่อย", "ลูกชิ้นเนื้อ", "ตับ", "ผักชี"],
        about: "รวมเนื้อหลายส่วนกับลูกชิ้นเนื้อเด้ง ๆ ในน้ำซุปเข้ม",
        tip: "สั่งแบบไม่ใส่เส้นแล้วกินกับข้าวสวยก็อร่อย"
      }
    ]
  },
  kuayjab: {
    name: "ก๋วยจั๊บนายเอ็ก",
    english: "Kuay Jab Nai Ek",
    area: "เยาวราช เขตสัมพันธวงศ์",
    type: "ก๋วยจั๊บน้ำข้น",
    open: "08:00–24:00",
    story: "ก๋วยจั๊บน้ำข้นรสพริกไทยจัด เส้นม้วนเหนียวนุ่ม กินกับหมูกรอบหนังพอง เป็นร้านที่คนเยาวราชพาคนมาเยี่ยมกินกันมาหลายรุ่น",
    menu: [
      {
        name: "ก๋วยจั๊บน้ำข้น",
        english: "Peppery rolled-noodle soup",
        picture: "images/food/kuay-jab.svg",
        spicy: 2,
        ingredients: ["เส้นก๋วยจั๊บ", "เครื่องในหมู", "ไข่พะโล้", "พริกไทย"],
        about: "น้ำซุปพริกไทยเผ็ดร้อนคอ เส้นม้วนนุ่มลื่น ใส่เครื่องในหมูทำสะอาด",
        tip: "สั่งไข่พะโล้เพิ่ม ไข่แดงเยิ้มเข้ากับน้ำซุป"
      },
      {
        name: "ก๋วยจั๊บหมูกรอบ",
        english: "Kuay jab with crispy pork",
        picture: "images/food/kuay-jab-crispy-pork.svg",
        spicy: 2,
        ingredients: ["หมูกรอบ", "เส้นก๋วยจั๊บ", "กระเทียมเจียว"],
        about: "เพิ่มหมูกรอบหนังพองกรุบ ซึมน้ำซุปแล้วยังกรอบอยู่",
        tip: "แยกหมูกรอบใส่จานต่างหากถ้าอยากให้กรอบนาน"
      }
    ]
  },
  hoymong: {
    name: "หอยทอดนายหมง",
    english: "Hoy Tod Nai Mong",
    area: "ถนนพลับพลาไชย สัมพันธวงศ์",
    type: "หอยทอด / ออส่วน",
    open: "11:00–19:00",
    story: "หอยทอดตำรับจีนแต้จิ๋ว ทอดบนกระทะแบนใบใหญ่จนแป้งกรอบเป็นแผ่น หอยนางรมตัวอวบ เสิร์ฟพร้อมซอสพริกรสจัด",
    menu: [
      {
        name: "หอยทอดกรอบ",
        english: "Crispy oyster pancake",
        picture: "images/food/hoy-tod.svg",
        spicy: 1,
        ingredients: ["หอยนางรม", "แป้ง", "ไข่", "ถั่วงอก", "ต้นหอม"],
        about: "แป้งทอดกรอบจนพองบนกระทะแบน หอยนางรมตัวอวบโรยหน้า วางบนถั่วงอกผัด",
        tip: "ราดซอสพริกศรีราชาให้ทั่วก่อนกิน"
      },
      {
        name: "ออส่วน",
        english: "Gooey oyster omelette",
        picture: "images/food/or-suan.svg",
        spicy: 0,
        ingredients: ["หอยนางรม", "แป้งมัน", "ไข่", "กระเทียม"],
        about: "แป้งนุ่มหนึบผัดกับไข่ หอยสุกพอดียังชุ่มน้ำ เสิร์ฟบนกระทะร้อน",
        tip: "กินตอนยังร้อน แป้งจะหนึบที่สุด"
      }
    ]
  },
  tk: {
    name: "T&K Seafood",
    english: "T&K Seafood",
    area: "หัวมุมซอยผดุงด้าว เยาวราช",
    type: "ซีฟู้ดริมทาง",
    open: "16:30–01:00",
    story: "ร้านซีฟู้ดเสื้อเขียวหัวมุมเยาวราช โต๊ะเต็มฟุตบาท กุ้งเผาตัวโต ปูผัดผงกะหรี่ และน้ำจิ้มซีฟู้ดรสจัด บรรยากาศคึกคักตลอดคืน",
    menu: [
      {
        name: "กุ้งเผา",
        english: "Grilled river prawns",
        picture: "images/food/grilled-shrimp.svg",
        spicy: 2,
        ingredients: ["กุ้งแม่น้ำ", "น้ำจิ้มซีฟู้ด", "มะนาว"],
        about: "กุ้งแม่น้ำตัวโตเผาถ่านจนเปลือกหอม มันกุ้งเยิ้มสีส้ม จิ้มน้ำจิ้มเขียวรสจัด",
        tip: "ผ่าหัวกุ้งคลุกมันกับข้าวสวย"
      },
      {
        name: "ปูผัดผงกะหรี่",
        english: "Stir-fried crab in curry powder",
        picture: "images/food/curry-crab.svg",
        spicy: 1,
        ingredients: ["ปูม้า", "ผงกะหรี่", "ไข่", "ขึ้นฉ่าย", "ต้นหอม"],
        about: "ซอสผงกะหรี่ผัดไข่เนียนข้น หอมเครื่องเทศ เคลือบชิ้นปูจนทั่ว",
        tip: "ราดซอสบนข้าวสวยร้อนก็อร่อยเป็นจานหลัก"
      }
    ]
  },
  mango: {
    name: "มะม่วง แม่วริน",
    english: "Mae Varee Mango",
    area: "ทองหล่อ เขตวัฒนา",
    type: "ข้าวเหนียวมะม่วง",
    open: "06:00–22:00",
    story: "ร้านผลไม้หัวมุมที่มีข้าวเหนียวมะม่วงเป็นเมนูขึ้นชื่อ มะม่วงน้ำดอกไม้สุกฉ่ำ ข้าวเหนียวมูนกะทิหอมหวานมัน",
    menu: [
      {
        name: "ข้าวเหนียวมะม่วง",
        english: "Mango sticky rice",
        picture: "images/food/mango-sticky-rice.svg",
        spicy: 0,
        ingredients: ["มะม่วงน้ำดอกไม้", "ข้าวเหนียวมูน", "กะทิ", "ถั่วทอง"],
        about: "มะม่วงน้ำดอกไม้หวานหอม ข้าวเหนียวมูนนุ่ม ราดหัวกะทิเค็มนิด ๆ โรยถั่วทองกรอบ",
        tip: "เลือกกล่องที่มะม่วงสีเหลืองทองทั้งลูก หวานที่สุด"
      },
      {
        name: "ข้าวเหนียวอัญชัน",
        english: "Butterfly-pea sticky rice",
        picture: "images/food/blue-sticky-rice.svg",
        spicy: 0,
        ingredients: ["ข้าวเหนียวอัญชัน", "มะม่วง", "กะทิ"],
        about: "ข้าวเหนียวย้อมสีฟ้าจากดอกอัญชัน รสเดียวกับต้นตำรับแต่สีสวยสะดุดตา",
        tip: "ถ่ายรูปก่อนกิน สีฟ้ากับเหลืองตัดกันสวยมาก"
      }
    ]
  },
  oysternight: {
    name: "หอยทอดรถเข็น",
    english: "Oyster Omelette Cart",
    area: "ริมถนนเยาวราช",
    type: "หอยทอด",
    open: "18:00–01:00",
    story: "รถเข็นหอยทอดหน้าร้านทองที่ส่งเสียงตะหลิวกระทบกระทะทั้งคืน เลือกได้ทั้งแบบกรอบและแบบนุ่ม หรือเปลี่ยนเป็นกุ้งก็ได้",
    menu: [
      {
        name: "หอยทอดกรอบ",
        english: "Crispy oyster omelette",
        picture: "images/food/hoy-tod-night.svg",
        spicy: 1,
        ingredients: ["หอยนางรม", "แป้ง", "ไข่", "ถั่วงอก"],
        about: "แป้งทอดกรอบบนกระทะเหล็ก หอยอวบ เสิร์ฟร้อนจากเตา",
        tip: "ขอแบบกรอบพิเศษ แม่ค้าจะทอดนานขึ้นอีกนิด"
      },
      {
        name: "ออส่วนหอยนางรม",
        english: "Soft oyster omelette",
        picture: "images/food/or-suan-night.svg",
        spicy: 0,
        ingredients: ["หอยนางรม", "แป้งมัน", "ไข่"],
        about: "แป้งเนื้อหนึบนุ่มผัดกับไข่ หอยสุกกำลังดี",
        tip: "จิ้มซอสพริกรสเปรี้ยวช่วยตัดมัน"
      }
    ]
  },
  dimsum: {
    name: "ติ่มซำ ขนมจีบ",
    english: "Dim Sum & Shumai",
    area: "ซอยเยาวราช",
    type: "ติ่มซำ",
    open: "17:00–23:00",
    story: "เข่งไม้ไผ่ซ้อนกันสูงควันฉุย ขนมจีบหมูกุ้ง ฮะเก๋าแป้งใส และซาลาเปาไส้ทะลัก นึ่งใหม่ทุกเข่ง",
    menu: [
      {
        name: "ขนมจีบหมูกุ้ง",
        english: "Pork & shrimp shumai",
        picture: "images/food/shumai.svg",
        spicy: 0,
        ingredients: ["หมูสับ", "กุ้ง", "แผ่นเกี๊ยว", "ไข่ปู"],
        about: "เนื้อหมูสับผสมกุ้งเด้ง ห่อแผ่นเกี๊ยวเหลือง โรยไข่ปูสีส้ม",
        tip: "จิ้มซีอิ๊วดำกับพริกน้ำส้ม"
      },
      {
        name: "ฮะเก๋า",
        english: "Har gow shrimp dumplings",
        picture: "images/food/har-gow.svg",
        spicy: 0,
        ingredients: ["กุ้งทั้งตัว", "แป้งใส", "หน่อไม้"],
        about: "แป้งบางใสเห็นกุ้งสีชมพูข้างใน จับจีบสวยเป็นทรงจันทร์เสี้ยว",
        tip: "กินตอนร้อน แป้งจะนุ่มใส"
      },
      {
        name: "ซาลาเปาหมูแดง",
        english: "BBQ pork buns",
        picture: "images/food/bbq-pork-bun.svg",
        spicy: 0,
        ingredients: ["แป้งซาลาเปา", "หมูแดง", "ซอสหวาน"],
        about: "แป้งขาวนุ่มฟู ไส้หมูแดงรสหวานเค็ม",
        tip: "ลองไส้ครีมลาวาเป็นของหวานปิดท้าย"
      },
      {
        name: "ซาลาเปาไส้ครีม",
        english: "Custard buns",
        picture: "images/food/custard-bun.svg",
        spicy: 0,
        ingredients: ["แป้งซาลาเปา", "ไข่เค็ม", "คัสตาร์ด"],
        about: "ไส้คัสตาร์ดไข่เค็มเยิ้มออกมาเมื่อบิครึ่ง",
        tip: "ระวังร้อน ไส้เป็นลาวา"
      }
    ]
  },
  soymilk: {
    name: "น้ำเต้าหู้",
    english: "Soy Milk Stall",
    area: "ซอยเยาวราช",
    type: "น้ำเต้าหู้ / ของหวาน",
    open: "18:00–24:00",
    story: "น้ำเต้าหู้ร้อนหอมกลิ่นถั่ว เลือกเครื่องใส่เองได้ ทั้งลูกเดือย ถั่วแดง เฉาก๊วย สาคู และกินคู่ปาท่องโก๋ทอดใหม่",
    menu: [
      {
        name: "น้ำเต้าหู้ทรงเครื่อง",
        english: "Soy milk with toppings",
        picture: "images/food/soy-milk.svg",
        spicy: 0,
        ingredients: ["น้ำเต้าหู้", "ถั่วแดง", "เฉาก๊วย", "เม็ดแมงลัก", "ลูกเดือย"],
        about: "น้ำเต้าหู้ร้อนหวานพอดี ใส่เครื่องหลายอย่างให้เคี้ยวเพลิน",
        tip: "สั่งหวานน้อยแล้วเติมน้ำเชื่อมเองได้"
      },
      {
        name: "เต้าฮวยน้ำขิง",
        english: "Silken tofu in ginger syrup",
        picture: "images/food/tofu-ginger.svg",
        spicy: 1,
        ingredients: ["เต้าฮวย", "น้ำขิง", "ถั่วลิสง"],
        about: "เต้าฮวยเนื้อเนียนในน้ำขิงร้อน เผ็ดอุ่นที่คอ เหมาะกับคืนลมเย็น",
        tip: "ใส่ปาท่องโก๋หั่นชิ้นลงไปแช่"
      },
      {
        name: "ปาท่องโก๋",
        english: "Fried dough sticks",
        picture: "images/food/patongko.svg",
        spicy: 0,
        ingredients: ["แป้ง", "สังขยาใบเตย"],
        about: "ปาท่องโก๋ทอดใหม่ กรอบนอกนุ่มใน จิ้มสังขยาใบเตยสีเขียว",
        tip: "สั่งเป็นคู่แล้วจุ่มน้ำเต้าหู้"
      }
    ]
  },
  khaotom: {
    name: "ข้าวต้มปลา",
    english: "Rice Soup with Fish",
    area: "ถนนเยาวราช",
    type: "ข้าวต้ม",
    open: "17:00–02:00",
    story: "ข้าวต้มน้ำใสร้อนควันกรุ่น ปลากะพงชิ้นหนาสดเด้ง โรยขิงซอย ขึ้นฉ่าย และกระเทียมเจียว อาหารปิดท้ายคืนของคนเยาวราช",
    menu: [
      {
        name: "ข้าวต้มปลากะพง",
        english: "Sea bass rice soup",
        picture: "images/food/fish-rice-soup.svg",
        spicy: 0,
        ingredients: ["ปลากะพง", "ข้าวสวย", "ขิง", "ขึ้นฉ่าย", "กระเทียมเจียว"],
        about: "น้ำซุปใสรสกลมกล่อม ปลาลวกพอดีเนื้อยังนุ่ม",
        tip: "เติมพริกไทยกับพริกน้ำส้มนิดหน่อย"
      },
      {
        name: "ข้าวต้มกุ้ง",
        english: "Shrimp rice soup",
        picture: "images/food/shrimp-rice-soup.svg",
        spicy: 0,
        ingredients: ["กุ้ง", "ข้าวสวย", "ตั้งฉ่าย", "ต้นหอม"],
        about: "กุ้งตัวโตลวกในน้ำซุปร้อน หวานธรรมชาติ",
        tip: "ใส่ไข่ลวกเพิ่มให้น้ำซุปข้นขึ้น"
      }
    ]
  },
  birdnest: {
    name: "รังนก",
    english: "Bird’s Nest Soup",
    area: "ถนนเยาวราช",
    type: "รังนก / ของบำรุง",
    open: "10:00–24:00",
    story: "ร้านรังนกตำรับจีนที่เสิร์ฟทั้งแบบร้อนและเย็น ตุ๋นกับน้ำตาลกรวด ใส่เก๋ากี้ เป็นของบำรุงที่คนจีนนิยมกินกันมานาน",
    menu: [
      {
        name: "รังนกน้ำแดงร้อน",
        english: "Hot bird’s nest soup",
        picture: "images/food/birdnest-hot.svg",
        spicy: 0,
        ingredients: ["รังนก", "น้ำตาลกรวด", "เก๋ากี้", "ใบเตย"],
        about: "รังนกเส้นยาวตุ๋นจนนุ่ม น้ำหวานหอมใบเตย อุ่นท้อง",
        tip: "กินตอนอุ่น ๆ รสหวานจะนุ่มลิ้น"
      },
      {
        name: "รังนกเย็น",
        english: "Iced bird’s nest",
        picture: "images/food/birdnest-cold.svg",
        spicy: 0,
        ingredients: ["รังนก", "น้ำแข็ง", "เก๋ากี้"],
        about: "เวอร์ชันเย็นชื่นใจ เหมาะกับคืนร้อนอบอ้าวในเยาวราช",
        tip: "ขอน้ำแข็งแยกเพื่อไม่ให้รสจาง"
      }
    ]
  },
  chestnut: {
    name: "เกาลัดคั่ว",
    english: "Roasted Chestnuts",
    area: "ริมถนนเยาวราช",
    type: "ของกินเล่น",
    open: "16:00–24:00",
    story: "เกาลัดคั่วในกระทะทรายดำร้อน กลิ่นหอมหวานลอยไปทั้งถนน แกะง่าย เนื้อเหลืองนุ่มร่วน กินเดินเล่นได้ทั้งคืน",
    menu: [
      {
        name: "เกาลัดคั่ว",
        english: "Sand-roasted chestnuts",
        picture: "images/food/chestnuts.svg",
        spicy: 0,
        ingredients: ["เกาลัดจีน", "ทรายดำ", "น้ำตาล"],
        about: "คั่วในทรายร้อนจนเปลือกแตก เนื้อในหวานหอมและร่วน",
        tip: "ซื้อถุงเล็กหลายถุงตอนยังร้อน แกะง่ายกว่าตอนเย็น"
      },
      {
        name: "แปะก๊วยน้ำตาล",
        english: "Ginkgo in sweet syrup",
        picture: "images/food/ginkgo.svg",
        spicy: 0,
        ingredients: ["แปะก๊วย", "น้ำตาลทราย", "ใบเตย"],
        about: "แปะก๊วยต้มน้ำตาลรสหวานละมุน เนื้อหนึบ ขมปลายนิด ๆ",
        tip: "สั่งแบบร้อนจะหอมกว่า"
      }
    ]
  }
};

// ---------- ตัวแปร ----------
var place = 0;          // 0 = ถนนหลัก (กลางวัน), 1 = เยาวราช (กลางคืน)
var tukX = 0;           // ตำแหน่งรถตุ๊กๆ (หน่วย px)
var wheelTurn = 0;      // ล้อหมุนไปกี่องศาแล้ว
var dragging = false;   // กำลังลากรถอยู่ไหม
var moved = false;      // ลากไปแล้วจริงๆ ไหม
var startX = 0;
var timer = null;

var tuktuk = document.getElementById("tuktuk");
var road = document.getElementById("road");
var roadLine = document.getElementById("roadLine");
var wheel1 = document.getElementById("wheel1");
var wheel2 = document.getElementById("wheel2");
var bgNight = document.getElementById("bgNight");


// =============================================
//  รถตุ๊กๆ
// =============================================

// รถวิ่งไปได้ไกลสุดเท่าไหร่
function maxX() {
  return road.clientWidth - tuktuk.offsetWidth;
}

// ย้ายรถไปที่ตำแหน่ง x
function moveTuk(x) {
  if (x < 0) {
    x = 0;
  }
  if (x > maxX()) {
    x = maxX();
  }

  // ถ้าวิ่งไปทางซ้าย ให้รถหันไปทางซ้าย
  if (x < tukX - 0.5) {
    tuktuk.classList.add("back");
  }
  if (x > tukX + 0.5) {
    tuktuk.classList.remove("back");
  }

  // ให้ล้อหมุน
  wheelTurn = wheelTurn + (x - tukX) * 2;
  wheel1.style.transform = "rotate(" + wheelTurn + "deg)";
  wheel2.style.transform = "rotate(" + wheelTurn + "deg)";

  // ให้เส้นถนนเลื่อน
  roadLine.style.backgroundPosition = (-x) + "px 0";

  tukX = x;
  tuktuk.style.left = x + "px";

  // ค่อยๆ เปลี่ยนรูปจากกลางวันเป็นกลางคืน
  bgNight.style.opacity = x / maxX();
}

// เริ่มลากรถ
tuktuk.addEventListener("pointerdown", function (e) {
  clearInterval(timer);
  dragging = true;
  moved = false;
  startX = e.clientX - tukX;
  tuktuk.setPointerCapture(e.pointerId);
});

// กำลังลาก
tuktuk.addEventListener("pointermove", function (e) {
  if (dragging == false) {
    return;
  }
  var newX = e.clientX - startX;
  if (Math.abs(newX - tukX) > 3) {
    moved = true;
  }
  moveTuk(newX);
});

// ปล่อยมือ
tuktuk.addEventListener("pointerup", stopDrag);
tuktuk.addEventListener("pointercancel", stopDrag);

function stopDrag() {
  if (dragging == false) {
    return;
  }
  dragging = false;

  if (moved == false) {
    // กดเฉยๆ ไม่ได้ลาก = ไปอีกที่หนึ่ง
    if (place == 0) {
      goTo(1);
    } else {
      goTo(0);
    }
  } else if (tukX > maxX() / 2) {
    // ลากเกินครึ่งถนน = ไปเยาวราช
    goTo(1);
  } else {
    goTo(0);
  }
}

// ขับรถไปที่ป้าย (0 = ซ้าย, 1 = ขวา)
function goTo(number) {
  clearInterval(timer);
  var target = 0;
  if (number == 1) {
    target = maxX();
  }

  timer = setInterval(function () {
    var distance = target - tukX;
    if (Math.abs(distance) < 2) {
      moveTuk(target);
      clearInterval(timer);
      changePlace(number);
    } else {
      moveTuk(tukX + distance * 0.12 + Math.sign(distance) * 1.5);
    }
  }, 16);
}

// เปลี่ยนสถานที่
function changePlace(number) {
  place = number;
  var stops = document.querySelectorAll(".stop");

  if (number == 0) {
    document.body.className = "day";
    document.getElementById("placeName").innerHTML = "ถนนหลัก (กลางวัน)";
    document.getElementById("hint").innerHTML = "ลากตุ๊กๆ ไปทางขวาเพื่อไปเยาวราช →";
    document.getElementById("shopsDay").classList.remove("hide");
    document.getElementById("shopsNight").classList.add("hide");
    document.getElementById("chipsDay").classList.remove("hide");
    document.getElementById("chipsNight").classList.add("hide");
    stops[0].classList.add("active");
    stops[1].classList.remove("active");
  } else {
    document.body.className = "night";
    document.getElementById("placeName").innerHTML = "เยาวราช (กลางคืน)";
    document.getElementById("hint").innerHTML = "← ลากตุ๊กๆ กลับไปถนนหลัก";
    document.getElementById("shopsDay").classList.add("hide");
    document.getElementById("shopsNight").classList.remove("hide");
    document.getElementById("chipsDay").classList.add("hide");
    document.getElementById("chipsNight").classList.remove("hide");
    stops[0].classList.remove("active");
    stops[1].classList.add("active");
  }
}

// ถ้าย่อขยายหน้าจอ ให้รถอยู่ที่ป้ายเดิม
window.addEventListener("resize", function () {
  if (place == 1) {
    moveTuk(maxX());
  } else {
    moveTuk(0);
  }
});


// =============================================
//  ป๊อปอัพ ร้านอาหาร และ เมนู
// =============================================

// เปิดหน้าร้าน
function openShop(id) {
  var shop = shops[id];
  var html = "";

  html += "<div class='popup-inside'>";
  html += "<h2 class='shop-sign'>" + shop.name + "</h2>";
  html += "<p class='english'>" + shop.english + "</p>";
  html += "<p class='info'>ย่าน: <b>" + shop.area + "</b></p>";
  html += "<p class='info'>ประเภท: <b>" + shop.type + "</b></p>";
  html += "<p class='info'>เวลาเปิด: <b>" + shop.open + "</b></p>";
  html += "<p>" + shop.story + "</p>";
  html += "<p class='small-title'>เมนูแนะนำ</p>";
  html += "<div class='menu-list'>";

  for (var i = 0; i < shop.menu.length; i++) {
    var food = shop.menu[i];
    html += "<div class='menu-item' onclick=\"showFood('" + id + "', " + i + ", true)\">";
    html += "<img src='" + food.picture + "' alt='" + food.name + "'>";
    html += "<p>" + food.name + "</p>";
    html += "</div>";
  }

  html += "</div>";
  html += "</div>";

  openPopup(html);
}

// เปิดรายละเอียดอาหาร
function showFood(id, number, fromShop) {
  var shop = shops[id];
  var food = shop.menu[number];
  var html = "";

  // ระดับความเผ็ด
  var spicyText = "ไม่เผ็ด";
  if (food.spicy == 1) {
    spicyText = "🌶️ เผ็ดน้อย";
  }
  if (food.spicy == 2) {
    spicyText = "🌶️🌶️ เผ็ดกลาง";
  }
  if (food.spicy == 3) {
    spicyText = "🌶️🌶️🌶️ เผ็ดมาก";
  }

  html += "<div class='popup-inside'>";

  if (fromShop == true) {
    html += "<button class='back-btn' onclick=\"openShop('" + id + "')\">← กลับไปหน้าร้าน</button>";
  }

  html += "<div class='food-box'>";
  html += "<div class='food-picture'><img src='" + food.picture + "' alt='" + food.name + "'></div>";
  html += "<div class='food-text'>";
  html += "<h2>" + food.name + "</h2>";
  html += "<p class='english'>" + food.english + "</p>";
  html += "<p>ความเผ็ด: " + spicyText + "</p>";
  html += "<p>" + food.about + "</p>";
  html += "<p><b>วัตถุดิบ</b></p>";
  html += "<div>";
  for (var i = 0; i < food.ingredients.length; i++) {
    html += "<span class='tag'>" + food.ingredients[i] + "</span>";
  }
  html += "</div>";
  html += "<p class='tip'><b>เคล็ดลับ:</b> " + food.tip + "</p>";

  if (fromShop != true) {
    html += "<button class='link-btn' onclick=\"openShop('" + id + "')\">ดูร้าน " + shop.name + "</button>";
  }

  html += "</div>";
  html += "</div>";
  html += "</div>";

  openPopup(html);
}

function openPopup(html) {
  document.getElementById("popupContent").innerHTML = html;
  document.getElementById("popup").classList.remove("hide");
  document.querySelector(".popup").scrollTop = 0;
}

function closePopup() {
  document.getElementById("popup").classList.add("hide");
}

// กดพื้นที่ดำๆ ข้างนอก = ปิด
function clickOutside(e) {
  if (e.target.id == "popup") {
    closePopup();
  }
}

// กดปุ่ม Esc = ปิด
document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    closePopup();
  }
});


// =============================================
//  แกลเลอรีอาหาร
// =============================================

function showGallery(type) {
  var photos = document.querySelectorAll(".photo");

  for (var i = 0; i < photos.length; i++) {
    if (type == "all" || photos[i].classList.contains(type)) {
      photos[i].style.display = "block";
    } else {
      photos[i].style.display = "none";
    }
  }

  document.getElementById("btnAll").classList.remove("active");
  document.getElementById("btnDay").classList.remove("active");
  document.getElementById("btnNight").classList.remove("active");

  if (type == "all") {
    document.getElementById("btnAll").classList.add("active");
  }
  if (type == "day") {
    document.getElementById("btnDay").classList.add("active");
  }
  if (type == "night") {
    document.getElementById("btnNight").classList.add("active");
  }
}

// เริ่มต้นที่ฝั่งถนนหลัก
changePlace(0);
